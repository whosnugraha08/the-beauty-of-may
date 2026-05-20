import { BookPage, pages as defaultPages, chapterNames as defaultChapterNames } from '@/data/chapters';
import { supabase } from '@/lib/supabase';

const ADMIN_PASSWORD = 'al2026';

export interface StoredContent {
  pages: BookPage[];
  chapterNames: Record<number, string>;
  lastModified: string;
}

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

// ===== READ =====
export async function getContentFromDB(): Promise<StoredContent | null> {
  try {
    const { data, error } = await supabase
      .from('book_content')
      .select('pages, chapter_names, updated_at')
      .eq('id', 'main')
      .single();

    if (error || !data) return null;

    return {
      pages: data.pages as BookPage[],
      chapterNames: data.chapter_names as Record<number, string>,
      lastModified: data.updated_at,
    };
  } catch {
    return null;
  }
}

export async function getPages(): Promise<BookPage[]> {
  const stored = await getContentFromDB();
  return stored?.pages ?? defaultPages;
}

export async function getChapterNames(): Promise<Record<number, string>> {
  const stored = await getContentFromDB();
  return stored?.chapterNames ?? defaultChapterNames;
}

// ===== WRITE =====
async function saveContent(content: StoredContent): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('book_content')
      .upsert({
        id: 'main',
        pages: content.pages,
        chapter_names: content.chapterNames,
        updated_at: new Date().toISOString(),
      });

    return !error;
  } catch {
    return false;
  }
}

export async function updatePage(pageId: number, updates: Partial<BookPage>): Promise<boolean> {
  const pages = await getPages();
  const idx = pages.findIndex((p) => p.id === pageId);
  if (idx === -1) return false;
  pages[idx] = { ...pages[idx], ...updates };

  return saveContent({
    pages,
    chapterNames: await getChapterNames(),
    lastModified: new Date().toISOString(),
  });
}

export async function updateChapterName(chapterId: number, name: string): Promise<boolean> {
  const names = { ...(await getChapterNames()) };
  names[chapterId] = name;

  return saveContent({
    pages: await getPages(),
    chapterNames: names,
    lastModified: new Date().toISOString(),
  });
}

export async function resetToDefaults(): Promise<boolean> {
  return saveContent({
    pages: defaultPages,
    chapterNames: defaultChapterNames,
    lastModified: new Date().toISOString(),
  });
}

export function exportContent(pages: BookPage[], chapterNames: Record<number, string>): string {
  const content: StoredContent = {
    pages,
    chapterNames,
    lastModified: new Date().toISOString(),
  };
  return JSON.stringify(content, null, 2);
}

export async function importContent(json: string): Promise<boolean> {
  try {
    const content = JSON.parse(json) as StoredContent;
    if (!content.pages || !Array.isArray(content.pages)) return false;
    return saveContent(content);
  } catch {
    return false;
  }
}

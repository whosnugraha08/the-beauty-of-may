import { BookPage, pages as defaultPages, chapterNames as defaultChapterNames } from '@/data/chapters';

const STORAGE_KEY = 'tbom_content';
const ADMIN_PASSWORD = 'al2026';

export interface StoredContent {
  pages: BookPage[];
  chapterNames: Record<number, string>;
  lastModified: string;
}

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function getStoredContent(): StoredContent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredContent;
  } catch {
    return null;
  }
}

export function saveContent(content: StoredContent): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function getPages(): BookPage[] {
  const stored = getStoredContent();
  return stored?.pages ?? defaultPages;
}

export function getChapterNames(): Record<number, string> {
  const stored = getStoredContent();
  return stored?.chapterNames ?? defaultChapterNames;
}

export function resetToDefaults(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

export function exportContent(): string {
  const content: StoredContent = {
    pages: getPages(),
    chapterNames: getChapterNames(),
    lastModified: new Date().toISOString(),
  };
  return JSON.stringify(content, null, 2);
}

export function importContent(json: string): boolean {
  try {
    const content = JSON.parse(json) as StoredContent;
    if (!content.pages || !Array.isArray(content.pages)) return false;
    saveContent(content);
    return true;
  } catch {
    return false;
  }
}

export function updatePage(pageId: number, updates: Partial<BookPage>): void {
  const pages = [...getPages()];
  const idx = pages.findIndex((p) => p.id === pageId);
  if (idx === -1) return;
  pages[idx] = { ...pages[idx], ...updates };
  saveContent({
    pages,
    chapterNames: getChapterNames(),
    lastModified: new Date().toISOString(),
  });
}

export function updateChapterName(chapterId: number, name: string): void {
  const names = { ...getChapterNames() };
  names[chapterId] = name;
  saveContent({
    pages: getPages(),
    chapterNames: names,
    lastModified: new Date().toISOString(),
  });
}

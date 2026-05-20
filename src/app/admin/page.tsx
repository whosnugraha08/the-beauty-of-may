'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { BookPage } from '@/data/chapters';
import {
  verifyPassword,
  getPages,
  getChapterNames,
  updatePage,
  updateChapterName,
  resetToDefaults,
  exportContent,
  importContent,
} from '@/lib/contentStore';

const PAGE_TYPES = ['cover', 'chapter-title', 'narrative', 'quote', 'lyrics', 'closing', 'blank-left'] as const;
const DECORATION_TYPES = ['none', 'flowers', 'clock', 'stars', 'paths', 'door', 'journal', 'music-notes', 'single-flower', 'dual-stars'] as const;

function LoginGate({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (verifyPassword(password)) {
      onAuth();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <h1 style={styles.loginTitle}>Admin Panel</h1>
        <p style={styles.loginSubtitle}>The beauty of May</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          placeholder="Password"
          style={{
            ...styles.input,
            borderColor: error ? '#e74c3c' : 'rgba(196, 160, 160, 0.3)',
          }}
          autoFocus
        />
        <button onClick={handleLogin} style={styles.primaryBtn}>
          Masuk
        </button>
        {error && <p style={styles.errorText}>Password salah</p>}
      </div>
    </div>
  );
}

function PageEditor({
  page,
  onSave,
  onClose,
}: {
  page: BookPage;
  onSave: (updates: Partial<BookPage>) => void;
  onClose: () => void;
}) {
  const [content, setContent] = useState(page.content || '');
  const [title, setTitle] = useState(page.title || '');
  const [quoteText, setQuoteText] = useState(page.quoteText || '');
  const [quoteAuthor, setQuoteAuthor] = useState(page.quoteAuthor || '');
  const [chapterNumber, setChapterNumber] = useState(page.chapterNumber || '');
  const [pageType, setPageType] = useState(page.type);
  const [decorationType, setDecorationType] = useState(page.decorationType);
  const [accentColor, setAccentColor] = useState(page.accentColor);
  const [lyricsRaw, setLyricsRaw] = useState((page.lyrics || []).join('\n'));

  const handleSave = () => {
    const updates: Partial<BookPage> = {
      content,
      title,
      quoteText: quoteText || undefined,
      quoteAuthor: quoteAuthor || undefined,
      chapterNumber: chapterNumber || undefined,
      type: pageType,
      decorationType,
      accentColor,
    };
    if (pageType === 'lyrics') {
      updates.lyrics = lyricsRaw.split('\n');
    }
    onSave(updates);
    onClose();
  };

  return (
    <div style={styles.editorOverlay}>
      <div style={styles.editorCard}>
        <div style={styles.editorHeader}>
          <h2 style={styles.editorTitle}>Edit Page #{page.id}</h2>
          <button onClick={onClose} style={styles.closeBtn}>✕</button>
        </div>

        <div style={styles.editorBody}>
          <div style={styles.fieldRow}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Type</label>
              <select
                value={pageType}
                onChange={(e) => setPageType(e.target.value as BookPage['type'])}
                style={styles.select}
              >
                {PAGE_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Decoration</label>
              <select
                value={decorationType}
                onChange={(e) => setDecorationType(e.target.value as BookPage['decorationType'])}
                style={styles.select}
              >
                {DECORATION_TYPES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Accent Color</label>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  style={{ width: 36, height: 36, border: 'none', cursor: 'pointer' }}
                />
                <input
                  type="text"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  style={{ ...styles.input, width: 100 }}
                />
              </div>
            </div>
          </div>

          {(pageType === 'chapter-title' || pageType === 'cover') && (
            <>
              {pageType === 'chapter-title' && (
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Chapter Number Label</label>
                  <input
                    type="text"
                    value={chapterNumber}
                    onChange={(e) => setChapterNumber(e.target.value)}
                    style={styles.input}
                    placeholder="e.g., chapter one"
                  />
                </div>
              )}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={styles.input}
                />
              </div>
            </>
          )}

          {(pageType === 'narrative' || pageType === 'quote' || pageType === 'cover' || pageType === 'closing') && (
            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                Content {pageType === 'narrative' ? '(supports HTML: <p>, <em>, etc.)' : ''}
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ ...styles.textarea, minHeight: pageType === 'narrative' ? 200 : 100 }}
              />
            </div>
          )}

          {(pageType === 'narrative' || pageType === 'quote') && (
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Quote Text (optional)</label>
              <textarea
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                style={{ ...styles.textarea, minHeight: 80 }}
              />
            </div>
          )}

          {pageType === 'closing' && (
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Signature (e.g., — Al)</label>
              <input
                type="text"
                value={quoteAuthor}
                onChange={(e) => setQuoteAuthor(e.target.value)}
                style={styles.input}
              />
            </div>
          )}

          {pageType === 'lyrics' && (
            <>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Song Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={styles.input}
                />
              </div>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Lyrics (one line per row, empty line = gap)</label>
                <textarea
                  value={lyricsRaw}
                  onChange={(e) => setLyricsRaw(e.target.value)}
                  style={{ ...styles.textarea, minHeight: 300, fontFamily: 'monospace' }}
                />
              </div>
            </>
          )}
        </div>

        <div style={styles.editorFooter}>
          <button onClick={onClose} style={styles.secondaryBtn}>Batal</button>
          <button onClick={handleSave} style={styles.primaryBtn}>Simpan</button>
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pages, setPages] = useState<BookPage[]>([]);
  const [chapterNames, setChapterNamesState] = useState<Record<number, string>>({});
  const [editingPage, setEditingPage] = useState<BookPage | null>(null);
  const [showImport, setShowImport] = useState(false);
  const [importJson, setImportJson] = useState('');
  const [notification, setNotification] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadData = useCallback(() => {
    setPages(getPages());
    setChapterNamesState(getChapterNames());
  }, []);

  useEffect(() => {
    if (authenticated) loadData();
  }, [authenticated, loadData]);

  const handleSavePage = (pageId: number, updates: Partial<BookPage>) => {
    updatePage(pageId, updates);
    loadData();
    showNotif('Halaman berhasil disimpan');
  };

  const handleResetDefaults = () => {
    if (confirm('Reset semua konten ke default? Semua perubahan akan hilang.')) {
      resetToDefaults();
      loadData();
      showNotif('Konten direset ke default');
    }
  };

  const handleExport = () => {
    const json = exportContent();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tbom-content-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showNotif('Konten berhasil diexport');
  };

  const handleImport = () => {
    if (importContent(importJson)) {
      loadData();
      setShowImport(false);
      setImportJson('');
      showNotif('Konten berhasil diimport');
    } else {
      showNotif('Format JSON tidak valid');
    }
  };

  const showNotif = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const groupedPages = pages.reduce((acc, page) => {
    if (!acc[page.chapterId]) acc[page.chapterId] = [];
    acc[page.chapterId].push(page);
    return acc;
  }, {} as Record<number, BookPage[]>);

  if (!mounted) return null;

  if (!authenticated) {
    return <LoginGate onAuth={() => setAuthenticated(true)} />;
  }

  return (
    <div style={styles.container}>
      {notification && (
        <div style={styles.notification}>{notification}</div>
      )}

      <header style={styles.header}>
        <div>
          <h1 style={styles.headerTitle}>Admin Panel</h1>
          <p style={styles.headerSubtitle}>The beauty of May — Content Editor</p>
        </div>
        <div style={styles.headerActions}>
          <button onClick={handleExport} style={styles.actionBtn}>
            📥 Export JSON
          </button>
          <button onClick={() => setShowImport(true)} style={styles.actionBtn}>
            📤 Import JSON
          </button>
          <button onClick={handleResetDefaults} style={styles.dangerBtn}>
            🔄 Reset Default
          </button>
          <a href="/" style={styles.actionBtn}>
            📖 Lihat Buku
          </a>
        </div>
      </header>

      <main style={styles.main}>
        {Object.entries(groupedPages).map(([chapterId, chapterPages]) => {
          const cId = Number(chapterId);
          return (
            <div key={chapterId} style={styles.chapterSection}>
              <div style={styles.chapterHeader}>
                <input
                  type="text"
                  value={chapterNames[cId] || ''}
                  onChange={(e) => {
                    updateChapterName(cId, e.target.value);
                    setChapterNamesState((prev) => ({ ...prev, [cId]: e.target.value }));
                  }}
                  style={styles.chapterNameInput}
                />
                <span style={styles.chapterBadge}>{chapterPages.length} halaman</span>
              </div>

              <div style={styles.pageGrid}>
                {chapterPages.map((page) => (
                  <div
                    key={page.id}
                    style={styles.pageCard}
                    onClick={() => setEditingPage(page)}
                  >
                    <div style={styles.pageCardHeader}>
                      <span style={{
                        ...styles.typeBadge,
                        backgroundColor: page.accentColor + '30',
                        color: page.accentColor,
                      }}>
                        {page.type}
                      </span>
                      <span style={styles.pageId}>#{page.id}</span>
                    </div>
                    <div style={styles.pageCardContent}>
                      {page.title && <p style={styles.pageCardTitle}>{page.title}</p>}
                      {page.content && (
                        <p style={styles.pageCardText}>
                          {page.content.replace(/<[^>]*>/g, '').slice(0, 120)}...
                        </p>
                      )}
                      {page.type === 'blank-left' && (
                        <p style={styles.pageCardText}><em>(blank page)</em></p>
                      )}
                    </div>
                    <div style={styles.pageCardFooter}>
                      <span style={styles.decorBadge}>{page.decorationType}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </main>

      {editingPage && (
        <PageEditor
          page={editingPage}
          onSave={(updates) => handleSavePage(editingPage.id, updates)}
          onClose={() => { setEditingPage(null); loadData(); }}
        />
      )}

      {showImport && (
        <div style={styles.editorOverlay}>
          <div style={{ ...styles.editorCard, maxWidth: 600 }}>
            <div style={styles.editorHeader}>
              <h2 style={styles.editorTitle}>Import JSON</h2>
              <button onClick={() => setShowImport(false)} style={styles.closeBtn}>✕</button>
            </div>
            <div style={styles.editorBody}>
              <textarea
                value={importJson}
                onChange={(e) => setImportJson(e.target.value)}
                style={{ ...styles.textarea, minHeight: 300, fontFamily: 'monospace', fontSize: '0.8rem' }}
                placeholder="Paste JSON content here..."
              />
            </div>
            <div style={styles.editorFooter}>
              <button onClick={() => setShowImport(false)} style={styles.secondaryBtn}>Batal</button>
              <button onClick={handleImport} style={styles.primaryBtn}>Import</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    background: '#1a1a2e',
    color: '#e0d6cc',
    fontFamily: "'Nunito', sans-serif",
    overflow: 'auto',
  },
  notification: {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    background: '#2d2d4a',
    color: '#e0d6cc',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    zIndex: 10000,
    fontSize: '0.9rem',
    border: '1px solid rgba(196, 160, 160, 0.3)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  },
  header: {
    padding: '1.5rem 2rem',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '1rem',
    background: '#16162a',
  },
  headerTitle: {
    fontSize: '1.4rem',
    fontWeight: 600,
    margin: 0,
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: '0.85rem',
    color: '#8b8b9e',
    margin: '0.25rem 0 0',
  },
  headerActions: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap' as const,
  },
  actionBtn: {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: '#2d2d4a',
    color: '#e0d6cc',
    cursor: 'pointer',
    fontSize: '0.85rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  dangerBtn: {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid rgba(231, 76, 60, 0.3)',
    background: 'rgba(231, 76, 60, 0.1)',
    color: '#e74c3c',
    cursor: 'pointer',
    fontSize: '0.85rem',
  },
  main: {
    padding: '1.5rem 2rem',
    maxWidth: 1200,
    margin: '0 auto',
  },
  chapterSection: {
    marginBottom: '2rem',
  },
  chapterHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  chapterNameInput: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 600,
    padding: '0.25rem 0',
    fontFamily: "'Nunito', sans-serif",
    outline: 'none',
    flex: 1,
    maxWidth: 400,
  },
  chapterBadge: {
    fontSize: '0.75rem',
    color: '#8b8b9e',
    background: 'rgba(255,255,255,0.06)',
    padding: '0.2rem 0.6rem',
    borderRadius: '10px',
  },
  pageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1rem',
  },
  pageCard: {
    background: '#22223a',
    borderRadius: '10px',
    padding: '1rem',
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.06)',
    transition: 'all 0.2s ease',
  },
  pageCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  typeBadge: {
    fontSize: '0.7rem',
    fontWeight: 600,
    padding: '0.15rem 0.5rem',
    borderRadius: '6px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  pageId: {
    fontSize: '0.7rem',
    color: '#6b6b80',
  },
  pageCardContent: {
    marginBottom: '0.75rem',
  },
  pageCardTitle: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#fff',
    margin: '0 0 0.3rem',
  },
  pageCardText: {
    fontSize: '0.8rem',
    color: '#8b8b9e',
    lineHeight: 1.5,
    margin: 0,
    overflow: 'hidden',
  },
  pageCardFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  decorBadge: {
    fontSize: '0.65rem',
    color: '#6b6b80',
    background: 'rgba(255,255,255,0.04)',
    padding: '0.15rem 0.4rem',
    borderRadius: '4px',
  },
  loginContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#1a1a2e',
  },
  loginCard: {
    background: '#22223a',
    borderRadius: '16px',
    padding: '2.5rem',
    textAlign: 'center' as const,
    width: 340,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  loginTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#fff',
    margin: '0 0 0.3rem',
  },
  loginSubtitle: {
    fontSize: '0.85rem',
    color: '#8b8b9e',
    margin: '0 0 1.5rem',
    fontStyle: 'italic',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: '0.8rem',
    margin: '0.75rem 0 0',
  },
  input: {
    width: '100%',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid rgba(196, 160, 160, 0.3)',
    background: '#2d2d4a',
    color: '#e0d6cc',
    fontSize: '0.9rem',
    fontFamily: "'Nunito', sans-serif",
    outline: 'none',
    marginBottom: '0.75rem',
  },
  select: {
    width: '100%',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: '#2d2d4a',
    color: '#e0d6cc',
    fontSize: '0.85rem',
    fontFamily: "'Nunito', sans-serif",
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: '#2d2d4a',
    color: '#e0d6cc',
    fontSize: '0.9rem',
    fontFamily: "'Nunito', sans-serif",
    outline: 'none',
    resize: 'vertical' as const,
    lineHeight: 1.6,
  },
  primaryBtn: {
    width: '100%',
    padding: '0.7rem',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(135deg, #C4A0A0, #B8B0CC)',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Nunito', sans-serif",
  },
  secondaryBtn: {
    padding: '0.6rem 1.5rem',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'transparent',
    color: '#8b8b9e',
    fontSize: '0.85rem',
    cursor: 'pointer',
    fontFamily: "'Nunito', sans-serif",
  },
  editorOverlay: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1rem',
  },
  editorCard: {
    background: '#22223a',
    borderRadius: '16px',
    width: '100%',
    maxWidth: 700,
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column' as const,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  editorHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 1.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  editorTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#8b8b9e',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '0.25rem',
  },
  editorBody: {
    padding: '1.5rem',
    overflow: 'auto',
    flex: 1,
  },
  editorFooter: {
    padding: '1rem 1.5rem',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
  },
  fieldRow: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap' as const,
  },
  fieldGroup: {
    marginBottom: '1rem',
    flex: 1,
    minWidth: 150,
  },
  label: {
    display: 'block',
    fontSize: '0.8rem',
    color: '#8b8b9e',
    marginBottom: '0.4rem',
    fontWeight: 500,
  },
};

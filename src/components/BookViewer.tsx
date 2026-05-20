'use client';

import React, { useRef, useState, useCallback, useEffect, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookPage, pages as defaultPages } from '@/data/chapters';
import { getPages } from '@/lib/contentStore';
import { FlowerDecoration, SmallFlowerCluster, SingleFlower } from '@/components/decorations/FlowerDecoration';
import { ClockDecoration } from '@/components/decorations/ClockDecoration';
import { StarDecoration, DualStarDecoration } from '@/components/decorations/StarDecoration';
import { PathDecoration } from '@/components/decorations/PathDecoration';
import { DoorDecoration } from '@/components/decorations/DoorDecoration';
import { MusicNoteDecoration } from '@/components/decorations/MusicNoteDecoration';
import { MusicPlayer } from '@/components/MusicPlayer';
import { FloatingParticles } from '@/components/decorations/FloatingParticles';
import { useAudio } from '@/contexts/AudioContext';

// eslint-disable-next-line react/display-name
const Page = forwardRef<HTMLDivElement, { pageData: BookPage; pageNumber: number }>(
  ({ pageData, pageNumber }, ref) => {
    const [lyricsVisible, setLyricsVisible] = useState(false);

    useEffect(() => {
      if (pageData.type === 'lyrics') {
        const timer = setTimeout(() => setLyricsVisible(true), 300);
        return () => clearTimeout(timer);
      }
    }, [pageData.type]);

    const renderDecoration = () => {
      switch (pageData.decorationType) {
        case 'flowers':
          return (
            <>
              <FlowerDecoration position="top-right" size={100} color={pageData.accentColor} />
              <SmallFlowerCluster position="bottom-left" color={pageData.accentColor} />
            </>
          );
        case 'clock':
          return <ClockDecoration position="top-right" color={pageData.accentColor} />;
        case 'stars':
          return <StarDecoration position="top-right" color={pageData.accentColor} />;
        case 'dual-stars':
          return <DualStarDecoration color={pageData.accentColor} />;
        case 'paths':
          return <PathDecoration position="bottom-left" color={pageData.accentColor} />;
        case 'door':
          return <DoorDecoration position="bottom-right" color={pageData.accentColor} />;
        case 'journal':
          return null;
        case 'music-notes':
          return <MusicNoteDecoration position="top-right" color={pageData.accentColor} />;
        case 'single-flower':
          return pageData.type === 'chapter-title' ? <SingleFlower color={pageData.accentColor} /> : (
            <SmallFlowerCluster position="bottom-right" color={pageData.accentColor} />
          );
        default:
          return null;
      }
    };

    const pageClasses = [
      'page',
      pageData.type === 'cover' && 'cover-page',
      pageData.type === 'chapter-title' && 'chapter-title-page',
      pageData.type === 'narrative' && 'narrative-page',
      pageData.type === 'lyrics' && 'lyrics-page',
      pageData.type === 'closing' && 'closing-page',
      pageData.isJournal && 'journal-page',
    ].filter(Boolean).join(' ');

    return (
      <div className={pageClasses} ref={ref} data-density={pageData.type === 'cover' || pageData.type === 'blank-left' ? 'hard' : 'soft'}>
        {renderDecoration()}

        <div className="page-inner">
          {pageData.type === 'cover' && (
            <>
              <h1 className="cover-title">{pageData.title}</h1>
              <p className="cover-subtitle">{pageData.content}</p>
            </>
          )}

          {pageData.type === 'blank-left' && (
            <div style={{ opacity: 0 }}>&nbsp;</div>
          )}

          {pageData.type === 'chapter-title' && (
            <>
              <span className="chapter-number">{pageData.chapterNumber}</span>
              <h2 className="chapter-title">&ldquo;{pageData.title}&rdquo;</h2>
            </>
          )}

          {pageData.type === 'narrative' && (
            <>
              <div className="narrative-text" dangerouslySetInnerHTML={{ __html: pageData.content || '' }} />
              {pageData.quoteText && (
                <div className="quote-block">
                  <p className="quote-text">{pageData.quoteText}</p>
                </div>
              )}
            </>
          )}

          {pageData.type === 'quote' && (
            <>
              {pageData.quoteText && (
                <div className="quote-block" style={{ marginBottom: '1.5rem' }}>
                  <p className="quote-text">{pageData.quoteText}</p>
                </div>
              )}
              {pageData.content && (
                <div className="narrative-text" dangerouslySetInnerHTML={{ __html: pageData.content }} />
              )}
            </>
          )}

          {pageData.type === 'lyrics' && (
            <>
              {pageData.title && (
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  color: 'var(--color-text)',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                  opacity: lyricsVisible ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                }}>
                  {pageData.title}
                </h3>
              )}
              <div className="lyrics-container">
                {pageData.lyrics?.map((line, i) => (
                  <p
                    key={i}
                    className={`lyric-line ${line === '' ? 'empty' : ''} ${lyricsVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </>
          )}

          {pageData.type === 'closing' && (
            <>
              <p className="closing-text">
                {pageData.content?.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <p className="closing-signature">{pageData.quoteAuthor}</p>
            </>
          )}
        </div>

        {pageData.type !== 'cover' && pageData.type !== 'blank-left' && pageData.type !== 'closing' && (
          <span className={`page-number ${pageNumber % 2 === 0 ? 'left' : 'right'}`}>
            {pageNumber}
          </span>
        )}
      </div>
    );
  }
);

export function BookViewer({ onReachEnd }: { onReachEnd?: () => void }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 450, height: 600 });
  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);
  const { startAudio } = useAudio();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [bookPages, setBookPages] = useState<BookPage[]>(defaultPages);
  const reachEndCalled = useRef(false);

  useEffect(() => {
    // Load content from Supabase (falls back to defaults)
    getPages().then((p) => setBookPages(p));
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < 768;
      setIsMobile(mobile);

      if (mobile) {
        const pageW = Math.min(w - 20, 380);
        const pageH = Math.min(h - 80, pageW * 1.45);
        setDimensions({ width: pageW, height: pageH });
      } else {
        const maxH = h - 100;
        const pageH = Math.min(maxH, 650);
        const pageW = Math.min(pageH * 0.72, (w - 60) / 2);
        setDimensions({ width: Math.round(pageW), height: Math.round(pageH) });
      }
    };

    updateDimensions();
    const timer = setTimeout(() => setReady(true), 200);
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFlip = useCallback((e: any) => {
    const page = e.data;
    setCurrentPage(page);
    if (!hasInteracted) {
      startAudio();
      setHasInteracted(true);
    }
    // Trigger outro when reaching last page
    if (page >= bookPages.length - 2 && onReachEnd && !reachEndCalled.current) {
      reachEndCalled.current = true;
      setTimeout(() => onReachEnd(), 1500);
    }
  }, [hasInteracted, startAudio, bookPages.length, onReachEnd]);

  const goNext = useCallback(() => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  }, []);

  const goPrev = useCallback(() => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  }, []);

  const totalPages = bookPages.length;
  const progress = totalPages > 1 ? (currentPage / (totalPages - 1)) * 100 : 0;
  const displayPage = Math.min(currentPage + 1, totalPages);

  return (
    <div
      className="book-container"
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.6s ease' }}
      onClick={() => {
        if (!hasInteracted) {
          startAudio();
          setHasInteracted(true);
        }
      }}
    >
      <FloatingParticles />

      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <HTMLFlipBook
        ref={bookRef}
        width={dimensions.width}
        height={dimensions.height}
        size="fixed"
        minWidth={280}
        maxWidth={500}
        minHeight={400}
        maxHeight={700}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onFlip}
        className="stf__wrapper"
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={800}
        usePortrait={isMobile}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0.3}
        showPageCorners={true}
        disableFlipByClick={false}
        useMouseEvents={true}
        swipeDistance={30}
        clickEventForward={false}
        renderOnlyPageLengthChange={false}
      >
        {bookPages.map((page, idx) => (
          <Page key={page.id} pageData={page} pageNumber={idx} />
        ))}
      </HTMLFlipBook>

      <div className="nav-buttons left">
        <button className="nav-btn" onClick={goPrev} disabled={currentPage <= 0} aria-label="Previous page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>
      <div className="nav-buttons right">
        <button className="nav-btn" onClick={goNext} disabled={currentPage >= totalPages - 1} aria-label="Next page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="page-indicator">
        {displayPage} / {totalPages}
      </div>

      <MusicPlayer />
    </div>
  );
}

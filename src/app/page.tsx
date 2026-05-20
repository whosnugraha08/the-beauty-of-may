'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AudioProvider, useAudio } from '@/contexts/AudioContext';
import { BookViewer } from '@/components/BookViewer';

function IntroOverlay({ onStart }: { onStart: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [ready, setReady] = useState(false);
  const { startAudio } = useAudio();

  useEffect(() => {
    // Delay showing content until fonts/styles are ready
    const timer = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = useCallback(() => {
    if (fadeOut) return;
    startAudio();
    setFadeOut(true);
    setTimeout(onStart, 1000);
  }, [onStart, startAudio, fadeOut]);

  return (
    <div
      className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}
      onClick={handleStart}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleStart()}
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.5s ease' }}
    >
      <h1 className="loading-title" style={{ opacity: 0, animation: ready ? 'fadeInUp 1s ease 0.2s forwards' : 'none' }}>
        The beauty of May
      </h1>
      <p className="loading-subtitle" style={{ opacity: 0, animation: ready ? 'fadeInUp 1s ease 0.7s forwards' : 'none' }}>
        for meiy.
      </p>
      <p className="intro-hint" style={{ opacity: 0, animation: ready ? 'fadeInUp 1s ease 1.4s forwards' : 'none' }}>
        <span className="intro-hint-icon">✦</span>
        tap anywhere to begin
      </p>
    </div>
  );
}

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const [showBook, setShowBook] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIntroStart = useCallback(() => {
    setShowIntro(false);
    setShowBook(true);
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch / glitch - render nothing until client mounted
    return <div style={{ background: '#FDF8F3', width: '100vw', height: '100vh' }} />;
  }

  return (
    <>
      {showIntro && <IntroOverlay onStart={handleIntroStart} />}
      {showBook && <BookViewer />}
    </>
  );
}

export default function Home() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}

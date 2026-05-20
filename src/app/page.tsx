'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AudioProvider, useAudio } from '@/contexts/AudioContext';
import { BookViewer } from '@/components/BookViewer';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <h1 className="loading-title">The beauty of May</h1>
      <p className="loading-subtitle">for meiy.</p>
      <div className="loading-progress">
        <div className="loading-progress-bar" />
      </div>
    </div>
  );
}

function IntroOverlay({ onStart }: { onStart: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const { startAudio } = useAudio();

  const handleStart = useCallback(() => {
    startAudio();
    setFadeOut(true);
    setTimeout(onStart, 1000);
  }, [onStart, startAudio]);

  return (
    <div
      className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}
      onClick={handleStart}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleStart()}
    >
      <h1 className="loading-title" style={{ animation: 'fadeInUp 1s ease forwards' }}>
        The beauty of May
      </h1>
      <p className="loading-subtitle" style={{ animation: 'fadeInUp 1s ease 0.5s forwards' }}>
        for meiy.
      </p>
      <p className="intro-hint">
        <span className="intro-hint-icon">✦</span>
        tap anywhere to begin
      </p>
    </div>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [showBook, setShowBook] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const handleIntroStart = useCallback(() => {
    setShowIntro(false);
    setShowBook(true);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!loading && showIntro && <IntroOverlay onStart={handleIntroStart} />}
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

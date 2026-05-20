'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AudioProvider, useAudio } from '@/contexts/AudioContext';
import { BookViewer } from '@/components/BookViewer';

/* ===== INTRO FLOATING PARTICLES ===== */
function IntroParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 3 + Math.random() * 5,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 5,
      color: ['#C4A0A0', '#B8B0CC', '#D4B896', '#A8B5A0'][i % 4],
    }));
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            opacity: 0,
            animation: `introParticleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ===== INTRO SCREEN ===== */
function IntroOverlay({ onStart }: { onStart: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [ready, setReady] = useState(false);
  const { startAudio } = useAudio();

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = useCallback(() => {
    if (fadeOut) return;
    startAudio();
    setFadeOut(true);
    setTimeout(onStart, 1200);
  }, [onStart, startAudio, fadeOut]);

  return (
    <div
      className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}
      onClick={handleStart}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleStart()}
    >
      {/* Background glows */}
      <div className="intro-bg-glow glow-1" />
      <div className="intro-bg-glow glow-2" />

      <IntroParticles />

      <div className="intro-content" style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.3s' }}>
        {/* Decorative flower */}
        <div className="intro-flower">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <ellipse
                key={angle}
                cx="30"
                cy="12"
                rx="8"
                ry="14"
                fill="#C4A0A0"
                opacity="0.4"
                transform={`rotate(${angle} 30 30)`}
              />
            ))}
            <circle cx="30" cy="30" r="6" fill="#D4B896" opacity="0.5" />
          </svg>
        </div>

        <h1 className="intro-title">The beauty of May</h1>
        <p className="intro-subtitle">for meiy.</p>
        <div className="intro-line" />
        <p className="intro-hint">
          <span className="intro-hint-icon">✦</span>
          tap anywhere to begin
        </p>
      </div>
    </div>
  );
}

/* ===== OUTRO SCREEN ===== */
function OutroOverlay() {
  const [bloom, setBloom] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBloom(true), 300);
    const t2 = setTimeout(() => setTextVisible(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const petals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      angle: (360 / 8) * i,
      color: i % 2 === 0 ? '#C4A0A0' : '#D4B896',
      delay: i * 0.1,
    }));
  }, []);

  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      delay: 0.5 + Math.random() * 2,
      size: 3 + Math.random() * 4,
      color: ['#C4A0A0', '#B8B0CC', '#D4B896', '#A8B5A0'][i % 4],
      bottom: `${Math.random() * 40}%`,
    }));
  }, []);

  return (
    <div className="outro-overlay">
      {/* Sparkles */}
      <div className="outro-sparkles">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className={`outro-sparkle ${bloom ? 'active' : ''}`}
            style={{
              left: s.left,
              bottom: s.bottom,
              width: s.size,
              height: s.size,
              background: s.color,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Blooming flower */}
      <div className="outro-flower-container">
        {petals.map((p, i) => (
          <div
            key={i}
            className={`outro-petal ${bloom ? 'bloom' : ''}`}
            style={{
              background: p.color,
              animationDelay: `${p.delay}s`,
              // @ts-expect-error CSS custom property
              '--petal-angle': `${p.angle}deg`,
            }}
          />
        ))}
        <div className={`outro-center ${bloom ? 'bloom' : ''}`} />
      </div>

      {/* Thank you text */}
      <div className={`outro-text ${textVisible ? 'visible' : ''}`}>
        <p>terima kasih sudah membaca 🌸</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
          — dengan sayang, AL
        </p>
      </div>
    </div>
  );
}

/* ===== APP ===== */
function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const [showBook, setShowBook] = useState(false);
  const [showOutro, setShowOutro] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIntroStart = useCallback(() => {
    setShowIntro(false);
    setShowBook(true);
  }, []);

  const handleReachEnd = useCallback(() => {
    setShowOutro(true);
  }, []);

  if (!mounted) {
    return <div style={{ background: '#FDF8F3', width: '100vw', height: '100vh' }} />;
  }

  return (
    <>
      {showIntro && <IntroOverlay onStart={handleIntroStart} />}
      {showBook && <BookViewer onReachEnd={handleReachEnd} />}
      {showOutro && <OutroOverlay />}
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

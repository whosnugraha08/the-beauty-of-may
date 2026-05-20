'use client';

import React from 'react';

export function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 20}s`,
    size: 4 + Math.random() * 8,
    type: i % 3, // 0: petal, 1: star, 2: dot
    color: ['#C4A0A0', '#B8B0CC', '#D4B896', '#A8B5A0'][i % 4],
  }));

  return (
    <div className="floating-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          <svg width={p.size * 2} height={p.size * 2} viewBox="0 0 20 20" fill="none">
            {p.type === 0 && (
              /* Flower petal */
              <ellipse cx="10" cy="8" rx="4" ry="7" fill={p.color} opacity="0.4" transform="rotate(15 10 10)" />
            )}
            {p.type === 1 && (
              /* Small star */
              <path d="M10 3 L11.5 8 L17 9 L11.5 10 L10 15 L8.5 10 L3 9 L8.5 8 Z" fill={p.color} opacity="0.35" />
            )}
            {p.type === 2 && (
              /* Dot */
              <circle cx="10" cy="10" r="3" fill={p.color} opacity="0.3" />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
}

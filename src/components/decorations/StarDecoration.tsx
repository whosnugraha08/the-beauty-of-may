'use client';

import React from 'react';

export function StarDecoration({ position = 'top-right', color = '#D4B896' }: {
  position?: string;
  color?: string;
}) {
  const posStyles: Record<string, React.CSSProperties> = {
    'top-right': { top: '1rem', right: '1rem' },
    'bottom-left': { bottom: '2rem', left: '1rem' },
    'scatter': { top: '0', left: '0', width: '100%', height: '100%' },
  };

  return (
    <div className="decoration" style={posStyles[position] || posStyles['top-right']}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Main star */}
        <path d="M60 15 L65 45 L95 50 L65 55 L60 85 L55 55 L25 50 L55 45 Z" fill={color} opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.35;0.2" dur="4s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 60 50;5 60 50;0 60 50;-5 60 50;0 60 50" dur="8s" repeatCount="indefinite" />
        </path>
        
        {/* Small stars scattered */}
        <path d="M25 20 L27 28 L35 30 L27 32 L25 40 L23 32 L15 30 L23 28 Z" fill={color} opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M90 80 L92 86 L98 88 L92 90 L90 96 L88 90 L82 88 L88 86 Z" fill={color} opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.35;0.2" dur="5s" repeatCount="indefinite" />
        </path>
        <path d="M85 20 L86 24 L90 25 L86 26 L85 30 L84 26 L80 25 L84 24 Z" fill={color} opacity="0.12">
          <animate attributeName="opacity" values="0.12;0.25;0.12" dur="6s" repeatCount="indefinite" />
        </path>
        
        {/* Dots */}
        <circle cx="15" cy="90" r="1.5" fill={color} opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="40" r="1" fill={color} opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="45" cy="100" r="1.5" fill={color} opacity="0.18">
          <animate attributeName="opacity" values="0.18;0.35;0.18" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export function DualStarDecoration({ color = '#3D4A5C' }: { color?: string }) {
  return (
    <div className="decoration" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
        {/* Bright star */}
        <path d="M50 20 L54 40 L74 44 L54 48 L50 68 L46 48 L26 44 L46 40 Z" fill={color} opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.4;0.25" dur="3s" repeatCount="indefinite" />
        </path>
        
        {/* Dim star */}
        <path d="M150 30 L153 45 L168 48 L153 51 L150 66 L147 51 L132 48 L147 45 Z" fill={color} opacity="0.1">
          <animate attributeName="opacity" values="0.1;0.18;0.1" dur="4s" repeatCount="indefinite" />
        </path>
        
        {/* Connecting dots (distance) */}
        {[75, 85, 95, 105, 115, 125].map((x, i) => (
          <circle key={i} cx={x} cy={48} r="0.8" fill={color} opacity={0.08 + i * 0.02}>
            <animate attributeName="opacity" values={`${0.08 + i * 0.02};${0.15 + i * 0.02};${0.08 + i * 0.02}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}

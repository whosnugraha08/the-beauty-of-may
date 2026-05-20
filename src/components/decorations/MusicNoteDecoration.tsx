'use client';

import React from 'react';

export function MusicNoteDecoration({ position = 'top-right', color = '#B8B0CC' }: {
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
        {/* Eighth note */}
        <g opacity="0.25">
          <ellipse cx="30" cy="75" rx="8" ry="6" fill={color} transform="rotate(-15 30 75)" />
          <line x1="37" y1="72" x2="37" y2="30" stroke={color} strokeWidth="1.5" />
          <path d="M37 30 Q50 25 50 40" stroke={color} strokeWidth="1.5" fill="none" />
          <animateTransform attributeName="transform" type="translate" values="0 0;2 -3;0 0" dur="5s" repeatCount="indefinite" />
        </g>
        
        {/* Double eighth note */}
        <g opacity="0.2">
          <ellipse cx="70" cy="85" rx="7" ry="5" fill={color} transform="rotate(-15 70 85)" />
          <ellipse cx="90" cy="80" rx="7" ry="5" fill={color} transform="rotate(-15 90 80)" />
          <line x1="76" y1="82" x2="76" y2="45" stroke={color} strokeWidth="1.5" />
          <line x1="96" y1="77" x2="96" y2="40" stroke={color} strokeWidth="1.5" />
          <line x1="76" y1="45" x2="96" y2="40" stroke={color} strokeWidth="1.5" />
          <animateTransform attributeName="transform" type="translate" values="0 0;-2 -4;0 0" dur="6s" repeatCount="indefinite" />
        </g>
        
        {/* Small floating notes */}
        <text x="15" y="30" fontSize="16" fill={color} opacity="0.15" fontFamily="serif">♪
          <animateTransform attributeName="transform" type="translate" values="0 0;3 -5;0 0" dur="4s" repeatCount="indefinite" />
        </text>
        <text x="95" y="25" fontSize="12" fill={color} opacity="0.12" fontFamily="serif">♫
          <animateTransform attributeName="transform" type="translate" values="0 0;-2 -4;0 0" dur="7s" repeatCount="indefinite" />
        </text>
        
        {/* Stars between notes */}
        <circle cx="55" cy="35" r="1.5" fill={color} opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="45" cy="55" r="1" fill={color} opacity="0.12">
          <animate attributeName="opacity" values="0.12;0.25;0.12" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

'use client';

import React from 'react';

export function DoorDecoration({ position = 'bottom-right', color = '#C4A0A0' }: {
  position?: string;
  color?: string;
}) {
  const posStyles: Record<string, React.CSSProperties> = {
    'bottom-right': { bottom: '2rem', right: '1rem' },
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  };

  return (
    <div className="decoration" style={posStyles[position] || posStyles['bottom-right']}>
      <svg width="100" height="130" viewBox="0 0 100 130" fill="none">
        {/* Door frame */}
        <rect x="25" y="15" width="50" height="100" rx="2" stroke={color} strokeWidth="1.5" fill="none" opacity="0.2" />
        
        {/* Door arch top */}
        <path d="M25 15 Q50 0 75 15" stroke={color} strokeWidth="1.5" fill="none" opacity="0.15" />
        
        {/* Door panels */}
        <rect x="30" y="25" width="17" height="35" rx="1" stroke={color} strokeWidth="0.8" fill="none" opacity="0.1" />
        <rect x="53" y="25" width="17" height="35" rx="1" stroke={color} strokeWidth="0.8" fill="none" opacity="0.1" />
        <rect x="30" y="68" width="17" height="35" rx="1" stroke={color} strokeWidth="0.8" fill="none" opacity="0.1" />
        <rect x="53" y="68" width="17" height="35" rx="1" stroke={color} strokeWidth="0.8" fill="none" opacity="0.1" />
        
        {/* Door knob */}
        <circle cx="65" cy="67" r="3" stroke={color} strokeWidth="1" fill="none" opacity="0.2" />
        
        {/* Light under door */}
        <line x1="28" y1="115" x2="72" y2="115" stroke={color} strokeWidth="2" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite" />
        </line>
        
        {/* Light glow */}
        <ellipse cx="50" cy="118" rx="25" ry="5" fill={color} opacity="0.06">
          <animate attributeName="opacity" values="0.06;0.12;0.06" dur="4s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </div>
  );
}

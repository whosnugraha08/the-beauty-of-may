'use client';

import React from 'react';

export function PathDecoration({ position = 'bottom-left', color = '#A8B5A0' }: {
  position?: string;
  color?: string;
}) {
  const posStyles: Record<string, React.CSSProperties> = {
    'bottom-left': { bottom: '2rem', left: '0.5rem' },
    'bottom-right': { bottom: '2rem', right: '0.5rem' },
  };

  return (
    <div className="decoration" style={posStyles[position] || posStyles['bottom-left']}>
      <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
        {/* Two diverging paths */}
        <path d="M70 90 Q60 60 30 30" stroke={color} strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round">
          <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="8s" repeatCount="indefinite" />
        </path>
        <path d="M70 90 Q80 60 110 30" stroke={color} strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round">
          <animate attributeName="stroke-dashoffset" values="0;10;0" dur="8s" repeatCount="indefinite" />
        </path>
        
        {/* Small wildflowers along paths */}
        {[
          { cx: 45, cy: 55, r: 3 },
          { cx: 35, cy: 40, r: 2.5 },
          { cx: 55, cy: 70, r: 2 },
          { cx: 95, cy: 55, r: 3 },
          { cx: 105, cy: 40, r: 2 },
          { cx: 85, cy: 70, r: 2.5 },
        ].map((flower, i) => (
          <circle key={i} cx={flower.cx} cy={flower.cy} r={flower.r} fill={color} opacity="0.15">
            <animate attributeName="r" values={`${flower.r};${flower.r + 1};${flower.r}`} dur={`${4 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
        
        {/* Fork point */}
        <circle cx="70" cy="90" r="3" fill={color} opacity="0.3" />
      </svg>
    </div>
  );
}

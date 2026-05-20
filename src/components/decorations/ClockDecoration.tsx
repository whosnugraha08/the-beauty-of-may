'use client';

import React from 'react';

export function ClockDecoration({ position = 'top-right', color = '#B8B0CC' }: {
  position?: string;
  color?: string;
}) {
  const posStyles: Record<string, React.CSSProperties> = {
    'top-right': { top: '1.5rem', right: '1.5rem' },
    'bottom-left': { bottom: '2.5rem', left: '1.5rem' },
  };

  return (
    <div className="decoration" style={posStyles[position] || posStyles['top-right']}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        {/* Clock circle */}
        <circle cx="50" cy="50" r="35" stroke={color} strokeWidth="1.5" opacity="0.25" fill="none" />
        <circle cx="50" cy="50" r="33" stroke={color} strokeWidth="0.5" opacity="0.15" fill="none" strokeDasharray="4 4" />
        
        {/* Hour marks */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 28 * Math.sin(rad);
          const y1 = 50 - 28 * Math.cos(rad);
          const x2 = 50 + 32 * Math.sin(rad);
          const y2 = 50 - 32 * Math.cos(rad);
          return (
            <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" opacity="0.2" />
          );
        })}
        
        {/* Blurred numbers */}
        {[12, 3, 6, 9].map((num) => {
          const positions: Record<number, [number, number]> = {
            12: [50, 24], 3: [76, 53], 6: [50, 82], 9: [24, 53],
          };
          const [x, y] = positions[num];
          return (
            <text key={num} x={x} y={y} textAnchor="middle" fontSize="8" fill={color} opacity="0.15"
              fontFamily="var(--font-body)" style={{ filter: 'blur(1px)' }}>
              {num}
            </text>
          );
        })}
        
        {/* Clock hands */}
        <line x1="50" y1="50" x2="50" y2="28" stroke={color} strokeWidth="1.5" opacity="0.3" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="60s" repeatCount="indefinite" />
        </line>
        <line x1="50" y1="50" x2="50" y2="22" stroke={color} strokeWidth="1" opacity="0.2" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3600s" repeatCount="indefinite" />
        </line>
        
        {/* Center dot */}
        <circle cx="50" cy="50" r="2" fill={color} opacity="0.3" />
      </svg>
    </div>
  );
}

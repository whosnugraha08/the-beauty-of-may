'use client';

import React from 'react';

export function FlowerDecoration({ position = 'top-right', size = 120, color = '#A8B5A0' }: {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  size?: number;
  color?: string;
}) {
  const posStyles: Record<string, React.CSSProperties> = {
    'top-right': { top: '1rem', right: '1rem' },
    'top-left': { top: '1rem', left: '1rem' },
    'bottom-right': { bottom: '2rem', right: '1rem' },
    'bottom-left': { bottom: '2rem', left: '1rem' },
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  };

  return (
    <div className="decoration" style={posStyles[position]}>
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        {/* Main flower */}
        <ellipse cx="60" cy="35" rx="12" ry="18" fill={color} opacity="0.3" transform="rotate(0 60 60)">
          <animateTransform attributeName="transform" type="rotate" values="0 60 60;5 60 60;0 60 60" dur="6s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="60" cy="35" rx="12" ry="18" fill={color} opacity="0.25" transform="rotate(72 60 60)">
          <animateTransform attributeName="transform" type="rotate" values="72 60 60;77 60 60;72 60 60" dur="7s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="60" cy="35" rx="12" ry="18" fill={color} opacity="0.3" transform="rotate(144 60 60)">
          <animateTransform attributeName="transform" type="rotate" values="144 60 60;149 60 60;144 60 60" dur="5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="60" cy="35" rx="12" ry="18" fill={color} opacity="0.25" transform="rotate(216 60 60)">
          <animateTransform attributeName="transform" type="rotate" values="216 60 60;221 60 60;216 60 60" dur="8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="60" cy="35" rx="12" ry="18" fill={color} opacity="0.3" transform="rotate(288 60 60)">
          <animateTransform attributeName="transform" type="rotate" values="288 60 60;293 60 60;288 60 60" dur="6s" repeatCount="indefinite" />
        </ellipse>
        <circle cx="60" cy="60" r="8" fill={color} opacity="0.4" />
        
        {/* Small buds */}
        <circle cx="25" cy="90" r="4" fill={color} opacity="0.2">
          <animate attributeName="r" values="4;5;4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="95" cy="85" r="3" fill={color} opacity="0.15">
          <animate attributeName="r" values="3;4;3" dur="5s" repeatCount="indefinite" />
        </circle>
        
        {/* Leaves */}
        <path d="M55 80 Q45 95 55 110" stroke={color} strokeWidth="1.5" fill="none" opacity="0.25" />
        <path d="M65 80 Q75 95 65 110" stroke={color} strokeWidth="1.5" fill="none" opacity="0.25" />
        <path d="M48 90 Q40 88 35 92" stroke={color} strokeWidth="1" fill="none" opacity="0.2" />
      </svg>
    </div>
  );
}

export function SmallFlowerCluster({ position = 'bottom-left', color = '#C4A0A0' }: {
  position?: string;
  color?: string;
}) {
  const posStyles: Record<string, React.CSSProperties> = {
    'bottom-left': { bottom: '2rem', left: '1rem' },
    'bottom-right': { bottom: '2rem', right: '1rem' },
    'top-left': { top: '1rem', left: '1rem' },
    'top-right': { top: '1rem', right: '1rem' },
  };

  return (
    <div className="decoration" style={posStyles[position] || posStyles['bottom-left']}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        {[15, 40, 60].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy={30 + i * 10} r="6" fill={color} opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.35;0.2" dur={`${4 + i}s`} repeatCount="indefinite" />
            </circle>
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <ellipse
                key={angle}
                cx={cx}
                cy={30 + i * 10 - 5}
                rx="2.5"
                ry="5"
                fill={color}
                opacity="0.15"
                transform={`rotate(${angle} ${cx} ${30 + i * 10})`}
              />
            ))}
          </g>
        ))}
        <path d="M15 45 Q20 55 15 70" stroke={color} strokeWidth="1" fill="none" opacity="0.15" />
        <path d="M40 50 Q45 60 40 75" stroke={color} strokeWidth="1" fill="none" opacity="0.15" />
      </svg>
    </div>
  );
}

export function SingleFlower({ color = '#C4A0A0' }: { color?: string }) {
  return (
    <div className="decoration" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="80"
            cy="55"
            rx="14"
            ry="25"
            fill={color}
            opacity="0.2"
            transform={`rotate(${angle} 80 80)`}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`${angle} 80 80;${angle + 3} 80 80;${angle} 80 80`}
              dur={`${5 + (angle % 3)}s`}
              repeatCount="indefinite"
            />
          </ellipse>
        ))}
        <circle cx="80" cy="80" r="12" fill={color} opacity="0.3">
          <animate attributeName="r" values="12;13;12" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

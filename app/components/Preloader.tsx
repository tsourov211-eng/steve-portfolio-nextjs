'use client';

import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState<'line' | 'split' | 'hidden'>('line');

  useEffect(() => {
    // Stage 1: Yellow line grows vertically from center (0 - 600ms)
    const t1 = setTimeout(() => {
      setStage('split');
    }, 600);

    // Stage 2: Left and right dark panels split open horizontally (600 - 1300ms)
    const t2 = setTimeout(() => {
      setStage('hidden');
      if (onComplete) onComplete();
    }, 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (stage === 'hidden') return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex">
      {/* Left Curtain Panel */}
      <div
        className={`w-1/2 h-full bg-[#111111] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          stage === 'split' ? '-translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Right Curtain Panel */}
      <div
        className={`w-1/2 h-full bg-[#111111] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          stage === 'split' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Centered Stretched Yellow Line */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] bg-primary transition-all duration-500 ease-in-out ${
          stage === 'line'
            ? 'animate-lineVertical'
            : 'h-full opacity-0 scale-x-0'
        }`}
      />
    </div>
  );
}

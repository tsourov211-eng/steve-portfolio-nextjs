'use client';

import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';

export default function SettingsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ffb400');

  const colors = [
    { name: 'Yellow', hex: '#ffb400' },
    { name: 'Red', hex: '#f72b1c' },
    { name: 'Blue', hex: '#0080ff' },
    { name: 'Green', hex: '#00e676' },
    { name: 'Purple', hex: '#a855f7' },
    { name: 'Orange', hex: '#ff6d00' },
  ];

  const handleColorChange = (hex: string) => {
    setSelectedColor(hex);
    document.documentElement.style.setProperty('--color-primary', hex);
  };

  return (
    <>
      {/* Floating Gear Button on Left Edge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-16 z-40 bg-white text-black p-3 rounded-r-md shadow-2xl hover:bg-gray-100 transition-all duration-200 group"
        title="Customize Theme Color"
        aria-label="Settings"
      >
        <Settings className="w-5 h-5 animate-spin-slow group-hover:rotate-180 transition-transform duration-500" />
      </button>

      {/* Settings Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#252525] text-white p-6 rounded-2xl max-w-sm w-full shadow-2xl relative border border-gray-800 animate-scaleUp">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-[#111111]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold uppercase mb-4 text-center tracking-wide">
              Style Switcher
            </h3>

            <p className="text-gray-400 text-sm text-center mb-6">
              Choose your favorite accent color theme:
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => handleColorChange(c.hex)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                    selectedColor === c.hex ? 'border-white bg-[#111111]' : 'border-transparent bg-[#1e1e1e] hover:border-gray-600'
                  }`}
                >
                  <span
                    className="w-8 h-8 rounded-full shadow-inner"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-xs font-semibold">{c.name}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 bg-primary text-white font-bold rounded-xl uppercase text-xs tracking-wider shadow-lg hover:brightness-110 transition"
            >
              Apply Theme
            </button>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, MessageSquare, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'portfolio', label: 'PORTFOLIO', icon: Briefcase },
    { id: 'contact', label: 'CONTACT', icon: Mail },
    { id: 'blog', label: 'BLOG', icon: MessageSquare },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-5 right-5 z-50 animate-entrance-right">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-[#252525] hover:bg-primary text-white rounded-md flex items-center justify-center transition-colors shadow-lg"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#111111]/95 z-40 flex flex-col items-center justify-center gap-8 text-white animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-4 text-xl font-bold uppercase tracking-wider py-2 px-6 rounded-full transition-all ${
                  isActive ? 'text-primary bg-[#252525]' : 'hover:text-primary'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-gray-300'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Desktop Vertical Floating Navigation Bar */}
      <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-5 animate-entrance-right">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-[#2b2b2b] text-gray-300 hover:bg-primary hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 z-10" />
              {/* Tooltip Label Sliding Left */}
              <span className="absolute right-0 top-0 bottom-0 pr-14 pl-6 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-full flex items-center opacity-0 group-hover:opacity-100 group-hover:right-2 pointer-events-none transition-all duration-300 whitespace-nowrap z-0 shadow-md">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

'use client';

import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import SettingsModal from './components/SettingsModal';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main className="min-h-screen relative bg-[#111111]">
      {/* Split-Screen Yellow Line Page Load Transition */}
      <Preloader />

      {/* Settings Modal (Theme Switcher Gear) */}
      <SettingsModal />

      {/* Floating Navigation Controls */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Content View Switching */}
      <div className="w-full">
        {activeSection === 'home' && (
          <HeroSection onMoreAboutMe={() => setActiveSection('about')} />
        )}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'portfolio' && <PortfolioSection />}
        {activeSection === 'contact' && <ContactSection />}
        {activeSection === 'blog' && <BlogSection />}
      </div>
    </main>
  );
}

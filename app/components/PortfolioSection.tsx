'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'WEB DESIGN', 'REACT APPS', 'MOBILE APPS'];

  const projects = [
    { title: 'Ecommerce Storefront', category: 'WEB DESIGN', imgBg: 'from-amber-500 to-yellow-600' },
    { title: 'SaaS Dashboard UI', category: 'REACT APPS', imgBg: 'from-blue-600 to-indigo-700' },
    { title: 'Fitness Mobile App', category: 'MOBILE APPS', imgBg: 'from-emerald-500 to-teal-700' },
    { title: 'Corporate Brand Identity', category: 'WEB DESIGN', imgBg: 'from-purple-600 to-pink-600' },
    { title: 'Fintech Wallet Platform', category: 'REACT APPS', imgBg: 'from-orange-500 to-red-600' },
    { title: 'Travel Booking App', category: 'MOBILE APPS', imgBg: 'from-cyan-500 to-blue-600' },
  ];

  const filteredProjects =
    activeFilter === 'ALL' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
      {/* Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-white font-black text-4xl lg:text-5xl uppercase tracking-wider">
          MY <span className="text-primary">PORTFOLIO</span>
        </h2>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl lg:text-8xl font-black text-white/5 uppercase tracking-widest select-none pointer-events-none">
          WORKS
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all ${
              activeFilter === f
                ? 'bg-primary text-white shadow-lg'
                : 'bg-[#252525] text-gray-300 hover:text-primary'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p, idx) => (
          <div
            key={idx}
            className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br p-6 flex flex-col justify-end cursor-pointer shadow-xl border border-gray-800 transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.imgBg} opacity-80 group-hover:opacity-100 transition-opacity`} />
            <div className="relative z-10 text-white">
              <span className="text-xs font-bold uppercase text-white/80 tracking-widest">{p.category}</span>
              <h3 className="text-xl font-extrabold uppercase mt-1 mb-2">{p.title}</h3>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase group-hover:underline">
                <span>View Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

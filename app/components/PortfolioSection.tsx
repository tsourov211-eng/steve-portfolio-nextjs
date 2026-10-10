'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'WEB DEV', 'PYTHON & AUTOMATION', 'COMMUNITY'];

  const projects = [
    {
      title: 'WordPress Auto Post Script',
      category: 'PYTHON & AUTOMATION',
      desc: 'Python automation tool publishing WordPress posts directly from Excel files via REST API, bulk uploads & secure auth.',
      link: 'https://github.com/tanvirahammed',
      imgBg: 'from-amber-500 to-yellow-600',
    },
    {
      title: 'Python Automation Suite',
      category: 'PYTHON & AUTOMATION',
      desc: 'Automates repetitive tasks including file handling, data processing, and system operations with high efficiency.',
      link: 'https://github.com/tanvirahammed',
      imgBg: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'webinuxs.com Platform',
      category: 'WEB DEV',
      desc: 'Service-based website launched to showcase and deliver custom web development solutions.',
      link: 'https://webinuxs.com',
      imgBg: 'from-emerald-500 to-teal-700',
    },
    {
      title: 'Personal Portfolio SPA',
      category: 'WEB DEV',
      desc: 'Modern, high-performance portfolio built with Next.js 14, TypeScript, Tailwind CSS, and dynamic styling.',
      link: '#',
      imgBg: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Contest Programming Solutions',
      category: 'PYTHON & AUTOMATION',
      desc: 'Top 5% university-level programming contest (2024) algorithmic problem solving and optimization.',
      link: '#',
      imgBg: 'from-orange-500 to-red-600',
    },
    {
      title: 'IT Support & Digital Literacy',
      category: 'COMMUNITY',
      desc: 'Community tech initiatives helping local users adopt secure technology practices and digital tools.',
      link: '#',
      imgBg: 'from-cyan-500 to-blue-600',
    },
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
        {filteredProjects.map((p, idx) => {
          const CardTag = p.link && p.link !== '#' ? 'a' : 'div';
          return (
            <CardTag
              key={idx}
              href={p.link !== '#' ? p.link : undefined}
              target={p.link && p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link && p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br p-6 flex flex-col justify-end cursor-pointer shadow-xl border border-gray-800 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.imgBg} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10 text-white">
                <span className="text-xs font-bold uppercase text-white/80 tracking-widest">{p.category}</span>
                <h3 className="text-xl font-extrabold uppercase mt-1 mb-1.5">{p.title}</h3>
                <p className="text-xs text-white/80 line-clamp-2 mb-3">{p.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase group-hover:underline">
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}

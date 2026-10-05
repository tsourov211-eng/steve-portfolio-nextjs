'use client';

import React from 'react';
import { Calendar, User } from 'lucide-react';

export default function BlogSection() {
  const posts = [
    {
      title: 'How to Own Your Audience by Creating an Email List',
      date: 'AUG 12, 2026',
      author: 'STEVE',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Top 10 Tools for Web Designers & Developers in 2026',
      date: 'JUL 28, 2026',
      author: 'STEVE',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Everything You Need to Know About Web Accessibility',
      date: 'JUN 15, 2026',
      author: 'STEVE',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
      {/* Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-white font-black text-4xl lg:text-5xl uppercase tracking-wider">
          MY <span className="text-primary">BLOG</span>
        </h2>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl lg:text-8xl font-black text-white/5 uppercase tracking-widest select-none pointer-events-none">
          POSTS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-[#1e1e1e] border border-gray-800 rounded-2xl overflow-hidden hover:border-primary transition group">
            <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center p-6 text-center">
              <span className="text-3xl font-black text-primary/40 uppercase group-hover:scale-110 transition-transform">ARTICLE</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-semibold">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-primary" /> {post.author}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-4">{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

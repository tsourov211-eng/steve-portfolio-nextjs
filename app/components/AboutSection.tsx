'use client';

import React from 'react';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  const personalInfo = [
    { label: 'First Name', value: 'Steve' },
    { label: 'Last Name', value: 'Milner' },
    { label: 'Age', value: '27 Years' },
    { label: 'Nationality', value: 'Tunisian' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Address', value: 'Tunis, Tunisia' },
    { label: 'Phone', value: '+216 21 123 456' },
    { label: 'Email', value: 'steve@example.com' },
    { label: 'Skype', value: 'steve.milner' },
    { label: 'Languages', value: 'French, English, Arabic' },
  ];

  const stats = [
    { num: '12+', text: 'YEARS OF EXPERIENCE' },
    { num: '97+', text: 'COMPLETED PROJECTS' },
    { num: '81+', text: 'HAPPY CUSTOMERS' },
    { num: '53+', text: 'AWARDS WON' },
  ];

  const skills = [
    { name: 'HTML5', level: '95%' },
    { name: 'JAVASCRIPT', level: '90%' },
    { name: 'CSS3', level: '92%' },
    { name: 'REACT.JS', level: '88%' },
    { name: 'NEXT.JS', level: '85%' },
    { name: 'TAILWIND CSS', level: '95%' },
    { name: 'NODE.JS', level: '80%' },
    { name: 'FIGMA', level: '85%' },
  ];

  const experience = [
    {
      year: '2022 - PRESENT',
      role: 'WEB DEVELOPER',
      company: 'ENVATO MARKET',
      desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
    },
    {
      year: '2018 - 2022',
      role: 'UI/UX DESIGNER',
      company: 'THEMEFOREST',
      desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
    },
    {
      year: '2015 - 2018',
      role: 'CONSULTANT',
      company: 'VIDEOHIVE',
      desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
    },
  ];

  const education = [
    {
      year: '2015',
      role: 'ENGINEERING DEGREE',
      company: 'TUNIS UNIVERSITY',
      desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
    },
    {
      year: '2012',
      role: 'MASTER DEGREE',
      company: 'KIEV INSTITUTE',
      desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
    },
    {
      year: '2009',
      role: 'BACHELOR DEGREE',
      company: 'TUNIS HIGH SCHOOL',
      desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
      {/* Title with background watermark text */}
      <div className="relative text-center mb-16">
        <h2 className="text-white font-black text-4xl lg:text-5xl uppercase tracking-wider">
          ABOUT <span className="text-primary">ME</span>
        </h2>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl lg:text-8xl font-black text-white/5 uppercase tracking-widest select-none pointer-events-none">
          RESUME
        </span>
      </div>

      {/* Personal Info & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Info Column */}
        <div className="lg:col-span-7">
          <h3 className="text-xl font-bold uppercase text-white mb-6 tracking-wide">
            PERSONAL INFOS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-300 mb-8">
            {personalInfo.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="text-gray-400 font-medium">{item.label}:</span>
                <span className="font-semibold text-white">{item.value}</span>
              </div>
            ))}
          </div>
          <a
            href="/Steve_Milner_CV.pdf"
            download="Steve_Milner_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-5 border-2 border-primary rounded-full pl-8 pr-2 py-2 bg-transparent hover:bg-primary transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Download Steve Milner CV"
          >
            <span className="font-bold text-white uppercase text-xs tracking-widest group-hover:text-black transition-colors">
              DOWNLOAD CV
            </span>
            <span className="w-10 h-10 bg-primary group-hover:bg-black text-white rounded-full flex items-center justify-center transition-colors">
              <Download className="w-4 h-4 group-hover:text-primary transition-colors" />
            </span>
          </a>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-6">
          {stats.map((st, idx) => (
            <div key={idx} className="border border-gray-800 bg-[#1e1e1e] p-6 rounded-2xl flex flex-col justify-center">
              <span className="text-primary text-4xl font-black mb-2">{st.num}</span>
              <span className="text-gray-300 text-xs font-bold uppercase tracking-wider leading-snug">
                {st.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-800 mb-20" />

      {/* Skills Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold uppercase text-white mb-10 text-center tracking-wide">
          MY SKILLS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <div key={idx} className="bg-[#1e1e1e] border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary transition">
              <span className="text-primary font-black text-2xl mb-2">{s.level}</span>
              <span className="text-white font-bold text-xs uppercase tracking-wider">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-800 mb-20" />

      {/* Experience & Education */}
      <div>
        <h3 className="text-2xl font-bold uppercase text-white mb-12 text-center tracking-wide">
          EXPERIENCE & EDUCATION
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold text-primary flex items-center gap-3">
              <Briefcase className="w-5 h-5" /> EXPERIENCE
            </h4>
            {experience.map((e, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-gray-800 space-y-2">
                <span className="bg-[#252525] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                  {e.year}
                </span>
                <h5 className="text-white font-bold text-base uppercase">
                  {e.role} — <span className="text-gray-400 font-normal">{e.company}</span>
                </h5>
                <p className="text-gray-400 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold text-primary flex items-center gap-3">
              <GraduationCap className="w-5 h-5" /> EDUCATION
            </h4>
            {education.map((ed, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-gray-800 space-y-2">
                <span className="bg-[#252525] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                  {ed.year}
                </span>
                <h5 className="text-white font-bold text-base uppercase">
                  {ed.role} — <span className="text-gray-400 font-normal">{ed.company}</span>
                </h5>
                <p className="text-gray-400 text-xs leading-relaxed">{ed.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

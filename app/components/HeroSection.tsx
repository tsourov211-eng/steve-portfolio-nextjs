'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onMoreAboutMe: () => void;
}

export default function HeroSection({ onMoreAboutMe }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-6 lg:px-16 overflow-hidden">
      {/* Yellow Background Polygon Accent (Desktop Only) */}
      <div className="hidden lg:block bg-shape" />

      <div className="container mx-auto z-10 max-w-7xl">
        {/* Desktop View (Responsive Grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[90vh]">
          {/* Left Column: Image Frame with Yellow Accent Geometry */}
          <div className="col-span-5 relative flex justify-center items-center animate-entrance-left self-stretch py-4">
            {/* Background Accent Frame Box — fills the left column */}
            <div className="relative w-full h-full max-h-[85vh] bg-[#252525] rounded-[30px] overflow-hidden border-2 border-gray-800/80 shadow-2xl z-10">
              <Image
                src="/steve.jpg"
                alt="Steve Milner - Web Designer"
                fill
                className="object-cover object-center filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Column: Hero Copy Text */}
          <div className="col-span-7 pl-6">
            <div className="flex items-center gap-3 mb-2 animate-entrance-up-1">
              <span className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-primary font-extrabold text-2xl lg:text-3xl tracking-widest uppercase">
                I'M STEVE MILNER.
              </h3>
            </div>

            <h1 className="text-white font-black text-5xl lg:text-6xl tracking-tight leading-none mb-6 animate-entrance-up-1">
              WEB DESIGNER
            </h1>

            <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mb-8 font-light animate-entrance-up-2">
              I'm a Tunisian based web designer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
            </p>

            {/* Custom Pill Button with Right-Arrow Yellow Badge */}
            <div className="animate-entrance-up-3">
              <button
                onClick={onMoreAboutMe}
                className="group inline-flex items-center gap-6 border-2 border-primary rounded-full pl-8 pr-2 py-3.5 bg-transparent hover:bg-primary transition-all duration-300 shadow-xl"
              >
                <span className="font-bold text-white uppercase text-sm tracking-widest group-hover:text-black transition-colors">
                  MORE ABOUT ME
                </span>
                <span className="w-12 h-12 bg-primary group-hover:bg-black text-white rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:text-primary transition-colors" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View (Centered Stack Layout matching homePageMobile.png) */}
        <div className="lg:hidden flex flex-col items-center text-center pt-8 pb-12">
          {/* Circular Avatar Image */}
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-[#252525] shadow-2xl mb-8 animate-entrance-up-1">
            <Image
              src="/steve.jpg"
              alt="Steve Milner"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Headlines */}
          <h2 className="text-primary font-black text-3xl uppercase tracking-wider mb-2 animate-entrance-up-1">
            I'M STEVE MILNER.
          </h2>

          <h1 className="text-white font-extrabold text-4xl uppercase tracking-tight mb-6 animate-entrance-up-1">
            WEB DESIGNER
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed max-w-md mb-8 px-2 font-normal animate-entrance-up-2">
            I'm a Tunisian based web designer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>

          {/* CTA Button */}
          <div className="animate-entrance-up-3">
            <button
              onClick={onMoreAboutMe}
              className="group inline-flex items-center gap-5 border-2 border-primary rounded-full pl-7 pr-1.5 py-3 bg-transparent hover:bg-primary transition-all shadow-lg"
            >
              <span className="font-bold text-white uppercase text-xs tracking-widest group-hover:text-black transition-colors">
                MORE ABOUT ME
              </span>
              <span className="w-10 h-10 bg-primary group-hover:bg-black text-white rounded-full flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:text-primary transition-colors" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

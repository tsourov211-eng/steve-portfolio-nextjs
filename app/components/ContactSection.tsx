'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Globe } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
      {/* Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-white font-black text-4xl lg:text-5xl uppercase tracking-wider">
          GET IN <span className="text-primary">TOUCH</span>
        </h2>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl lg:text-8xl font-black text-white/5 uppercase tracking-widest select-none pointer-events-none">
          CONTACT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact info */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-bold uppercase text-white tracking-wide">DON'T BE SHY !</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Feel free to get in touch with me. I am always open to discussing new projects, front-end development opportunities, automation solutions, or collaborative ideas.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase block font-semibold">ADDRESS POINT</span>
                <span className="text-sm font-bold text-white">Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase block font-semibold">MAIL ME</span>
                <a href="mailto:tsourov211@gmail.com" className="text-sm font-bold text-white hover:text-primary transition-colors">
                  tsourov211@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase block font-semibold">CALL ME</span>
                <a href="tel:+8801953873777" className="text-sm font-bold text-white hover:text-primary transition-colors">
                  +8801953873777
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase block font-semibold">LINKEDIN</span>
                <a
                  href="https://www.linkedin.com/in/tanvirahammed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-primary transition-colors"
                >
                  tanvirahammed
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase block font-semibold">WEBSITE</span>
                <a
                  href="https://webinuxs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-primary transition-colors"
                >
                  webinuxs.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full bg-[#252525] border border-gray-800 rounded-full px-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-[#252525] border border-gray-800 rounded-full px-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition"
              />
            </div>
            <input
              type="text"
              placeholder="YOUR SUBJECT"
              className="w-full bg-[#252525] border border-gray-800 rounded-full px-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition"
            />
            <textarea
              rows={5}
              placeholder="YOUR MESSAGE"
              className="w-full bg-[#252525] border border-gray-800 rounded-3xl p-6 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-6 border-2 border-primary rounded-full pl-8 pr-2 py-3 bg-transparent hover:bg-primary transition-all shadow-xl"
            >
              <span className="font-bold text-white uppercase text-xs tracking-widest group-hover:text-black transition-colors">
                SEND MESSAGE
              </span>
              <span className="w-10 h-10 bg-primary group-hover:bg-black text-white rounded-full flex items-center justify-center transition-colors">
                <Send className="w-4 h-4 group-hover:text-primary transition-colors" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

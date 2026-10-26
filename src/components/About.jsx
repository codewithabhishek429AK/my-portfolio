import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, Code2, Brain, Compass, Target, BookOpen, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  const keyAttributes = [
    {
      icon: Code2,
      title: "Strong Core Fundamentals",
      desc: "Grounded in Java, Python, and Object-Oriented Programming with clean modular code habits."
    },
    {
      icon: Brain,
      title: "DSA & Analytical Mindset",
      desc: "Continuously strengthening Data Structures & Algorithms for efficient problem solving."
    },
    {
      icon: Compass,
      title: "Modern Web & Real Projects",
      desc: "Bridging frontend interfaces with backend logic and relational databases."
    },
    {
      icon: Target,
      title: "Internship & Placement Ready",
      desc: "Eager to contribute fresh enthusiasm, adaptability, and fast learning to engineering teams."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-yellow dark:text-brand-purple bg-brand-indigo/10 dark:bg-brand-purple/10 border border-brand-indigo/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            MCA Journey & Developer Mindset
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Dedicated student developer focused on continuous learning and crafting dependable software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Natural Bio Card */}
          <div className="lg:col-span-7 bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-navy-950/40 flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                {about.heading}
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              {about.highlights.map((h, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/60 dark:border-slate-800/60">
                  <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {h.label}
                  </span>
                  <span className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Value Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {keyAttributes.map((attr, index) => {
              const Icon = attr.icon;
              return (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 hover:border-brand-indigo/50 dark:hover:border-brand-purple/50 shadow-sm transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 dark:bg-brand-purple/10 text-brand-indigo dark:text-brand-purple flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm sm:text-base group-hover:text-brand-indigo dark:group-hover:text-brand-purple transition-colors">
                        {attr.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                        {attr.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

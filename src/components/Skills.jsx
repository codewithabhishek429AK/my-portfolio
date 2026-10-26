import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2,
  Layout,
  Database,
  Wrench,
  BrainCircuit,
  Terminal,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Database: Database,
  Wrench: Wrench,
  BrainCircuit: BrainCircuit,
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-indigo/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-indigo dark:text-brand-purple bg-brand-indigo/10 dark:bg-brand-purple/10 border border-brand-indigo/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Competencies & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical skills grouped by domain—focused on core programming, web interfaces, data, and machine learning fundamentals.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <div
                key={category.id}
                className="group relative rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-brand-indigo/40 dark:hover:border-brand-purple/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 dark:bg-brand-purple/15 text-brand-indigo dark:text-brand-purple flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-5 space-y-2.5">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-navy-850/80 border border-slate-100 dark:border-slate-800/80 hover:bg-slate-100/80 dark:hover:bg-navy-800 transition-colors flex items-center justify-between"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-sm text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            {skill.level}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-mono font-semibold px-2 py-0.5 rounded-md bg-brand-indigo/10 text-brand-indigo dark:bg-brand-purple/15 dark:text-brand-purple shrink-0">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-cyan" />
                    <span>Active Practice</span>
                  </span>
                  <span className="font-mono">{category.skills.length} Items</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-indigo/10 via-brand-purple/10 to-brand-cyan/10 border border-brand-indigo/20 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-brand-indigo dark:text-brand-purple">Honest & Transparent:</span>{' '}
            No arbitrary percentage bars. My focus is on writing clean, maintainable code, understanding core CS fundamentals, and consistently shipping real projects.
          </p>
        </div>

      </div>
    </section>
  );
}

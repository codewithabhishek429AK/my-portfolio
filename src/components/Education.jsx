import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-indigo dark:text-brand-purple bg-brand-indigo/10 dark:bg-brand-purple/10 border border-brand-indigo/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Coursework
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Academic qualifications grounded in computer applications, software engineering principles, and theoretical foundations.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-brand-indigo before:via-brand-purple before:to-transparent before:hidden sm:before:block">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="relative sm:pl-16 group"
            >
              {/* Timeline Dot Indicator */}
              <div className="hidden sm:flex absolute left-6 -translate-x-1/2 top-8 w-5 h-5 rounded-full bg-navy-950 border-2 border-brand-indigo group-hover:border-brand-purple items-center justify-center transition-colors">
                <div className="w-2 h-2 rounded-full bg-brand-indigo group-hover:bg-brand-purple" />
              </div>

              {/* Main Card */}
              <div className="rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-brand-indigo/40 dark:hover:border-brand-purple/40 transition-all duration-300">
                
                {/* Header: Degree & Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div>
                    <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-brand-indigo dark:text-brand-purple mb-1">
                      {edu.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-navy-850 border border-slate-200 dark:border-slate-800 self-start sm:self-center">
                    <Calendar className="w-4 h-4 text-brand-purple" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2 font-medium">
                    <GraduationCap className="w-4 h-4 text-brand-indigo" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-brand-purple" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework Modules */}
                {edu.coursework && (
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-brand-indigo" />
                      <span>Key Academic Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-navy-850 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

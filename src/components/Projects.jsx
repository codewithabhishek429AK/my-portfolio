import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  Code2,
  Sparkles,
  Layers
} from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Frontend Development', 'Web Application'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-indigo dark:text-brand-purple bg-brand-indigo/10 dark:bg-brand-purple/10 border border-brand-indigo/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects & Practical Builds
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real implementations showcasing machine learning pipelines, responsive frontend architecture, and practical web utilities.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-md shadow-brand-indigo/30'
                  : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isInDevelopment = project.status.toLowerCase().includes('development') || project.status.toLowerCase().includes('progress');

            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 hover:border-brand-indigo/50 dark:hover:border-brand-purple/50 shadow-sm hover:shadow-xl hover:shadow-brand-indigo/5 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold text-brand-indigo dark:text-brand-purple">
                      {project.category}
                    </span>

                    {/* Accurate Status Pill */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                        isInDevelopment
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                      }`}
                    >
                      {isInDevelopment ? (
                        <>
                          <Clock className="w-3 h-3 animate-spin-slow" />
                          <span>In Development</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Completed</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-indigo dark:group-hover:text-brand-purple transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.keyFeatures && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Key Highlights:
                      </p>
                      <ul className="space-y-1.5">
                        {project.keyFeatures.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-2 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-navy-850 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  {/* GitHub Repo */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  {/* Live Demo or Status */}
                  {isInDevelopment ? (
                    <span
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-500 bg-slate-100/50 dark:bg-navy-850/50 border border-dashed border-slate-300 dark:border-slate-800 cursor-not-allowed"
                      title="Demo in active training/evaluation"
                    >
                      <Clock className="w-4 h-4" />
                      <span>Demo In Progress</span>
                    </span>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl === '#' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-purple hover:from-brand-indigo/90 hover:to-brand-purple/90 shadow-sm shadow-brand-indigo/25 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

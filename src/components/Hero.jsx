import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, FileText, Send, Github, Linkedin, Mail, MapPin, Sparkles, GraduationCap } from 'lucide-react';

export default function  Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-indigo/15 dark:bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-purple/15 dark:bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[320px] h-[320px] bg-brand-cyan/15 dark:bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Opportunity Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.statusBadge}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-brand-indigo dark:text-brand-purple uppercase tracking-wider font-semibold">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan">
                  {personal.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                {personal.role}
              </h2>
            </div>

            {/* Quick College & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-navy-850 border border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-4 h-4 text-brand-indigo" />
                <span>Lloyd Institute of Engg. & Technology</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-navy-850 border border-slate-200 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-brand-purple" />
                <span>Greater Noida, India</span>
              </div>
            </div>

            {/* Short Bio Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personal.shortBio}
            </p>

            {/* Three Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full">
              {/* Button 1: View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-teal hover:from-brand-indigo/90 hover:to-brand-purple/90 shadow-md shadow-brand-indigo/30 hover:shadow-brand-indigo/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              {/* Button 2: Download Resume */}
              <a
                href={personal.resumeUrl}
                download="Abhishek_Rathore_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-navy-800/90 hover:bg-slate-50 dark:hover:bg-navy-750 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-brand-purple" />
                <span>Download Resume</span>
              </a>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-brand-indigo dark:text-brand-purple hover:text-white bg-brand-indigo/10 dark:bg-brand-purple/10 hover:bg-brand-indigo dark:hover:bg-brand-purple transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full justify-center lg:justify-start">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800 transition-colors"
                  title="GitHub (Placeholder URL)"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800 transition-colors"
                  title="LinkedIn (Placeholder URL)"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.socialLinks.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-brand-purple bg-slate-100 dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800 transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Image Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
              
              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xl">
                
                {/* Profile Placeholder Image / SVG */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 dark:from-navy-850 dark:to-navy-950 flex items-center justify-center aspect-square">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle hover overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-xs text-center border border-white/10 opacity-90 transition-opacity">
                    <p className="font-medium">Abhishek Rathore &middot; MCA Student</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Lloyd Institute of Engg. & Technology</p>
                  </div>
                </div>

                {/* Tech Chips Below Avatar */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Python &middot; Java &middot; React &middot; SQL</span>
                  </span>
                  <span className="font-semibold text-brand-indigo dark:text-brand-purple">
                    2024–2026
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

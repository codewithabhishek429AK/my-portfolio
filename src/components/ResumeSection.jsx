import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Download, ExternalLink, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function ResumeSection() {
  const { personal } = portfolioData;

  const highlights = [
    "MCA Student at Lloyd Institute of Engineering and Technology, Greater Noida",
    "Proficient in Python, Java, JavaScript, React (beginner), SQL, Git & GitHub",
    "Machine Learning & Data Structures & Algorithms problem-solving background",
    "Hands-on project work: ML Student Attendance Predictor, Expense Tracker & Portfolio",
    "Immediately available for software developer internships and placement opportunities"
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-navy-900 to-navy-950 border border-brand-indigo/30 p-8 sm:p-12 shadow-2xl overflow-hidden text-white">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-purple bg-brand-purple/15 border border-brand-purple/30">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Interested in my qualifications?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan">
                  Get my Resume.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Download my latest updated resume highlighting my MCA coursework, programming proficiency, project portfolio, and technical problem-solving track record.
              </p>

              {/* Highlights List */}
              <ul className="space-y-2 pt-2">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download and Preview Buttons Card */}
            <div className="w-full md:w-auto flex flex-col gap-3 shrink-0">
              <a
                href={personal.resumeUrl}
                download="Abhishek_Rathore_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan hover:opacity-95 shadow-lg shadow-brand-indigo/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl text-sm font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Preview In Browser</span>
              </a>

              <p className="text-[11px] text-center text-slate-400 font-mono mt-1">
                Standard PDF &bull; Formatted for ATS screening
              </p>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
            <span>
              Direct link configured to <code className="text-brand-purple font-mono">public/resume.pdf</code>. Place your PDF in the public folder to update anytime.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

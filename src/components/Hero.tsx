/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Mail, Github, Linkedin, Cpu, BookOpen, Database } from 'lucide-react';
import { personalInfo } from '../data';
import { downloadResume } from '../utils/resumeGenerator';

export default function Hero() {
  const handleScrollClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.offsetTop - 85;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800"
    >
      {/* Decorative Interactive Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60d_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-500/10 blur-3xl" />

        {/* Mini mechanical design icons scattered at absolute layout margins */}
        <div className="absolute top-20 right-1/4 animate-bounce p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-blue-500 hidden md:block" style={{ animationDuration: '6s' }}>
          <Cpu className="w-6 h-6 opacity-40" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-emerald-500 hidden md:block" style={{ animationDuration: '8s' }}>
          <BookOpen className="w-5 h-5 opacity-40" />
        </div>
        <div className="absolute top-1/2 left-12 animate-pulse p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-amber-500 hidden md:block">
          <Database className="w-5 h-5 opacity-40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Info */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-center lg:self-start px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/45 dark:hover:bg-blue-900/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 shadow-xs transition-colors cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 mr-1.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span>Available for Research Collaboration</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight"
            >
              Hi, I am <span className="text-blue-600 dark:text-blue-400 bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Atta Ullah</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-sans font-semibold text-lg sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-300"
            >
              M.Phil Computer Science Student
              <span className="block text-blue-600 dark:text-blue-400 font-mono text-base font-semibold mt-1.5">
                AI & NLP Researcher | Software Developer
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              "{personalInfo.tagline}"
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                id="hero-cta-projects"
                onClick={(e) => handleScrollClick(e, 'projects')}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base w-full sm:w-auto px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                id="hero-cta-download-cv"
                onClick={downloadResume}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-base w-full sm:w-auto px-6 py-3.5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Download CV</span>
              </button>

              <button
                id="hero-cta-contact"
                onClick={(e) => handleScrollClick(e, 'contact')}
                className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-black dark:bg-slate-750 dark:hover:bg-slate-700 text-white font-semibold text-base w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-800 shadow-sm transition-all active:scale-98 cursor-pointer"
              >
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick social bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-5 pt-6 border-t border-gray-200/50 dark:border-slate-800/50"
            >
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-150 dark:hover:bg-slate-800 transition-all focus:ring-2 focus:ring-blue-500"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-150 dark:hover:bg-slate-800 transition-all focus:ring-2 focus:ring-blue-500"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.researchGate}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-150 dark:hover:bg-slate-800 transition-all focus:ring-2 focus:ring-blue-500 font-bold"
                title="ResearchGate Profile"
              >
                <span className="text-xs font-mono font-bold border border-slate-600 dark:border-slate-400 px-1 py-0.2 rounded-sm group-hover:border-blue-600 group-hover:text-blue-400">RG</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Right Avatar Photo Container */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-600 via-indigo-500 to-emerald-400 animate-spin opacity-45 blur-md" style={{ animationDuration: '25s' }} />

              {/* Middle background background container */}
              <div className="absolute -inset-1 rounded-full bg-white dark:bg-slate-900 shadow-xl" />

              {/* Image box */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-dashed border-blue-500/30 group">
                <img
                  src={personalInfo.profileImage}
                  alt="Atta Ullah"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Float key metrics tag */}
              <div className="absolute -bottom-2 -left-2 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl shadow-lg border border-gray-150 dark:border-slate-700 flex items-center space-x-3.5 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg text-emerald-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-slate-800 dark:text-white text-sm sm:text-base">M.Phil Research</span>
                  <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400">Low-resource NLP & ML</span>
                </div>
              </div>

              {/* Float official role badge */}
              <div className="absolute -top-1 -right-1 bg-white dark:bg-slate-800 p-3.5 rounded-xl shadow-lg border border-gray-150 dark:border-slate-700 flex items-center space-x-3.5 animate-bounce" style={{ animationDuration: '6s' }}>
                <div className="p-2 bg-blue-105 dark:bg-blue-900/50 rounded-lg text-blue-600">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-slate-800 dark:text-white text-xs sm:text-sm">Government IT</span>
                  <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400">Judicial Infrastructure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

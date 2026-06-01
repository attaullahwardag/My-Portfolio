/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { personalInfo } from '../data';
import { Github, Linkedin, Clock, ArrowUp, Milestone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-805 text-white py-12 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-800 pb-10">
          
          {/* Brand/Signature */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-sans font-extrabold text-xl tracking-tight text-white flex items-center justify-center md:justify-start gap-1.5">
              <Milestone className="w-5 h-5 text-blue-500" />
              Atta Ullah
            </h3>
            <p className="text-xs text-slate-400 max-w-sm">
              M.Phil Computer Science Student & Government IT Specialist. Focus on Low-Resource Languages & Judicial Systems Engineering.
            </p>
          </div>

          {/* Social icons row */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest leading-none">External Anchors:</span>
            <div className="flex items-center space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-blue-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={personalInfo.researchGate}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-blue-400 font-bold text-xs shrink-0 flex items-center justify-center w-9.5 h-9.5"
                title="ResearchGate"
              >
                <span>RG</span>
              </a>
            </div>
          </div>
        </div>

        {/* Timezone & Core Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-xs text-slate-500 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Atta Ullah. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="flex items-center text-blue-450">
              <Clock className="w-3.5 h-3.5 mr-1" />
              Located in Peshawar, PK (PKT, UTC+5)
            </span>
          </div>

          {/* Core anchor scrolling trigger */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-850 hover:text-slate-305 transition-all text-[11px] font-sans font-bold cursor-pointer text-slate-400 focus:outline-hidden"
          >
            <span>Scroll to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

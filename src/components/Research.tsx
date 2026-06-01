/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, Sparkles, BrainCircuit, Globe, CheckCircle2, FileText, Database } from 'lucide-react';
import { researchDetails } from '../data';

export default function Research() {
  return (
    <section id="research" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Research & NLP Core
          </h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Academic Research Spotlight
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Research Core Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Focus Card (M.Phil Thesis) */}
          <div className="lg:col-span-8 bg-linear-to-tl from-slate-900 via-slate-850 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-2 text-blue-400">
                <BrainCircuit className="w-7 h-7" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">Active M.Phil Thesis</span>
              </div>

              <div>
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight mb-4">
                  "{researchDetails.title}"
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  My research proposes deep learning neural networks (LSTM, Bi-LSTM, CNN) and contextualized transformer integrations (multi-lingual BERT, XLM-RoBERTa) to parse, clean, and detect hostile or aggressive text in low-resource dialectal social media posts.
                </p>
              </div>

              {/* Research Pillars */}
              <div className="border-t border-slate-800 pt-6">
                <h4 className="font-sans font-bold text-slate-200 text-sm mb-3">Key Project Deliverables:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-start space-x-2.5 text-xs text-slate-350">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Script Normalizers for Nasko/Kandahari Scripts</span>
                  </li>
                  <li className="flex items-start space-x-2.5 text-xs text-slate-350">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Romanized Pashto Translation Models</span>
                  </li>
                  <li className="flex items-start space-x-2.5 text-xs text-slate-350">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Hate Token dictionaries for colloquial Dialects</span>
                  </li>
                  <li className="flex items-start space-x-2.5 text-xs text-slate-350">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Baseline evaluation models for regional datasets</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 flex flex-wrap items-center gap-4 border-t border-slate-800/80">
              <div className="flex items-center space-x-1">
                <span className="font-mono text-[10px] text-gray-500 uppercase">Lang Core:</span>
                <span className="px-2.5 py-0.5 rounded-sm bg-slate-850 border border-slate-750 font-sans font-semibold text-[11px] text-slate-300">Pashto</span>
                <span className="px-2.5 py-0.5 rounded-sm bg-slate-850 border border-slate-750 font-sans font-semibold text-[11px] text-slate-300">Urdu</span>
                <span className="px-2.5 py-0.5 rounded-sm bg-slate-850 border border-slate-750 font-sans font-semibold text-[11px] text-slate-300">low-resource dialects</span>
              </div>
            </div>
          </div>

          {/* Dataset Statistics Side card */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-gray-150 dark:border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                <Database className="w-6 h-6" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">Corpus Analytics</span>
              </div>
              <h3 className="font-sans font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                Experimental Dataset Statistics
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Data generated over iterative crawl stages, annotated by three native linguistic evaluators covering regional dialects:
              </p>

              <div className="space-y-4 pt-2">
                {researchDetails.datasetStats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 border-b border-gray-200/60 dark:border-slate-800/65">
                    <span className="font-sans text-xs text-slate-600 dark:text-slate-400">{stat.label}</span>
                    <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-md">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200/50 dark:border-slate-800/50 mt-6 text-center lg:text-left">
              <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">Status Code:</span>
              <span className="font-sans text-xs font-bold text-slate-750 dark:text-slate-350">ACTIVE EXPERIMENTATION & CRAWLING</span>
            </div>
          </div>
        </div>

        {/* Research Core Interests list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center space-y-3">
            <h4 className="font-sans font-bold text-slate-900 dark:text-white text-lg tracking-tight">
              Investigative Horizons
            </h4>
            <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              In addition to deep learning modeling, my current activities address structural challenges in natural computing schemas for West Asian languages.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {researchDetails.interests.slice(0, 4).map((interest, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-gray-150 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start space-x-3 hover:border-indigo-500/20 hover:dark:border-indigo-500/20 transition-all font-sans"
              >
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0">
                  <FileText className="w-4.5 h-4.5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Low-Resource Language Challenges Panel */}
        <div className="mt-12 p-6 rounded-2xl bg-linear-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-900/60 border border-blue-150/50 dark:border-slate-800 text-slate-705 dark:text-slate-350 font-sans text-sm leading-relaxed shadow-xs">
          <h4 className="font-sans font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-1.5">
            <Globe className="w-5 h-5 text-blue-500" />
            The Challenges of Low-Resource Languages
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Pashto presents significant linguistic bottlenecks: complex non-diacritic representations, multiple orthographic scripts, high code-switching with English or Urdu words, and a critical lack of pre-trained models. Standard neural models optimized on English perform poorly. My research addresses this by developing localized text preprocessing, spelling normalization, and customized embedding vectors.
          </p>
        </div>

      </div>
    </section>
  );
}

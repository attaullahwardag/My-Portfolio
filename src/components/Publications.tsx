/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { publications } from '../data';
import { BookOpen, Calendar, ArrowRight, CornerDownRight, Plus, Minus, FileText } from 'lucide-react';

export default function Publications() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="publications" className="py-24 bg-slate-950 dark:bg-slate-950 border-y border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
            Academic Track
          </h2>
          <p className="font-serif italic text-glow text-3xl sm:text-5xl text-white tracking-tighter">
            Publications & Papers
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full text-glow" />
        </div>

        {/* Publications Stack */}
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((doc) => {
            const isAbstractExpanded = expandedId === doc.id;
            return (
              <motion.div
                key={doc.id}
                id={`publication-card-${doc.id}`}
                whileHover={{ y: -1 }}
                className="glass border border-white/5 bg-slate-900/15 rounded-3xl p-6 sm:p-8 hover:border-blue-500/25 transition-all font-sans relative overflow-hidden shadow-2xl text-left"
              >
                {/* Visual state pill in corner */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest border ${
                    doc.status === 'Under Review'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 text-glow'
                      : 'bg-blue-500/10 text-blue-400 border-blue-500/20 text-glow'
                  }`}>
                    {doc.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <BookOpen className="w-5 h-5 shrink-0 text-glow" />
                    <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-glow">Research Dissertation Preprint</span>
                  </div>

                  <h3 className="font-serif italic text-white text-lg sm:text-xl pr-20 leading-snug tracking-tight text-glow">
                    "{doc.title}"
                  </h3>

                  {/* Authors line */}
                  <div className="text-xs text-slate-400 flex flex-wrap gap-1 items-center font-light">
                    <span className="font-bold text-blue-400 text-glow font-mono uppercase text-[10px] tracking-wider font-semibold">Authors:</span>
                    <span>{doc.authors}</span>
                  </div>

                  {/* Conference / Date line */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-1 text-xs text-slate-400 font-light">
                    <span className="flex items-center text-blue-400 font-bold font-mono uppercase tracking-wider text-glow">
                      <CornerDownRight className="w-3.5 h-3.5 mr-1" />
                      {doc.venue}
                    </span>
                    <span className="flex items-center text-slate-500">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {doc.date}
                    </span>
                  </div>

                  {/* Interactive Abstract toggle and block */}
                  <div className="pt-4 border-t border-white/5 flex flex-col justify-start">
                    <button
                      id={`btn-toggle-abstract-${doc.id}`}
                      onClick={() => toggleAbstract(doc.id)}
                      className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-blue-400 font-bold select-none cursor-pointer focus:outline-hidden self-start transition-colors text-glow"
                    >
                      {isAbstractExpanded ? (
                        <>
                          <Minus className="w-4 h-4 text-red-500" />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-glow">Close Text Abstract</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-blue-400 text-glow" />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-glow">View Text Abstract Summary</span>
                        </>
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isAbstractExpanded && (
                        <motion.div
                          id={`abstract-block-${doc.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-3 p-4 bg-slate-950/80 rounded-2xl border border-white/5"
                        >
                          <div className="flex items-start space-x-2.5 text-left">
                            <FileText className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5 text-glow" />
                            <div className="space-y-1">
                              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold">Abstract Context:</span>
                              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-light">
                                {doc.abstract}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

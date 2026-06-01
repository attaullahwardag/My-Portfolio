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
    <section id="publications" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Academic Track
          </h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Publications & Papers
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
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
                className="bg-slate-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all font-sans relative overflow-hidden"
              >
                {/* Visual state pill in corner */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest border ${
                    doc.status === 'Under Review'
                      ? 'bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/40'
                      : 'bg-blue-50 text-blue-700 border-blue-200/50 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/40'
                  }`}>
                    {doc.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                    <BookOpen className="w-5 h-5 shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Research Dissertation Preprint</span>
                  </div>

                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white pr-20 leading-tight">
                    "{doc.title}"
                  </h3>

                  {/* Authors line */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-1 items-center">
                    <span className="font-bold text-slate-655 dark:text-slate-300">Authors:</span>
                    <span>{doc.authors}</span>
                  </div>

                  {/* Conference / Date line */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-1 text-xs text-slate-500">
                    <span className="flex items-center text-blue-700 dark:text-blue-400 font-semibold font-mono uppercase tracking-wider">
                      <CornerDownRight className="w-3.5 h-3.5 mr-1" />
                      {doc.venue}
                    </span>
                    <span className="flex items-center text-gray-400">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {doc.date}
                    </span>
                  </div>

                  {/* Interactive Abstract toggle and block */}
                  <div className="pt-4 border-t border-gray-200/50 dark:border-slate-800/60 flex flex-col justify-start">
                    <button
                      id={`btn-toggle-abstract-${doc.id}`}
                      onClick={() => toggleAbstract(doc.id)}
                      className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-350 hover:text-blue-650 dark:hover:text-blue-400 font-bold select-none cursor-pointer focus:outline-hidden self-start"
                    >
                      {isAbstractExpanded ? (
                        <>
                          <Minus className="w-4 h-4 text-red-500" />
                          <span>Close Text Abstract</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-blue-500" />
                          <span>View Text Abstract Summary</span>
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
                          className="overflow-hidden mt-3 p-4 bg-white dark:bg-slate-950 rounded-2xl border border-gray-150 dark:border-slate-850"
                        >
                          <div className="flex items-start space-x-2.5">
                            <FileText className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-semibold block">Abstract Context:</span>
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
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

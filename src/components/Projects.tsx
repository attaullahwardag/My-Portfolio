/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Github, ExternalLink, Filter, Plus, Minus, ArrowUpRight, BarChart3 } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'AI & NLP' | 'Web Apps' | 'Research'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories: ('All' | 'AI & NLP' | 'Web Apps' | 'Research')[] = ['All', 'AI & NLP', 'Web Apps', 'Research'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 dark:bg-slate-950 border-y border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
            Selected Works
          </h2>
          <p className="font-serif italic text-glow text-3xl sm:text-5xl text-white tracking-tighter">
            Research & Software Projects
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full text-glow" />
          <p className="text-sm sm:text-base text-slate-400 mt-4 font-sans font-light">
            A portfolio of systems engineering, reactive applications, and scientific computer-science papers targeting dialectal Natural Language Processing.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center mr-1">
            <Filter className="w-3.5 h-3.5 mr-1 text-blue-400 text-glow" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              id={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => {
                setFilter(cat);
                setExpandedId(null);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full border transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/35 text-glow scale-102 font-medium'
                  : 'bg-slate-900/35 border border-white/5 text-slate-300 hover:bg-slate-900 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedId === project.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="glass rounded-3xl border border-white/5 bg-slate-900/15 shadow-2xl hover:border-blue-500/25 transition-all h-full flex flex-col justify-between overflow-hidden relative group"
                >
                  {/* Aspect Ratio Header Card Visual Block representation */}
                  <div className="bg-linear-to-br from-slate-950 to-slate-900 p-6 relative overflow-hidden h-40 flex flex-col justify-between text-white shrink-0 border-b border-white/5">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-40 group-hover:opacity-100 transition-opacity" />
                    {/* Decorative nodes */}
                    <div className="absolute top-4 right-4 text-slate-600 opacity-10 group-hover:opacity-30 transition-opacity">
                      <BarChart3 className="w-20 h-20" />
                    </div>

                    <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest font-bold text-glow">
                      {project.category}
                    </span>

                    <h3 className="font-serif italic text-white text-xl tracking-tight leading-snug group-hover:text-blue-400 transition-colors text-glow">
                      {project.title}
                    </h3>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-blue-500/5 border border-blue-500/10 font-mono text-[10px] text-blue-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Summary */}
                      <p className="font-sans text-sm text-slate-400 leading-relaxed mb-4 font-light">
                        {project.description}
                      </p>

                      {/* Expandable info block */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={`project-expansion-block-${project.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden border-t border-white/5 pt-4 mt-4 space-y-4 text-left"
                          >
                            <div className="space-y-1">
                              <h4 className="font-mono uppercase tracking-wider text-[10px] text-blue-400 font-bold">System Mechanics & Overview:</h4>
                              <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                                {project.longDescription}
                              </p>
                            </div>

                            {project.metrics && (
                              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                                {project.metrics.map((metric, mi) => (
                                  <div key={mi} className="p-2 bg-slate-900/40 rounded-lg border border-white/5">
                                    <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider">{metric.label}</span>
                                    <span className="font-mono text-xs font-bold text-blue-400 text-glow">{metric.value}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Actions and expand trigger */}
                    <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/5">
                      {/* Read More button */}
                      <button
                        id={`btn-expand-project-${project.id}`}
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center text-xs font-bold text-slate-400 hover:text-blue-400 select-none cursor-pointer focus:outline-hidden text-glow transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <Minus className="w-3.5 h-3.5 mr-1 text-red-500" /> Show Less
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 mr-1 text-blue-400" /> Learn Details
                          </>
                        )}
                      </button>

                      {/* Repo and Live links */}
                      <div className="flex items-center space-x-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-slate-900/45 hover:bg-slate-800 text-slate-300 border border-white/10 hover:border-white/20 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="p-2 bg-blue-505 bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-400 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 flex items-center"
                            title="Open Project Website"
                          >
                            <ArrowUpRight className="w-4 h-4 text-glow" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

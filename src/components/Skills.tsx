/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skills } from '../data';
import { Terminal, BrainCircuit, Globe, Wrench, CheckCircle } from 'lucide-react';

type SkillCategory = 'all' | 'ai-nlp' | 'programming' | 'web-dev' | 'tools';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: CheckCircle },
    { id: 'ai-nlp', label: 'AI & NLP', icon: BrainCircuit },
    { id: 'programming', label: 'Programming', icon: Terminal },
    { id: 'web-dev', label: 'Web Dev', icon: Globe },
    { id: 'tools', label: 'Tools & Platforms', icon: Wrench },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'ai-nlp':
        return {
          textColor: 'text-indigo-600 dark:text-indigo-400',
          bgColor: 'bg-indigo-50 dark:bg-indigo-950/40',
          borderColor: 'border-indigo-150 dark:border-indigo-900/50',
          indigoDot: 'bg-indigo-500',
        };
      case 'programming':
        return {
          textColor: 'text-blue-600 dark:text-blue-400',
          bgColor: 'bg-blue-50 dark:bg-blue-950/40',
          borderColor: 'border-blue-150 dark:border-blue-900/50',
          indigoDot: 'bg-blue-500',
        };
      case 'web-dev':
        return {
          textColor: 'text-emerald-600 dark:text-emerald-400',
          bgColor: 'bg-emerald-50 dark:bg-emerald-950/40',
          borderColor: 'border-emerald-150 dark:border-emerald-900/50',
          indigoDot: 'bg-emerald-500',
        };
      case 'tools':
      default:
        return {
          textColor: 'text-amber-600 dark:text-amber-400',
          bgColor: 'bg-amber-50 dark:bg-amber-950/40',
          borderColor: 'border-amber-150 dark:border-amber-900/50',
          indigoDot: 'bg-amber-500',
        };
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-gray-150 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Expertise
          </h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Technical Skillset
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 font-sans">
            A comprehensive profile of my programming capacity, web integration mastery, and specialized Artificial Intelligence/NLP model deployment skills.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as SkillCategory)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-750 border border-gray-150 dark:border-slate-700/60'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const theme = getCategoryTheme(skill.category);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-150 dark:border-slate-750/70 p-5 shadow-xs hover:shadow-md transition-all relative overflow-hidden group"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-sans font-bold text-slate-800 dark:text-slate-100 text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-sm ${theme.textColor} ${theme.bgColor}`}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Track */}
                  <div className="w-full bg-gray-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="bg-blue-600 dark:bg-blue-500 h-full rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600"
                    />
                  </div>

                  {/* Category Identifier */}
                  <div className="flex items-center space-x-1.5 pt-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.indigoDot}`} />
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                      {skill.category === 'ai-nlp' && 'AI & Natural Language Processing'}
                      {skill.category === 'programming' && 'Programming Core'}
                      {skill.category === 'web-dev' && 'Web Technology Stack'}
                      {skill.category === 'tools' && 'Developer Operations & Tools'}
                    </span>
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

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { educationHistory } from '../data';
import { GraduationCap, MapPin, Calendar, CheckSquare } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Academic Track
          </h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Education Timeline
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline representation */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
          
          {/* Vertical core line */}
          <div className="absolute top-0 bottom-0 left-1.5 sm:left-1/2 w-0.5 bg-blue-105 dark:bg-slate-800 pointer-events-none transform sm:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {educationHistory.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col sm:flex-row items-start sm:items-stretch group">
                  
                  {/* Timeline bullet element indicator */}
                  <div className="absolute top-1.5 left-1.5 sm:left-1/2 w-4.5 h-4.5 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-slate-950 z-20 shadow-md transform -translate-x-1/2 group-hover:scale-120 transition-transform" />

                  {/* Date representation tag for desktop (positioned on opposite side) */}
                  <div className={`hidden sm:flex w-1/2 items-center px-8 ${isEven ? 'justify-end text-right' : 'justify-start order-2 text-left'}`}>
                    <div className="space-y-1.5">
                      <span className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-blue-650 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.duration}</span>
                      </span>
                      <p className="font-mono text-[11px] text-gray-400 flex items-center justify-end">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 mr-1" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Card panel column */}
                  <div className={`w-full sm:w-1/2 px-4 sm:px-8 ${isEven ? 'order-1' : 'order-1 sm:order-2'}`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="p-6 bg-slate-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl shadow-xs hover:shadow-md transition-all relative overflow-hidden"
                    >
                      {/* Accent highlight strip */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-500 to-indigo-505" />

                      <div className="space-y-4 pt-1">
                        {/* Mobile date indicators block */}
                        <div className="flex sm:hidden flex-wrap items-center gap-3 mb-2">
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-sm bg-blue-50 dark:bg-blue-950 font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                            {item.duration}
                          </span>
                          <span className="font-sans text-[10px] text-gray-400 flex items-center">
                            <MapPin className="w-3 h-3 mr-0.5" /> {item.location}
                          </span>
                        </div>

                        {/* Title & Degrees */}
                        <div>
                          <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            {item.degree}
                          </h3>
                          <p className="font-sans font-semibold text-xs text-blue-700 dark:text-blue-400 uppercase tracking-widest mt-1">
                            {item.institution}
                          </p>
                        </div>

                        {/* Grading Indicator details */}
                        {item.grade && (
                          <div className="inline-block px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-150 dark:border-emerald-900/30 text-xs font-semibold">
                            Grade: {item.grade}
                          </div>
                        )}

                        {/* Details bullet lines */}
                        <ul className="space-y-2 mt-4 pt-2 border-t border-gray-205/60 dark:border-slate-800/80">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-sans">
                              <CheckSquare className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

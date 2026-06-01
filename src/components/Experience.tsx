/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { experienceHistory } from '../data';
import { Briefcase, MapPin, Calendar, Database, ShieldAlert, Cpu, Terminal, Hammer } from 'lucide-react';

export default function Experience() {
  const coreStats = [
    { label: 'Infrastructure Uptime', value: '99.9%', icon: Cpu },
    { label: 'Relational Records Transferred', value: '100K+', icon: Database },
    { label: 'Digital Legal Programs Supported', value: '15+', icon: Terminal },
    { label: 'Physical datacenters configured', value: '3', icon: Hammer }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-gray-150 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Work Experience
          </h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Professional Background
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Container */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experienceHistory.map((job) => (
            <div key={job.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (Stats & Metadata) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-xs space-y-4">
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                    <Database className="w-5 h-5 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-wider font-bold">IT Operations Context</span>
                  </div>

                  <h4 className="font-sans font-bold text-slate-800 dark:text-slate-200 text-sm">KP Judicial Informatics</h4>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    System operations and disaster-recovery governance inside highly restricted judicial network infrastructure, maintaining sensitive transactional legal databases.
                  </p>

                  <div className="border-t border-gray-100 dark:border-slate-700/60 pt-4 space-y-2">
                    <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500 uppercase block tracking-widest">Active Credentials:</span>
                    <span className="inline-block px-3 py-1 rounded-sm bg-blue-50 dark:bg-blue-950 font-sans text-xs font-bold text-blue-600 dark:text-blue-400">MCSE Infrastructure Validated</span>
                  </div>
                </div>

                {/* Local Grid of stats */}
                <div className="grid grid-cols-2 gap-4">
                  {coreStats.map((stat, sIdx) => (
                    <div key={sIdx} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-150 dark:border-slate-800 text-center flex flex-col justify-center items-center">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                        <stat.icon className="w-4 h-4" />
                      </div>
                      <span className="font-sans text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">{stat.label}</span>
                      <span className="font-mono text-base font-extrabold text-blue-600 dark:text-blue-400 mt-1">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Responsibilities) */}
              <div className="lg:col-span-8">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
                >
                  {/* Visual ribbon */}
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-blue-600 dark:bg-blue-500" />

                  <div className="space-y-6 pl-2 sm:pl-3">
                    
                    {/* Position and metadata bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-slate-700/60 pb-5">
                      <div className="space-y-1">
                        <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                          {job.role}
                        </h3>
                        <p className="font-mono text-xs font-bold text-blue-750 dark:text-blue-400 tracking-wider">
                          {job.organization}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end text-left sm:text-right">
                        <span className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-gray-650 dark:text-cyan-400 uppercase tracking-widest bg-gray-50 dark:bg-slate-905 px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {job.duration}
                        </span>
                        <span className="font-sans text-[11px] text-gray-400 mt-1 flex items-center justify-start sm:justify-end">
                          <MapPin className="w-3.5 h-3.5 mr-0.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet List lines */}
                    <div className="space-y-4">
                      <h4 className="font-sans font-bold text-slate-850 dark:text-slate-100 text-sm">Key Areas of Administration & Execution:</h4>
                      <ul className="space-y-3.5">
                        {job.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-650 dark:text-slate-355 leading-relaxed font-sans">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-105 border-2 border-blue-600 dark:border-blue-500 shrink-0 mt-1" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Operational warning / confidential footer */}
                    <div className="flex items-center space-x-2.5 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-amber-850 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30 text-xs">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <p className="font-sans leading-relaxed">
                        Duties conform to regional judicial security directives, keeping strict database controls on private litigation records.
                      </p>
                    </div>

                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

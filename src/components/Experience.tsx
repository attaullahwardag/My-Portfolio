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
    <section id="experience" className="py-24 bg-slate-950 dark:bg-slate-950 border-y border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
            Work Experience
          </h2>
          <p className="font-serif italic text-glow text-3xl sm:text-5xl text-white tracking-tighter">
            Professional Background
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full text-glow" />
        </div>

        {/* Experience Container */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experienceHistory.map((job) => (
            <div key={job.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (Stats & Metadata) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="glass border border-white/5 bg-slate-900/15 p-6 rounded-3xl shadow-2xl space-y-4 text-left">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Database className="w-5 h-5 animate-pulse text-glow" />
                    <span className="font-mono text-xs uppercase tracking-widest font-bold text-glow">IT Operations Context</span>
                  </div>

                  <h3 className="font-sans font-bold text-white text-sm">KP Judicial Informatics</h3>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                    System operations and disaster-recovery governance inside highly restricted judicial network infrastructure, maintaining sensitive transactional legal databases.
                  </p>

                  <div className="border-t border-white/5 pt-4 space-y-2">
                    <span className="font-mono text-[10px] text-slate-500 uppercase block tracking-wider">Active Credentials:</span>
                    <span className="inline-block px-3 py-1 rounded-sm bg-blue-500/10 border border-blue-500/20 font-sans text-xs font-bold text-blue-400 text-glow">MCSE Infrastructure Validated</span>
                  </div>
                </div>

                {/* Local Grid of stats */}
                <div className="grid grid-cols-2 gap-4">
                  {coreStats.map((stat, sIdx) => (
                    <div key={sIdx} className="glass border border-white/5 bg-slate-900/10 rounded-2xl p-4 text-center flex flex-col justify-center items-center hover:border-blue-500/15 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                        <stat.icon className="w-4 h-4 text-glow" />
                      </div>
                      <span className="font-sans text-[10px] text-slate-400 font-medium leading-tight">{stat.label}</span>
                      <span className="font-mono text-base font-extrabold text-blue-400 mt-1 text-glow">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Responsibilities) */}
              <div className="lg:col-span-8">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="glass border border-white/5 bg-slate-900/15 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-blue-500/25 transition-all relative overflow-hidden pl-5 sm:pl-7"
                >
                  {/* Visual ribbon */}
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-blue-500 text-glow" />

                  <div className="space-y-6">
                    
                    {/* Position and metadata bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5 text-left">
                      <div className="space-y-1">
                        <h3 className="font-serif italic text-white text-xl sm:text-2xl tracking-tight flex items-center gap-2 text-glow">
                          <Briefcase className="w-5 h-5 text-blue-400 shrink-0 text-glow" />
                          {job.role}
                        </h3>
                        <p className="font-mono text-xs font-bold text-blue-400 tracking-wider">
                          {job.organization}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end text-left sm:text-right">
                        <span className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-glow">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {job.duration}
                        </span>
                        <span className="font-sans text-[11px] text-slate-500 mt-1 flex items-center justify-start sm:justify-end">
                          <MapPin className="w-3.5 h-3.5 mr-0.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet List lines */}
                    <div className="space-y-4 text-left">
                      <h4 className="font-sans font-bold text-slate-200 text-sm">Key Areas of Administration & Execution:</h4>
                      <ul className="space-y-3.5">
                        {job.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-350 leading-relaxed font-sans font-light">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-950 border-2 border-blue-400 shrink-0 mt-1 text-glow" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Operational warning / confidential footer */}
                    <div className="flex items-center space-x-2.5 p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs text-left">
                      <ShieldAlert className="w-4 h-4 shrink-0 text-glow" />
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

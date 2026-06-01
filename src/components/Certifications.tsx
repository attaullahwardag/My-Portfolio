/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { certifications } from '../data';
import { Award, CheckCircle2, Ticket } from 'lucide-react';
import { motion } from 'motion/react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950 dark:bg-slate-950 border-y border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
            Verification
          </h2>
          <p className="font-serif italic text-glow text-3xl sm:text-5xl text-white tracking-tighter">
            Professional Certifications
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full text-glow" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              whileHover={{ y: -3 }}
              className="glass border border-white/5 bg-slate-900/15 rounded-3xl p-5 hover:border-blue-500/25 transition-all flex flex-col justify-between font-sans overflow-hidden relative shadow-2xl text-left"
            >
              {/* Corner abstract decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Award className="w-5.5 h-5.5 text-glow" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif italic text-white text-sm sm:text-base tracking-tight leading-snug text-glow">
                    {cert.name}
                  </h3>
                  <p className="font-sans font-bold text-xs text-blue-400 uppercase tracking-widest mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Footer details row */}
              <div className="pt-4 border-t border-white/5 mt-4 space-y-1.5 lg:pt-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Issued Date:</span>
                  <span className="font-bold text-slate-300">{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center">
                      <Ticket className="w-3 h-3 mr-0.5 text-blue-400 text-glow" /> ID:
                    </span>
                    <span className="text-slate-300 font-semibold">{cert.credentialId}</span>
                  </div>
                )}
                <div className="flex items-center space-x-1 text-[10px] text-emerald-400 font-sans font-bold pt-1 text-glow">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Active & Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

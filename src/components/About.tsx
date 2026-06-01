/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, GraduationCap, Briefcase, Sparkles, Building2, BookOpen } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  const academicHighlights = [
    {
      degree: 'M.Phil Computer Science',
      institution: 'Peshawar Pioneer University',
      desc: 'Advanced research in machine learning frameworks, data annotation, and sequence models.',
      icon: GraduationCap,
      color: 'text-blue-400 bg-blue-500/15',
    },
    {
      degree: 'Master of Computer Science (MCS)',
      institution: 'University of Peshawar',
      desc: 'Sound foundation in algorithms, databases, web development, and software engineering principles.',
      icon: GraduationCap,
      color: 'text-emerald-400 bg-emerald-500/15',
    },
    {
      degree: 'Microsoft Certified Systems Engineer (MCSE)',
      institution: 'Microsoft Global Credentials',
      desc: 'Enterprise routing optimization, directory governance, and virtual infrastructure topology structures.',
      icon: Award,
      color: 'text-amber-400 bg-amber-500/15',
    },
    {
      degree: 'Diploma in Information Technology (DIT)',
      institution: 'KP Board of Technical Education',
      desc: 'Systems operations diagnostics, desktop databases, and low level localized hardware configs.',
      icon: Award,
      color: 'text-indigo-400 bg-indigo-500/15',
    },
  ];

  const coreFocus = [
    { title: 'Natural Language Processing', desc: 'Developing pipelines that process low-resource dialectal social-media text with orthographic variances.', icon: Sparkles },
    { title: 'Enterprise IT & Database Architectures', desc: 'Managing, indexing, and safeguarding public legal databases in KP\'s judicial courts.', icon: Building2 },
    { title: 'Academic Research & Evaluation', desc: 'Publishing model benchmarks and providing open-source annotated regional datasets.', icon: BookOpen },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 dark:bg-slate-950 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
            Biography
          </h2>
          <p className="font-serif italic text-glow text-3xl sm:text-5xl text-white tracking-tighter">
            About Me
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full text-glow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio text column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-sans font-bold text-2xl text-white tracking-tight flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-400 text-glow" />
              Government IT Professional & AI Dev
            </h3>
            <p className="text-slate-400 leading-relaxed text-base sm:text-lg font-sans font-light">
              I am a specialized public-sector IT operator and Computer Science researcher based in Peshawar, Pakistan. Working directly within the <span className="font-semibold text-white">Judiciary Sector</span>, I have seen first-hand how legacy paper databases can benefit from automated systems, security policies, and technical engineering.
            </p>
            <p className="text-slate-400 leading-relaxed text-base font-sans font-light">
              {personalInfo.aboutMe}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {coreFocus.map((focus, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/5 bg-slate-900/25 glass transition-all hover:border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                    <focus.icon className="w-4.5 h-4.5 text-glow" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-sm mb-1">{focus.title}</h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">{focus.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Academic Timeline column */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <h3 className="font-sans font-bold text-2xl text-white tracking-tight flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400 text-glow" />
              Academic Credentials
            </h3>
            <p className="text-sm text-slate-400 font-light">
              A comprehensive synthesis of my academic pathway and recognized certifications:
            </p>

            <div className="space-y-4">
              {academicHighlights.map((edu, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="p-5 rounded-2xl border border-white/5 bg-slate-900/15 glass hover:border-blue-550/30 shadow-xl transition-colors flex items-start space-x-4"
                >
                  <div className={`p-3 rounded-xl shrink-0 ${edu.color}`}>
                    <edu.icon className="w-6 h-6 text-glow" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="font-sans font-bold text-base text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="font-mono text-xs text-blue-400 font-semibold uppercase tracking-wider">
                      {edu.institution}
                    </p>
                    <p className="font-sans text-sm text-slate-450 text-slate-400 leading-relaxed pt-1">
                      {edu.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

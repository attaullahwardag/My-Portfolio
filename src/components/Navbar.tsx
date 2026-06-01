/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import { downloadResume } from '../utils/resumeGenerator';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active scrollspy
      const sections = ['home', 'about', 'skills', 'research', 'projects', 'education', 'experience', 'publications', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120; // safe offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.offsetTop - 85; // match header height offset
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass py-3 shadow-2xl border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/35 flex items-center justify-center text-blue-400 font-mono font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-glow" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic text-glow font-bold text-xl tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                Atta Ullah
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-400 font-semibold">
                M.Phil CS | AI & NLP Researcher
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const cleanedHref = item.href.replace('#', '');
              const isActive = activeSection === cleanedHref;
              return (
                <a
                  key={item.label}
                  id={`nav-link-${cleanedHref}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-slate-300 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400 rounded-full text-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              id="download-cv-btn-desktop"
              onClick={downloadResume}
              className="flex items-center space-x-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 px-5 py-2.5 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all active:scale-95 cursor-pointer font-medium text-xs tracking-wider uppercase"
            >
              <Download className="w-4 h-4" />
              <span>Resume ↓</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden glass border-b border-white/10 overflow-hidden shadow-2xl absolute w-full left-0 bg-slate-950/95"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
              {navItems.map((item) => {
                const cleanedHref = item.href.replace('#', '');
                const isActive = activeSection === cleanedHref;
                return (
                  <a
                    key={item.label}
                    id={`mobile-nav-link-${cleanedHref}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-blue-950/40 text-blue-400 border-l-4 border-blue-500'
                        : 'text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/5">
                <button
                  id="download-cv-btn-mobile"
                  onClick={() => {
                    setIsOpen(false);
                    downloadResume();
                  }}
                  className="flex items-center justify-center space-x-2 w-full bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white font-medium text-base px-4 py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer mt-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume (CV)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

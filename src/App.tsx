/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Research from './components/Research';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Default to dark mode for a tech-heavy AI website, but check local storage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('atta_portfolio_theme');
      if (saved !== null) {
        return saved === 'dark';
      }
      // Check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('atta_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('atta_portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div id="portfolio-root" className="min-h-screen bg-slate-950 dark:bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Dynamic Header / Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Structured Portfolios Single-Page Scroll Panels */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Research />
        <Projects />
        <Education />
        <Experience />
        <Publications />
        <Certifications />
        <Contact />
      </main>

      {/* Signature & Timing Footer Info */}
      <Footer />
    </div>
  );
}

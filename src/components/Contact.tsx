/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your academic or professional name';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Please write a brief message or research query';
    } else if (formData.message.length < 15) {
      newErrors.message = 'Please provide more details (at least 15 characters)';
    }
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    // Simulate network submission latency
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto clear victory state after card timeout
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 dark:bg-slate-950 border-y border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
            Inquiries
          </h2>
          <p className="font-serif italic text-glow text-3xl sm:text-5xl text-white tracking-tighter">
            Get In Touch
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full text-glow" />
          <p className="text-sm sm:text-base text-slate-400 mt-4 font-sans max-w-2xl mx-auto font-light">
            Whether inquiring about Pashto text corpora, academic cooperation, systems architecture guidance in the judiciary, or software collaborations—feel free to drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Info Details column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif italic text-2.5xl text-white tracking-tight flex items-center gap-1.5 text-glow">
              <MessageCircle className="w-6 h-6 text-blue-400 text-glow" />
              Contact Details
            </h3>
            <p className="font-sans text-sm text-slate-400 leading-relaxed font-light mb-6">
              You can connect with me through my research profiles, professional email, or direct telephone line (Pakistan regional time UTC+5).
            </p>

            <div className="space-y-4 pt-2">
              {/* Email channel */}
              <div className="flex items-start space-x-4 p-4 rounded-3xl glass bg-slate-900/10 border border-white/5 shadow-2xl">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl shrink-0">
                  <Mail className="w-5.5 h-5.5 text-glow" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold block">Primary Mail</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-sans font-bold text-sm sm:text-base text-slate-200 hover:text-blue-400 break-all transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone channel */}
              <div className="flex items-start space-x-4 p-4 rounded-3xl glass bg-slate-900/10 border border-white/5 shadow-2xl">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0">
                  <Phone className="w-5.5 h-5.5 text-glow" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold block">Professional Mobile</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="font-sans font-bold text-sm sm:text-base text-slate-200 hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location channel */}
              <div className="flex items-start space-x-4 p-4 rounded-3xl glass bg-slate-900/10 border border-white/5 shadow-2xl">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                  <MapPin className="w-5.5 h-5.5 text-glow" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold block">Location</span>
                  <p className="font-sans font-bold text-sm sm:text-base text-slate-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick platform anchors */}
            <div className="pt-6 border-t border-white/5">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-3.5">Research Registries:</span>
              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border border-white/5 bg-slate-900/10 font-sans text-xs font-semibold text-slate-400 hover:border-blue-500/25 hover:text-blue-400 transition-all shadow-2xs font-mono tracking-widest uppercase"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border border-white/5 bg-slate-900/10 font-sans text-xs font-semibold text-slate-400 hover:border-blue-500/25 hover:text-blue-400 transition-all shadow-2xs font-mono tracking-widest uppercase"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.researchGate}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border border-white/5 bg-slate-900/10 font-sans text-xs font-semibold text-slate-400 hover:border-blue-500/25 hover:text-blue-400 transition-all shadow-2xs font-mono tracking-widest uppercase"
                >
                  <span className="text-[10px] font-bold border border-slate-700 px-1 rounded-sm text-glow">RG</span>
                  <span>ResearchGate</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Interactive Form (Right) */}
          <div className="lg:col-span-7">
            <div className="glass border border-white/5 bg-slate-900/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    id="contact-form-success-drawer"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 text-glow animate-bounce" />
                    <div className="space-y-1 max-w-sm">
                      <h4 className="font-serif italic text-white text-xl tracking-tight text-glow">
                        Message Sent Successfully!
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                        Thank you for reaching out to Atta Ullah. Your inquiry has been cached locally, and a response will be dispatched to your email address soon.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    id="atta-contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    noValidate
                  >
                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
                        Full Name / Academic Entity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-950 text-white font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.name
                            ? 'border-red-500/50 focus:ring-red-500'
                            : 'border-white/5'
                        }`}
                        placeholder="e.g. Dr. Salman Khan / University of Peshawar"
                        disabled={isLoading}
                      />
                      {errors.name && (
                        <p className="font-mono text-[11px] text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-950 text-white font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.email
                            ? 'border-red-500/50 focus:ring-red-500'
                            : 'border-white/5'
                        }`}
                        placeholder="yourname@domain.com"
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="font-mono text-[11px] text-red-500">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject field */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
                        Inquiry Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-950 text-white font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.subject
                            ? 'border-red-500/50 focus:ring-red-500'
                            : 'border-white/5'
                        }`}
                        placeholder="e.g. Dialogue on Pashto Datasets Collaboration"
                        disabled={isLoading}
                      />
                      {errors.subject && (
                        <p className="font-mono text-[11px] text-red-500">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message field */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
                        Message Content <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-950 text-white font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y ${
                          errors.message
                            ? 'border-red-500/50 focus:ring-red-500'
                            : 'border-white/5'
                        }`}
                        placeholder="Write your research questions or business requests detailed here..."
                        disabled={isLoading}
                      />
                      {errors.message && (
                        <p className="font-mono text-[11px] text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isLoading}
                      className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm w-full px-4 py-3.5 rounded-xl shadow-lg shadow-blue-500/10 transition-all active:scale-98 disabled:opacity-75 disabled:active:scale-100 cursor-pointer text-center font-mono uppercase tracking-widest text-glow border border-blue-500/25"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-1 text-glow" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5 mr-1 text-glow" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

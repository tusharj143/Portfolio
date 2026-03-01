"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
    {
        id: "linkedin",
        label: "LinkedIn",
        cta: "Let's Connect",
        description: "Open to new opportunities and professional conversations.",
        url: "https://www.linkedin.com/in/tushar-jadhav-175974154/",
        color: "from-blue-600/30 to-blue-800/10",
        border: "border-blue-500/30",
        iconBg: "bg-[#0A66C2]",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        id: "github",
        label: "GitHub",
        cta: "View My Work",
        description: "Explore my open source projects and data engineering scripts.",
        url: "https://www.github.com/tusharj143",
        color: "from-purple-600/20 to-purple-900/10",
        border: "border-purple-500/30",
        iconBg: "bg-[#24292F]",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
];

export const Contact = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <footer className="relative z-20 bg-black py-20 px-6 md:px-12 w-full border-t border-white/10">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">

                <h2 className="text-4xl font-bold tracking-tighter text-white mb-4">
                    Ready to build?
                </h2>
                <p className="text-white/40 mb-16 font-mono text-sm tracking-wider">Let's create something remarkable together.</p>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-3xl mb-20">
                    {/* Email */}
                    <div className="flex flex-col items-center group">
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                            <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">Email</h4>
                        <a href="mailto:tusharj143@rediffmail.com" className="text-white/80 hover:text-white transition-colors text-sm">
                            tusharj143@rediffmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center group">
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                            <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">Phone</h4>
                        <span className="text-white/80 text-sm leading-relaxed">
                            +91-9623577167<br />+91-8421498133
                        </span>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center group">
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                            <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">Location</h4>
                        <span className="text-white/80 text-sm leading-relaxed">
                            Nashik, 422009<br />Maharashtra, India
                        </span>
                    </div>
                </div>

                {/* Social Connect Cards */}
                <div className="w-full max-w-3xl mb-20">
                    <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-8">— Find me on —</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {socials.map((social) => (
                            <motion.a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredId(social.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className={`group relative glass rounded-2xl p-6 text-left flex items-center gap-5 border ${social.border} overflow-hidden cursor-pointer no-underline`}
                            >
                                {/* Animated gradient bg on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Icon */}
                                <div className={`relative z-10 w-12 h-12 rounded-xl ${social.iconBg} flex items-center justify-center shrink-0 shadow-lg`}>
                                    {social.icon}
                                </div>

                                {/* Text */}
                                <div className="relative z-10 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-white text-base">{social.label}</span>
                                        <AnimatePresence>
                                            {hoveredId === social.id && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -6 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -6 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-xs font-mono text-white/60 tracking-wider uppercase"
                                                >
                                                    → open
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <p className="text-white/50 text-sm leading-snug">{social.description}</p>
                                </div>

                                {/* CTA Pill */}
                                <div className="relative z-10 shrink-0">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 group-hover:text-white bg-white/5 group-hover:bg-white/15 border border-white/10 group-hover:border-white/30 px-3 py-1.5 rounded-full transition-all duration-300">
                                        {social.cta}
                                        <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/5 w-full flex justify-between items-center text-xs text-white/30 font-mono">
                    <span>© {new Date().getFullYear()} Tushar Jadhav</span>
                    <span>Azure Data Engineer</span>
                </div>
            </div>
        </footer>
    );
};

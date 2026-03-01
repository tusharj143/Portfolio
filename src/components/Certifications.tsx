"use client";

import React from "react";
import { motion } from "framer-motion";

const certs = [
    {
        id: 1,
        name: "Databricks Lakehouse Fundamentals",
        credentialUrl: "https://credentials.databricks.com/f815e223-d1f0-4a3e-aded-c53f522683cf",
        badgeLabel: "View Credential",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
    },
    {
        id: 2,
        name: "Databricks Generative AI Fundamentals",
        credentialUrl: "https://credentials.databricks.com/e61dcf99-0bc3-4bf2-b553-2142b553e922#acc.thFO8QZB",
        badgeLabel: "View Credential",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
    },
];

export const Certifications = () => {
    return (
        <section className="relative z-20 bg-background py-20 px-6 md:px-12 w-full border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                        Certifications
                    </h2>
                    <div className="w-16 h-1 bg-white/20 mt-6 mx-auto" />
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {certs.map((cert) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative glass rounded-2xl p-6 flex flex-col gap-5 w-full md:w-[400px] hover:bg-white/10 transition-all duration-300 overflow-hidden cursor-pointer"
                            onClick={() => window.open(cert.credentialUrl, "_blank")}
                        >
                            {/* Subtle animated gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 p-2 shadow-lg shadow-red-500/20">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={cert.icon} alt="Databricks" className="w-full h-auto object-contain" />
                                </div>
                                <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                                    {cert.name}
                                </h3>
                            </div>

                            {/* Credential Badge Button */}
                            <div className="relative z-10 flex justify-end">
                                <span className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 group-hover:border-white/30 transition-all duration-300">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {cert.badgeLabel}
                                    <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

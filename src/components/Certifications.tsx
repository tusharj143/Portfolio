"use client";

import React from "react";
import { motion } from "framer-motion";

const certs = [
    {
        id: 1,
        name: "Databricks Lakehouse Fundamentals",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png", // Databricks Red Logo representation
    },
    {
        id: 2,
        name: "Databricks Generative AI Fundamentals",
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
                            className="glass rounded-2xl p-6 flex items-center justify-start gap-6 hover:bg-white/10 transition-colors w-full md:w-[400px]"
                        >
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 p-2 shadow-xl shadow-red-500/10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={cert.icon} alt="Databricks Logo" className="w-full h-auto object-contain" />
                            </div>
                            <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                                {cert.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

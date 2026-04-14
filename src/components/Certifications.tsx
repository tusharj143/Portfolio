"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollRevealCard } from "@/components/ui/ScrollRevealCard";
import { ActionBadge } from "@/components/ui/ActionBadge";

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
    {
        id: 3,
        name: "Microsoft Certified: Fabric Data Engineer Associate",
        credentialUrl: "https://learn.microsoft.com/en-us/users/tusharjadhav-7932/credentials/f9c95a63d5a7c4a8?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        badgeLabel: "View Credential",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
];

export const Certifications = () => {
    return (
        <SectionWrapper heading="Certifications">
            <div className="flex flex-wrap justify-center gap-6">
                {certs.map((cert) => (
                    <ScrollRevealCard
                        key={cert.id}
                        className={cn(
                            "group relative flex flex-col gap-5",
                            "w-full md:w-[400px] overflow-hidden"
                        )}
                        onClick={() => window.open(cert.credentialUrl, "_blank")}
                    >
                        {/* Subtle animated gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 p-2 shadow-lg shadow-red-500/20">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={cert.icon} alt={cert.name} className="w-full h-auto object-contain" />
                            </div>
                            <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                                {cert.name}
                            </h3>
                        </div>

                        {/* Credential Badge Button */}
                        <div className="relative z-10 flex justify-end">
                            <ActionBadge
                                className="bg-white/10 hover:bg-white/20 text-white/80 font-mono uppercase tracking-widest px-4 py-2 gap-2"
                                iconLeft={
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                            >
                                {cert.badgeLabel}
                            </ActionBadge>
                        </div>
                    </ScrollRevealCard>
                ))}
            </div>
        </SectionWrapper>
    );
};

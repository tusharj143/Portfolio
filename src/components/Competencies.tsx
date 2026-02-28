"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const competencies = [
    "Data/Cloud Data Engineering",
    "Azure Data Factory",
    "Azure Databricks",
    "PySpark",
    "SQL Development",
    "Python Programming",
    "ETL Processes",
    "Azure Synapse Analytics",
    "Azure Storage Services",
    "Cloud-based Data Solutions",
    "Microsoft Fabric",
];

export const Competencies = () => {
    return (
        <section className="relative z-20 bg-background py-32 px-6 md:px-12 w-full border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Core Competencies
                    </h2>
                    <div className="w-20 h-1 bg-white/20 mt-6 mx-auto" />
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {competencies.map((skill, i) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className={cn(
                                "glass rounded-full px-6 py-3",
                                "hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
                            )}
                        >
                            <span className="text-white/80 font-medium tracking-wide text-sm md:text-base">
                                {skill}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

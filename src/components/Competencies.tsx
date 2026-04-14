"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

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
        <SectionWrapper heading="Core Competencies" maxWidth="5xl">
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
        </SectionWrapper>
    );
};

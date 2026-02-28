"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
    {
        id: 1,
        role: "Azure Data Engineer L1",
        company: "John Deere Pvt Ltd (Payroll-Quess Corp Pvt Ltd., Delta IOT Solutions)",
        duration: "August ’22 – Present",
        bullets: [
            "Designed and implemented ETL processes to extract, transform, and load data from various source systems into Azure Data Storage services, leveraging tool such as Azure Data Factory.",
            "Facilitated data ingestion into multiple Azure services, including Azure Data Lake, Azure Storage, Azure SQL, and Azure Synapse Analytics, with data processing executed in Azure Databricks.",
            "Built and maintained pipelines in Azure Data Factory, utilizing Linked Services, Datasets, and Pipelines to integrate data from diverse sources like Azure SQL, Blob Storage, Azure Data Lake, and Azure Synapse Analytics.",
            "Configured and scheduled appropriate triggers to automate workflows.",
            "Developed and optimized Spark applications using Spark SQL and PySpark in Databricks to transform, aggregate, and analyze datasets across multiple formats, driving insights into customer usage patterns.",
            "Authored and optimized SQL queries to deliver efficient and scalable solutions that aligned with technical specifications and business objectives.",
            "Collaborated with stakeholders to gather functional requirements, analysed data challenges, and escalate critical issues to business leadership for resolution.",
            "Partnered with reporting teams to provide curated datasets tailored to analytics requirements, enabling insightful decision-making.",
            "Leveraged tools like Azure DevOps to manage version control and implement continuous integration/continuous deployment (CI/CD) pipelines.",
            "Implemented unit testing frameworks in Azure Data Factory pipelines to validate data transformations, ensuring accurate and reliable ETL processes."
        ]
    },
    {
        id: 2,
        role: "Data Engineer",
        company: "EC Mobility Pvt. Ltd",
        duration: "Oct ’18 - Nov ‘19",
        bullets: [
            "Designed and maintained on-premise Hadoop clusters, managing HDFS storage, data layout, and access controls for high-volume batch workloads.",
            "Developed scalable Spark jobs in Scala for ETL, aggregations, and data enrichment over large datasets stored in HDFS.",
            "Implemented Sqoop-based data ingestion pipelines between relational databases and HDFS, ensuring reliable, scheduled incremental loads.",
            "Optimized jobs and tables through partitioning, bucketing, and file format choices to improve performance and resource utilization on the cluster.",
            "Collaborated with analysts and BI teams to provide clean, well-documented datasets and troubleshoot data quality or pipeline issues in the Hadoop ecosystem."
        ]
    }
];

export const Experience = () => {
    return (
        <section className="relative z-20 bg-background py-32 px-6 md:px-12 w-full">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mt-6 mx-auto md:mx-0" />
                </div>

                <div className="flex flex-col gap-16">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={cn(
                                "glass rounded-3xl p-8 md:p-12 flex flex-col relative",
                                "hover:bg-white/[0.07] transition-colors duration-500"
                            )}
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 pb-8 border-b border-white/10 gap-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-white tracking-tight">
                                        {exp.role}
                                    </h3>
                                    <div className="text-xl text-blue-400 font-medium mt-2">
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="text-sm font-mono text-white/50 uppercase tracking-widest whitespace-nowrap bg-white/5 px-4 py-2 rounded-full self-start">
                                    {exp.duration}
                                </div>
                            </div>

                            <ul className="space-y-4 text-white/70">
                                {exp.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-blue-500 mr-4 mt-1.5 opacity-60 text-xs">◆</span>
                                        <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

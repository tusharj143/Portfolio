"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const Overlay = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Section 1: "My Name. Creative Developer." (0% to ~25% scroll)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-50%"]); // Parallax up

    // Section 2: "I build digital experiences." (~25% to ~55% scroll)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.55], ["50%", "-50%"]);

    // Section 3: "Bridging design and engineering." (~55% to 85% scroll)
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.85], ["50%", "-50%"]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute top-0 left-0 w-full h-[500vh] z-10 pointer-events-none"
            )}
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
                        Tushar Jadhav
                    </h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/80 font-medium tracking-wide">
                        Azure Data Engineer.
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md max-w-2xl">
                        Building scalable data pipelines & analytics ecosystems.
                    </h2>
                    <div className="w-20 h-1 bg-white mt-6 rounded-full" />
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md max-w-2xl">
                        Expert in Azure Data Factory, Databricks & Big Data.
                    </h2>
                    <div className="w-20 h-1 bg-white mt-6 rounded-full ml-auto" />
                </motion.div>
            </div>
        </div>
    );
};

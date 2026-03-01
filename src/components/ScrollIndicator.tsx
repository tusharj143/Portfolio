"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();
    // Fade out between 0% and 30% of page scroll
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3], [0, 20]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none select-none"
        >
            <span className="text-white/40 text-xs font-mono uppercase tracking-[0.25em]">
                Scroll Down
            </span>
            {/* Animated bouncing arrow */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg
                    className="w-5 h-5 text-white/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </motion.div>
        </motion.div>
    );
};

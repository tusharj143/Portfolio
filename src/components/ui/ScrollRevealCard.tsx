"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    onClick?: () => void;
}

/**
 * A scroll-triggered reveal card with a glass morphism background.
 * Replaces repeated motion.div + glass + whileInView patterns.
 */
export const ScrollRevealCard = ({
    children,
    className,
    delay = 0,
    onClick,
}: ScrollRevealCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay }}
            onClick={onClick}
            className={cn(
                "glass rounded-2xl p-6",
                "hover:bg-white/[0.07] transition-colors duration-500",
                onClick && "cursor-pointer",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

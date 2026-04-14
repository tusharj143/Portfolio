import React from "react";
import { cn } from "@/lib/utils";

interface ActionBadgeProps {
    children: React.ReactNode;
    iconLeft?: React.ReactNode;
    className?: string;
}

/**
 * Reusable animated badge/button component typically used inside a hoverable group.
 * Displays an optional left icon, text, and an animated up-right arrow.
 */
export const ActionBadge = ({ children, iconLeft, className }: ActionBadgeProps) => {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10",
                "group-hover:text-white group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300",
                className
            )}
        >
            {iconLeft}
            {children}
            <svg
                className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
            </svg>
        </span>
    );
};

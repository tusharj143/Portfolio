import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    heading: string;
    children: React.ReactNode;
    className?: string;
    headingAlign?: "left" | "center";
    maxWidth?: "4xl" | "5xl";
    /** Use "footer" for the Contact section which has a black bg */
    as?: "section" | "footer";
}

/**
 * Shared section shell used by all content sections below the hero.
 * Provides consistent padding, heading style, and divider line.
 */
export const SectionWrapper = ({
    heading,
    children,
    className,
    headingAlign = "center",
    maxWidth = "4xl",
    as: Tag = "section",
}: SectionWrapperProps) => {
    return (
        <Tag
            className={cn(
                "relative z-20 bg-background py-32 px-6 md:px-12 w-full border-t border-white/5",
                className
            )}
        >
            <div className={cn("mx-auto", `max-w-${maxWidth}`)}>
                <div
                    className={cn(
                        "mb-20",
                        headingAlign === "center"
                            ? "text-center"
                            : "text-center md:text-left"
                    )}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        {heading}
                    </h2>
                    <div
                        className={cn(
                            "w-20 h-1 bg-white/20 mt-6",
                            headingAlign === "center" ? "mx-auto" : "mx-auto md:mx-0"
                        )}
                    />
                </div>
                {children}
            </div>
        </Tag>
    );
};

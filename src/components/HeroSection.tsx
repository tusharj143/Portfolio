import { Suspense } from "react";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { HERO_HEIGHT_VH } from "@/lib/constants";

interface HeroSectionProps {
    framePaths: string[];
}

/**
 * Hero scroll zone: full-height canvas animation with scroll-driven text overlay.
 * ScrollyCanvas and Overlay are tightly coupled via HERO_HEIGHT_VH — keep them here.
 */
export const HeroSection = ({ framePaths }: HeroSectionProps) => {
    return (
        <div className="relative w-full z-0">
            <Suspense
                fallback={
                    <div
                        className="bg-background flex items-center justify-center"
                        style={{ height: `${HERO_HEIGHT_VH}vh` }}
                    >
                        <span className="text-white/20 text-xs font-mono uppercase tracking-widest">
                            Loading Experience...
                        </span>
                    </div>
                }
            >
                <ScrollyCanvas framePaths={framePaths} />
            </Suspense>
            <Overlay />
        </div>
    );
};

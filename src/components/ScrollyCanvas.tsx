"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
    framePaths: string[];
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ framePaths }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Use Framer Motion to track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images — only track images that actually loaded successfully
    useEffect(() => {
        if (!framePaths.length) return;

        const loaded: HTMLImageElement[] = [];
        let settled = 0;

        framePaths.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loaded.push(img);
                settled++;
                if (settled === framePaths.length) {
                    // Sort by naturalWidth is not enough — sort by src order
                    // Re-sort to maintain original path order
                    const ordered = framePaths
                        .map((p) => loaded.find((i) => i.src.endsWith(p) || i.src === p || i.src === location.origin + p))
                        .filter((i): i is HTMLImageElement => !!i);
                    setImages(ordered.length > 0 ? ordered : loaded);
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                // Skip this frame — do not push to loaded
                settled++;
                if (settled === framePaths.length) {
                    setImages(loaded);
                    setIsLoaded(true);
                }
            };
        });
    }, [framePaths]);

    // Update canvas when frame changes
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0 || !canvasRef.current) return;

        const frameIndex = Math.min(
            framePaths.length - 1,
            Math.floor(latest * framePaths.length)
        );

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[frameIndex];
        if (!img) return;

        // Object fit cover logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current || !isLoaded || images.length === 0) return;

            const canvas = canvasRef.current;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Draw initial frame
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const img = images[0];
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        };

        handleResize(); // Initial setup

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images]);

    return (
        <div ref={containerRef} className="h-[500vh] relative w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background text-foreground text-sm font-medium tracking-widest uppercase">
                        Loading Experience...
                    </div>
                )}
            </div>
        </div>
    );
};

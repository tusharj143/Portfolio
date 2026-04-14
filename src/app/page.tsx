import path from "path";
import fs from "fs";
import { HeroSection } from "@/components/HeroSection";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Competencies } from "@/components/Competencies";
import { Contact } from "@/components/Contact";

/** Reads animation frame paths from public/sequence at build time (server-side). */
function getFramePaths(): string[] {
    try {
        return fs
            .readdirSync(path.join(process.cwd(), "public", "sequence"))
            .filter((f) => /\.(png|webp|jpg)$/i.test(f))
            .sort((a, b) => a.localeCompare(b))
            .map((f) => `/sequence/${f}`);
    } catch {
        return [];
    }
}

export default function Home() {
    const framePaths = getFramePaths();

    return (
        <main className="relative flex flex-col min-h-screen bg-background w-full">
            {/* Hero: scroll-driven canvas + text overlay */}
            <HeroSection framePaths={framePaths} />

            {/* Content sections */}
            <div className="flex flex-col relative z-20">
                <Experience />
                <Competencies />
                <Certifications />
                <Contact />
            </div>
        </main>
    );
}

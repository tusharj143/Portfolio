import path from "path";
import fs from "fs";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Competencies } from "@/components/Competencies";
import { Contact } from "@/components/Contact";

export default function Home() {
    // Read all sequence files dynamically
    const sequenceDir = path.join(process.cwd(), "public", "sequence");
    let files: string[] = [];
    try {
        const dirFiles = fs.readdirSync(sequenceDir);
        // Sort files to ensure sequential order
        files = dirFiles
            .filter((file) => file.endsWith(".png") || file.endsWith(".webp") || file.endsWith(".jpg"))
            .sort((a, b) => {
                // Simple string sort usually works if names have padding (e.g. frame_001, frame_002)
                return a.localeCompare(b);
            })
            .map((file) => `/sequence/${file}`);
    } catch (error) {
        console.error("Failed to read sequence directory:", error);
    }

    return (
        <main className="relative flex flex-col min-h-screen bg-background w-full">
            {/* 
        The overlay sits on top of the ScrollyCanvas. 
        Because ScrollyCanvas uses `position: relative` for its 500vh container and sticky for the canvas,
        the overlay which is also 500vh absolute will map perfectly over the scroll duration.
      */}
            <div className="relative w-full z-0">
                <ScrollyCanvas framePaths={files} />
                <Overlay />
            </div>

            <div className="flex flex-col relative z-20">
                <Experience />
                <Competencies />
                <Certifications />
                <Contact />
            </div>
        </main>
    );
}

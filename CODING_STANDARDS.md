# Portfolio Frontend Coding Rules & Architecture Guidelines

Based on the architectural refactoring of this project, adhere to the following rules to maintain a decoupled, performant, and clean codebase.

## 1. Clean Component Architecture

- **Max Component Imports per File:** Keep structural files (like `page.tsx`) focused. A component should ideally have **no more than 5-7 internal component imports**. If a page or layout imports more, it indicates a "God Component." Stop and group related components into larger logical wrappers (e.g., wrapping `Overlay` and `ScrollyCanvas` into `HeroSection`).
- **Separation of Concerns:** Top-level page files should act mostly as declarative layouts or data-fetching hubs, delegating UI rendering to specific section components.

## 2. Shared Values & Constants

- **No Magic Numbers:** Never hardcode layout coordinates, viewport heights, or z-indexes that must perfectly align across multiple discrete components (e.g., the `500vh` scroll track height).
- **Centralize Constants:** If a numeric value, string, or timing duration is shared by two or more components to synchronize behavior, extract it immediately to `src/lib/constants.ts`.

## 3. UI Extraction & Reusability (The "Rule of Two")

- **When to Extract:** If a UI structure (e.g., a glass morphism card, a section heading, or an animated button) is repeated **2 or more times** with identical DOM structure or animation variants, it must be extracted into `src/components/ui/`.
- **Primitives Over Repetition:** Do not copy-paste Tailwind boilerplate or Framer Motion animation configs. Use primitives like `ActionBadge`, `SectionWrapper`, and `ScrollRevealCard`.
- **Extensibility:** All reusable UI components must accept a `className` prop and merge it using `cn()` (Tailwind Merge) to allow context-specific overrides without breaking base styles.

## 4. Server vs. Client Components

- **Default to Server:** Every component is a Server Component by default. Only add `"use client"` at the very top of files that strictly require it.
- **When to use Client Components:** 
  - The component relies on React state (`useState`, `useReducer`).
  - The component relies on lifecycle hooks (`useEffect`, `useRef`).
  - The component relies on browser APIs (Window width, Framer Motion `useScroll`, event listeners).
- **Isolate Client Weight:** Push `"use client"` boundaries as far down the component tree as possible. Do not make an entire layout page a Client Component just because one button inside it needs state.
- **Lazy Loading & Suspense:** Wrap heavy client-side components (like `<canvas>` rendering or heavy Framer Motion tracks) in React `<Suspense>` boundaries to prevent blocking the initial Server render of the page.

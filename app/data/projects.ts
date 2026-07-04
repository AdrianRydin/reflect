import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: StaticImageData;
  liveUrl?: string;
  repoUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    slug: "nebula-analytics",
    title: "Nebula Analytics",
    tagline: "Realtime dashboard for product teams",
    description:
      "A dark-mode analytics platform with live metrics, drill-down charts, and shareable reports.",
    longDescription:
      "Nebula is a realtime analytics tool built for product teams who care about speed and clarity. It streams events over WebSockets, renders 60fps charts, and lets teams collaborate on annotated dashboards. I led the frontend architecture, design system, and animation layer.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "tRPC"],
    image: project2,
    liveUrl: "#",
    repoUrl: "#",
    year: "2025",
  },
  {
    slug: "aether-ui",
    title: "Aether UI Kit",
    tagline: "Open-source component library",
    description:
      "A themeable component library for Vue and React, focused on motion and accessibility.",
    longDescription:
      "Aether is a design system I built to explore shared primitives between Vue and React. It ships accessible components, a token-driven theming system, and a Figma library that stays in sync with code.",
    tech: ["Vue", "React", "TypeScript", "Figma", "Storybook"],
    image: project1,
    liveUrl: "#",
    repoUrl: "#",
    year: "2024",
  },
  {
    slug: "lumen-editor",
    title: "Lumen Editor",
    tagline: "Distraction-free writing app",
    description:
      "A minimalist markdown editor with fluid typography, focus mode, and local-first sync.",
    longDescription:
      "Lumen is a personal project born from my writing habit. It's a markdown editor that gets out of your way — buttery-smooth typing, offline-first, and a soft ambient theme that changes with the time of day.",
    tech: ["React", "TypeScript", "TailwindCSS", "IndexedDB"],
    image: project3,
    liveUrl: "#",
    repoUrl: "#",
    year: "2024",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

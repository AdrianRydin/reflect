import flottsunds from "../assets/flottsunds-har.png";
import rentium from "../assets/Rentium.png";
import portfolio from "../assets/PracticePortfolio.png";
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
    slug: "flottsunds-har",
    title: "Flottsunds hår",
    tagline: "Custom website for a hair salon",
    description: "A static website delivering everything the salon needs",
    longDescription:
      "Nebula is a realtime analytics tool built for product teams who care about speed and clarity. It streams events over WebSockets, renders 60fps charts, and lets teams collaborate on annotated dashboards. I led the frontend architecture, design system, and animation layer.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: flottsunds,
    liveUrl: "https://www.flottsundshar.se/",
    repoUrl: "#",
    year: "2025",
  },
  {
    slug: "e-commerce-project",
    title: "E-Commerce Student Project",
    tagline: "An e-commerce website with multiple items",
    description:
      "A small student project made to get experience in building e-commerce website",
    longDescription:
      "A small student project made to get experience in building e-commerce website",
    tech: ["React", "TypeScript", "MUI"],
    image: rentium,
    liveUrl: "https://rentium.vercel.app/",
    repoUrl: "https://github.com/empafrontend/Rentium",
    year: "2024",
  },
  {
    slug: "group-portfolio",
    title: "Group Portfolio",
    tagline: "Practice portfolio with animations and modern styling",
    description:
      "Modern portfolio website for a creative agency for a school project and responsive design.",
    longDescription:
      "Modern portfolio website for a creative agency for a school project and responsive design.",
    tech: ["TypeScript", "React", "Framer Motion"],
    image: portfolio,
    liveUrl: "https://agile-portfolio.netlify.app/",
    repoUrl: "https://github.com/AdrianRydin/agile-portfolio",
    year: "2024",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

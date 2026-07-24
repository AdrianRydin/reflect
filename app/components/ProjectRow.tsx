"use client";

import { useState } from "react";
import { ChevronDown } from "./ChevronDown";

const PROJECTS = [
  {
    title: "Lykta",
    year: "2024",
    description:
      "A minimal journaling app with end-to-end encryption. Built to keep thoughts private without sacrificing usability. Features markdown support and local-first sync.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "#",
    source: "#",
  },
  {
    title: "Vädervy",
    year: "2024",
    description:
      "Clean weather dashboard pulling data from the SMHI open API. Shows 5-day forecasts with hourly breakdowns. Fully responsive, built as an exercise in working with external APIs.",
    stack: ["React", "TypeScript", "SMHI API", "CSS Modules"],
    href: "#",
    source: "#",
  },
  {
    title: "Köplista",
    year: "2023",
    description:
      "A real-time shared shopping list app. Multiple users can collaborate on the same list simultaneously. My first project using websockets and real-time state sync.",
    stack: ["Node.js", "Socket.io", "React", "PostgreSQL"],
    href: "#",
    source: "#",
  },
];

export function ProjectRow({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-white/8 hover:border-white/12 transition-colors duration-200">
      <button
        className="w-full text-left px-6 py-6 flex items-start gap-6 group"
        onClick={() => setExpanded((v) => !v)}
      >
        <span className="text-xs text-snow-700 font-sans mt-1 flex-shrink-0 w-6 text-right">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h3 className="font-serif text-xl text-snow-100 group-hover:text-magenta-400 transition-colors duration-200">
              {project.title}
            </h3>
            <span className="text-xs text-snow-600 font-sans">
              {project.year}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-snow-500 border border-white/8 px-2 py-0.5 font-sans"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <span
          className={`text-snow-600 flex-shrink-0 transition-transform duration-200 mt-1 ${expanded ? "rotate-180" : ""}`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      {expanded && (
        <div className="px-6 pb-6 pl-[4.5rem]">
          <p className="text-snow-400 text-sm leading-relaxed mb-5 max-w-prose font-light">
            {project.description}
          </p>
          <div className="flex gap-4">
            <a
              href={project.href}
              className="text-xs text-magenta-400 hover:text-magenta-300 transition-colors border-b border-magenta-800 hover:border-magenta-500 pb-px font-sans"
            >
              Live demo
            </a>
            <a
              href={project.source}
              className="text-xs text-snow-500 hover:text-snow-300 transition-colors border-b border-snow-800 hover:border-snow-500 pb-px font-sans"
            >
              Source code
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

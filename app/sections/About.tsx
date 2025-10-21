"use client";

import { Code2, Palette, Zap, type LucideIcon } from "lucide-react";

type Skill = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function About() {
  const skills: Skill[] = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices and modern standards.",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description:
        "Creating intuitive interfaces with attention to detail and user experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed and efficiency across all devices.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-neutral-900">
      <aside className="max-w-6xl mx-auto">
        <aside className="mb-16">
          <h2 className="mb-4 text-white">About me</h2>
          <aside className="w-20 h-1 bg-white" />
        </aside>

        <aside className="grid md:grid-cols-2 gap-12 mb-16">
          <aside>
            <p className="text-white mb-4 text-center sm:text-left">
              I&apos;m a passionate frontend developer with a keen eye for
              design and a love for creating seamless web experiences. With
              expertise in modern JavaScript frameworks and a deep understanding
              of web standards, I bring ideas to life through code.
            </p>
            <p className="text-white text-center sm:text-left">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </aside>

          <aside>
            <h3 className="mb-6 text-white text-center sm:text-left">
              Technologies I Work With
            </h3>
            <aside className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Git",
                "JavaScript",
                "HTML/CSS",
                "REST APIs",
                "Responsive Design",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-neutral-800 border border-neutral-700 rounded-md text-sm text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </aside>
          </aside>
        </aside>

        <aside className="grid md:grid-cols-3 gap-8">
          {skills.map(({ icon: Icon, title, description }) => (
            <div
              key={title} // ✅ stabil string
              className="bg-neutral-800 p-6 rounded-lg border border-neutral-700"
            >
              <Icon className="w-10 h-10 text-white mb-4" />
              <h3 className="mb-3 text-white">{title}</h3>
              <p className="text-neutral-400 text-sm">{description}</p>
            </div>
          ))}
        </aside>
      </aside>
    </section>
  );
}

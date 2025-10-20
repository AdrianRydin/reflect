"use client";

import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/Button";
import { ImageWithFallback } from "../figma/ImageWithFallbacks";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Student Project",
      description:
        "A small student project made to get experience in building e-commerce website",
      image: "/Rentium.png",
      tags: ["React", "TypeScript", "MUI"],
      github: "https://github.com/empafrontend/Rentium",
      demo: "https://rentium.vercel.app/",
    },
    {
      id: 2,
      title: "Platformer Game",
      description:
        "A platformer game made to be infuriating to play, custom physics engine and sprites",
      image: "/Platformer.png",
      tags: ["Typescript", "OOP"],
      github: "https://github.com/lovelanai/big-mac-armageddon",
      demo: "https://bigmacarmageddon.netlify.app/",
    },
    {
      id: 3,
      title: "Group Portfolio",
      description:
        "Modern portfolio website for a creative agency for a school project and responsive design.",
      image: "/PracticePortfolio.png",
      tags: ["Typescript", "React", "Framer Motion"],
      github: "https://github.com/AdrianRydin/agile-portfolio",
      demo: "https://agile-portfolio.netlify.app/",
    },
  ];

  return (
    <section className="py-24 px-6 bg-neutral-950" id="projects">
      <aside className="max-w-6xl mx-auto">
        <aside className="mb-16">
          <h2 className="mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-white"></div>
        </aside>

        <aside className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group hover:shadow-xl hover:shadow-neutral-900/50 transition-shadow bg-neutral-900 border-neutral-800"
            >
              <div className="relative h-48 overflow-hidden bg-neutral-800">
                <ImageWithFallback
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-white"> {project.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={"secondary"}
                      className="text-xs bg-neutral-800 text-neutral-300 border-neutral-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    variant={"outline"}
                    size={"sm"}
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  <Button
                    className="flex-1 bg-white text-neutral-950 hover:bg-neutral-200"
                    size={"sm"}
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </aside>
      </aside>
    </section>
  );
}

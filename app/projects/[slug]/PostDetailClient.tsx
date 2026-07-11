"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/app/data/projects";

type Project = (typeof projects)[number];

type ProjectDetailClientProps = {
  project: Project;
  next?: Project;
};

export default function ProjectDetailClient({
  project,
  next,
}: ProjectDetailClientProps) {
  return (
    <article className="mx-auto max-w-2xl px-6 pb-24 mt-20">
      <Link
        href="/projects"
        className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        All projects
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border/60">
          <Image
            src={project.image}
            alt={project.title}
            width={1024}
            height={640}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <h1 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/60 bg-secondary/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.header>

      {"description" in project && project.description && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 text-muted-foreground leading-relaxed"
        >
          {project.description}
        </motion.div>
      )}

      {next && next.slug !== project.slug && (
        <div className="mt-16 border-t border-border/60 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Next project
          </p>

          <Link
            href={`/projects/${next.slug}`}
            className="mt-2 inline-flex items-baseline gap-3 font-display text-xl font-semibold transition-colors hover:text-primary"
          >
            {next.title} →
          </Link>
        </div>
      )}
    </article>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/app/data/projects";
import Image from "next/image";

export function Projects() {
  const featuredProjects = projects.slice(0, 2);
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Recent projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden text-sm text-muted-foreground transition-colors hover:text-primary sm:inline-flex sm:items-center sm:gap-1"
        >
          All projects <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/60 hover:shadow-[0_0_40px_-10px_var(--primary)]"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">
                    {p.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {p.year}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.tagline}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

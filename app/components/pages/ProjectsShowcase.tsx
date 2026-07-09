"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ProjectsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <motion.div
          key={p.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
        >
          <Link
            href={`/projects/${p.slug}`}
            className="group block h-full overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/60 hover:shadow-[0_0_40px_-10px_var(--primary)]"
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                width={1024}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="font-display text-xl font-semibold">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 bg-secondary/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectsShowcase;

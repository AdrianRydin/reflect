"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/app/data/posts";

export function BlogSection() {
  const featuredPosts = posts.slice(0, 2);
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Writing
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Latest essays
          </h2>
        </div>
        <Link
          href={"/blog"}
          className="hidden text-sm text-muted-foreground transition-colors hover:text-primary sm:inline-flex sm:items-center sm:gap-1"
        >
          All posts <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid gap-4">
        {featuredPosts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={"/blog/$slug"}
              className="group flex flex-col justify-between gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/60 sm:flex-row sm:items-center"
            >
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

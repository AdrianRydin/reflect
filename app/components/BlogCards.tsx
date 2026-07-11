"use client";

import { motion } from "framer-motion";
import { posts } from "../data/posts";
import Link from "next/link";

function BlogCards() {
  return (
    <div className="flex flex-col divide-y divide-border/60">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        >
          <Link href={"/blog/$slug"} className="group block py-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <div className="flex gap-1.5">
                {post.tags.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 bg-secondary/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
              {post.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-flex text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100 duration-400">
              Read essay →
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default BlogCards;

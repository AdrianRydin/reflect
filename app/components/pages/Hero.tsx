"use client";

import { motion } from "framer-motion";
import { GradientBlob } from "../layout/GradientBlob";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden h-screen">
      <GradientBlob />
      <div className="mx-auto flex max-w-6xl flex-col items-start px-6 pb-32 pt-16 sm:pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            Available for new work - 2026
          </motion.div>
          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Building quiet <br /> interfaces &amp;{" "}
            <span className="text-gradient">writing louder</span> thoughts.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            I'm Adrian — a frontend developer working with Next.js, React, and
            Vue. I care about quality as well as quantity, so I usually get good
            code done fast.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <Link
              href={"/projects"}
              className="group inline-flex items-center gap-2 rounded-full bg-(image:--gradient-purple) px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--primary)]"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={"/blog"}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              Read my blog
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

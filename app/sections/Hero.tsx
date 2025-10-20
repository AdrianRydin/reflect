// components/Hero.tsx (client)
"use client";

import { Button } from "@/components/Button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-neutral-950">
      <aside className="max-w-4xl mx-auto text-center">
        <aside className="mb-6">
          <aside className="inline-block px-4 py-1.5 rounded-full bg-neutral-800 text-neutral-300 mb-6">
            Available for freelance work
          </aside>
        </aside>

        <h1 className="mb-6 text-white">Hi, I&apos;m Adrian</h1>

        <p className="text-white max-w-2xl mx-auto mb-8">
          A frontend developer passionate about creating beautiful, responsive,
          and user-friendly web experiences. I specialize in React, TypeScript,
          and modern web technologies.
        </p>

        <aside className="flex gap-4 justify-center mb-12">
          <Button
            className="bg-white text-neutral-950 hover:bg-neutral-200"
            onClick={() => scrollToId("projects")}
          >
            View projects
          </Button>

          <Button
            className="border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:text-white"
            onClick={() => scrollToId("about")}
            variant="outline"
          >
            About me
          </Button>
        </aside>
      </aside>

      <button
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-neutral-400 transition-colors"
        onClick={() => scrollToId("about")}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}

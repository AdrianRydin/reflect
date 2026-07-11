import { Metadata } from "next";
import BlogCards from "../components/BlogCards";

export const metadata: Metadata = {
  title: "Reflect | Blog",
  description: "Blog subpage on Reflect",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 mt-20">
      <header className="py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">
          Writing
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Notes, essays &amp; half-formed thoughts.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Mostly about philosophy, craft, and other fun stuff
        </p>
      </header>

      <BlogCards />
    </div>
  );
}

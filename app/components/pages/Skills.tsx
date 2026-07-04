"use client";

const skills = [
  "Next.js",
  "React",
  "Vue",
  "TypeScript",
  "TailwindCSS",
  "Figma",
  "Framer Motion",
  "Node.js",
];

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A developer who writes
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            For the last six years I've been building for the web — shipping
            design systems, marketing sites, and product surfaces at teams that
            care about craft. My favorite work sits at the intersection of
            engineering and typography.
          </p>
          <p>
            Outside of code, I write short essays about philosophy, attention,
            and what it means to make things by hand in an age of infinite
            reproduction.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

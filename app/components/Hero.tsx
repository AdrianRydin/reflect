import Link from "next/link";
import { ArrowRight } from "./ArrowRight";

const DETAILS = [
  { label: "Based in", value: "Sweden" },
  { label: "Age", value: "23" },
  { label: "Available", value: "Open to work" },
  { label: "Focus", value: "Web dev" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pt-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="font-sans text-xs tracking-[0.2em] text-snow-500 uppercase">
            Sweden | 23
          </span>

          <span className="inline-block h-px w-8 bg-snow-800" />

          <span className="font-sans text-xs tracking-[0.2em] text-snow-500 uppercase">
            Frontend / Fullstack
          </span>

          <span className="inline-block h-px w-8 bg-snow-800" />

          <span className="font-sans text-xs tracking-[0.2em] text-snow-500 uppercase">
            Uddevalla, Sweden
          </span>
        </div>

        <h1 className="mb-8 font-serif leading-[1.08] tracking-tight text-snow-50">
          <span className="block text-5xl text-magenta-500 sm:text-7xl md:text-8xl lg:text-[96px]">
            Adrian
          </span>

          <span className="block text-5xl text-magenta-500 sm:text-7xl md:text-8xl lg:text-[96px]">
            Rydin
          </span>
        </h1>

        <p className="mb-12 max-w-xl font-sans text-lg leading-relaxed font-light text-snow-300 sm:text-xl md:text-2xl">
          I build things for the web. Clean interfaces, thoughtful interactions,
          and code that I&apos;m not embarrassed to show.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-magenta-500 px-6 py-3 text-sm font-medium tracking-wide text-snow-50 transition-colors duration-200 hover:bg-magenta-400"
          >
            See my work
            <ArrowRight size={14} />
          </Link>

          <Link
            href="#contact"
            className="border-b border-snow-700 pb-px text-sm text-snow-400 transition-colors duration-200 hover:border-snow-400 hover:text-snow-200"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-white/5 pt-8 md:mt-32 md:grid-cols-4">
          {DETAILS.map((item) => (
            <div key={item.label}>
              <p className="mb-1 font-sans text-xs tracking-[0.15em] text-snow-600 uppercase">
                {item.label}
              </p>

              <p className="font-sans font-medium text-snow-200">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

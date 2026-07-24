import { SectionLabel } from "./SectionLabel";

const LEARNING_ITEMS = [
  "Docker & containerization",
  "Testing with Vitest",
  "Go (slowly)",
  "Python (also slowly)",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel number="01" label="About" />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-6 text-lg leading-relaxed font-light text-snow-200">
              Hey, I&apos;m Adrian — a junior developer from Uddevalla, Sweden.
              I&apos;ve been building for the web for a couple of years now and
              I genuinely love it.
            </p>

            <p className="mb-6 leading-relaxed font-light text-snow-400">
              I&apos;m most comfortable on the frontend side of things — React
              and TypeScript. But I like understanding the full picture, so
              I&apos;ve been pushing myself into backend territory too.
            </p>

            <p className="leading-relaxed font-light text-snow-400">
              When I&apos;m not coding, I&apos;m usually playing video games or
              making music.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-white/8 p-6">
              <p className="mb-3 text-xs tracking-[0.15em] text-snow-600 uppercase">
                Currently learning
              </p>

              <ul className="space-y-2">
                {LEARNING_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-snow-300"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-magenta-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/8 p-6">
              <p className="mb-3 text-xs tracking-[0.15em] text-snow-600 uppercase">
                Looking for
              </p>

              <p className="text-sm leading-relaxed text-snow-300">
                A junior or entry-level role where I can keep learning,
                contribute to real products, and work with people who care about
                the craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

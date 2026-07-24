import { SKILLS } from "../data/skills";
import { SectionLabel } from "./SectionLabel";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 px-6 py-28">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel number="02" label="Skills" />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-5 font-sans text-xs tracking-[0.15em] text-snow-600 uppercase">
                {category}
              </h3>

              <ul className="space-y-3">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm font-light text-snow-200"
                  >
                    <span className="h-4 w-px shrink-0 bg-magenta-700" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

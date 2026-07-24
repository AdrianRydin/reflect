import { ArrowRight } from "./ArrowRight";
import { SectionLabel } from "./SectionLabel";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/AdrianRydin",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adrian-r-a31343177/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 px-6 py-28">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel number="04" label="Contact" />

        <div className="mt-12 max-w-lg">
          <h2 className="mb-6 font-serif text-4xl leading-tight text-snow-100 sm:text-5xl">
            Let&apos;s talk about{" "}
            <span className="italic text-magenta-500">something</span>.
          </h2>

          <p className="mb-10 leading-relaxed font-light text-snow-400">
            I&apos;m currently looking for new opportunities. Whether you have a
            question, a project, or just want to say hi — my inbox is open.
          </p>

          <a
            href="mailto:adrian.rydin@pm.me"
            className="group inline-flex items-center gap-3 text-snow-100 transition-colors duration-200 hover:text-magenta-400"
          >
            <span className="font-serif text-xl">adrian.rydin@pm.me</span>

            <ArrowRight
              size={16}
              className="text-magenta-500 transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <div className="mt-12 flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="border-b border-snow-800 pb-px font-sans text-sm tracking-wide text-snow-500 transition-colors duration-200 hover:border-snow-500 hover:text-snow-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

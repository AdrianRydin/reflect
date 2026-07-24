"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrolled;
}

export default function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#120f14]/90 backdrop-blur-md"
          : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-snow-50 transition-colors duration-200 hover:text-magenta-400"
        >
          Adrian
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-snow-300 transition-colors duration-200 hover:text-snow-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="group flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-6 bg-snow-300 transition-all duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-px w-6 bg-snow-300 transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-px w-6 bg-snow-300 transition-all duration-200 ${
              open ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/5 bg-[#120f14] px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-1 text-base text-snow-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

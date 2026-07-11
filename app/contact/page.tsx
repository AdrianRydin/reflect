import { SocialIcon } from "react-social-icons";
import { GradientBlob } from "../components/layout/GradientBlob";
import ContactForm from "../components/pages/ContactForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reflect | Contact",
  description: "Reflect contact page",
};

const socials = [
  {
    href: "https://github.com/AdrianRydin",
    label: "GitHub",
    handle: "@AdrianRydin",
    url: "www.github.com",
  },
  {
    href: "https://www.linkedin.com/in/adrian-r-a31343177/",
    label: "LinkedIn",
    handle: "@AdrianRydin",
    url: "https://se.linkedin.com/",
  },
  {
    href: "mailto:adrian.rydin@pm.me",
    label: "Email",
    handle: "adrian.rydin@pm.me",
    url: "email",
  },
];

function page() {
  return (
    <div className="relative mt-20">
      <GradientBlob />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-8 md:grid-cols-2">
        <div>
          <p className="text-xs text-primary uppercase tracking-[0.2em]">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let's make something worth making
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether it's freelance work, a collaboration, or just a note about
            an essay — I read everything and try to reply within a few days.
          </p>

          <div className="mt-10 space-y-3">
            {socials.map(({ href, label, handle, url }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/60 px-4 py-3 transition-all hover:border-primary/60 hover:bg-card"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary/60 text-primary">
                  <SocialIcon url={url} className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {handle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}

export default page;

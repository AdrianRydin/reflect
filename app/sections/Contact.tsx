"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/Button";

export function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: "Github",
      href: "https://github.com/AdrianRydin",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adrian-r-a31343177/",
    },
  ];

  return (
    <section className="py-24 px-6 bg-neutral-800 text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-white">Let&apos;s Work Together!</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
          I&apos;m always interested in hearing about new projects and
          opportunities. Whether you have a question or just want to say hi,
          feel free to reach out!
        </p>

        <Button
          className="mb-12 bg-transparent text-white border-neutral-600 hover:bg-white hover:text-neutral-950"
          size={"lg"}
          variant={"outline"}
          asChild
        >
          <a href="mailto:adrian.rydin@gmail.com">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
        </Button>
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

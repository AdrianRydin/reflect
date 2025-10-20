// app/page.tsx (server)

import Hero from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default async function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 ">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

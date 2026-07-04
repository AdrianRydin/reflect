import { Metadata } from "next";
import { Hero } from "./components/pages/Hero";
import { Skills } from "./components/pages/Skills";
import { Projects } from "./components/pages/Projects";
import { BlogSection } from "./components/pages/BlogSection";

export const metadata: Metadata = {
  title: "Reflect",
  description: "Adrian's Portfolio Website",
};
export default function Home() {
  return (
    <div>
      <Hero />

      <Skills />

      <Projects />

      <BlogSection />
    </div>
  );
}

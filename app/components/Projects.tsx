import { PROJECTS } from "../data/projects";
import { ProjectRow } from "./ProjectRow";
import { SectionLabel } from "./SectionLabel";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 px-6 py-28">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel number="03" label="Projects" />

        <div className="mt-12 space-y-px">
          {PROJECTS.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

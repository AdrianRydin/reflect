import ProjectsShowcase from "../components/pages/ProjectsShowcase";

function page() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 mt-20">
      <header className="max-w-3xl py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">
          Projects
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Things I've built, shipped, or broken on the way
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A mix of client work, school projects and personal projects.
        </p>
      </header>

      {/* Project showcase */}
      <ProjectsShowcase />
    </div>
  );
}

export default page;

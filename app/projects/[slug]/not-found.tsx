import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Project not found</h1>

      <Link
        href="/projects"
        className="mt-6 inline-block text-primary hover:underline"
      >
        Back to all projects
      </Link>
    </div>
  );
}

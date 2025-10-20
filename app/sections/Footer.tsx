"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-500 py-8 px-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {currentYear} Adrian Rydin. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

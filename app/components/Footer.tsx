export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="font-sans text-xs text-snow-700">
          © 2026 Adrian Rydin — Uddevalla, Sweden
        </p>

        <p className="font-sans text-xs text-snow-700">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}

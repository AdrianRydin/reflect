export function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-sans text-magenta-700 tracking-widest">
        {number}
      </span>
      <span className="w-8 h-px bg-snow-800" />
      <span className="text-xs font-sans text-snow-600 uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}

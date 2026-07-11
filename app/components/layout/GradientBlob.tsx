export function GradientBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-10%] h-160 w-160 translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute right-[-10%] top-[30%] h-120 w-120 rounded-full bg-[var(--primary-glow)/20 blur-[100px]]" />
      <div className="absolute left-[-10%] top-[60%] h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

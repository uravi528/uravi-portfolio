export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-cream px-4 py-1.5 font-body text-sm text-ink-soft">
      {children}
    </span>
  );
}

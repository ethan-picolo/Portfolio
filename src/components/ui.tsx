import type { ReactNode } from "react";

/** Petit label en capitales espacées (ex: "SERVICES", "WORKS"). */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-label text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-ink/70" aria-hidden />
      {children}
    </span>
  );
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-page px-5 sm:px-8">{children}</div>
    </section>
  );
}

/** Logo monogramme « EP ». */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-full bg-ink font-display text-[13px] font-semibold leading-none text-bg ${className}`}
      aria-hidden
    >
      EP
    </span>
  );
}

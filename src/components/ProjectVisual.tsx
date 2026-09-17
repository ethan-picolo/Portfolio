"use client";

import { Shield } from "./icons";

/**
 * Visuels générés en CSS/SVG (placeholders premium) — aucune image externe.
 * TODO : remplacer par de vraies captures/mockups quand elles seront disponibles.
 */
export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "compliancezen") return <ComplianceVisual />;
  if (slug === "vuln-automation") return <CodeVisual />;
  return <SoonVisual />;
}

function ComplianceVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#141416] to-[#0b0b0c] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent/15 text-accent">
            <Shield className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium text-white">ComplianceZen</span>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/70">RGPD</span>
      </div>

      {/* Score de conformité */}
      <div className="mt-6 rounded-xl bg-white/[0.04] p-4">
        <div className="flex items-end justify-between">
          <span className="text-[11px] uppercase tracking-widest text-white/40">Score</span>
          <span className="font-display text-3xl font-semibold text-white">82%</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-accent to-[#4ade80]" />
        </div>
      </div>

      {/* Checklist */}
      <div className="mt-4 space-y-2">
        {[
          { label: "Registre des traitements", done: true },
          { label: "Politique de confidentialité", done: true },
          { label: "Scan de nom de domaine", done: false },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
            <span
              className={`grid h-4 w-4 place-items-center rounded-full text-[9px] ${
                r.done ? "bg-accent text-black" : "border border-white/25 text-transparent"
              }`}
            >
              ✓
            </span>
            <span className="text-[13px] text-white/80">{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeVisual() {
  const lines = [
    { indent: 0, tokens: [["c1", "import"], ["c2", " requests, threading"]] },
    { indent: 0, tokens: [["c1", "from"], ["c2", " cache "], ["c1", "import"], ["c2", " store"]] },
    { indent: 0, tokens: [] },
    { indent: 0, tokens: [["c1", "def"], ["c3", " enrich_cve"], ["c2", "(cve):"]] },
    { indent: 1, tokens: [["c2", "nvd = "], ["c3", "fetch"], ["c2", "(NVD_API, cve)"]] },
    { indent: 1, tokens: [["c2", "epss = "], ["c3", "fetch"], ["c2", "(FIRST_API, cve)"]] },
    { indent: 1, tokens: [["c1", "return"], ["c2", " merge(nvd, epss)"]] },
    { indent: 0, tokens: [] },
    { indent: 0, tokens: [["c4", "# "], ["c4", "~heures → minutes"]] },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0e1a2b] p-5 font-mono text-[13px] leading-6">
      <div className="mb-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <pre className="overflow-hidden">
        {lines.map((ln, i) => (
          <div key={i} style={{ paddingLeft: ln.indent * 16 }}>
            {ln.tokens.length === 0 ? (
              <span>&nbsp;</span>
            ) : (
              ln.tokens.map(([cls, txt], j) => (
                <span key={j} className={tokenClass(cls)}>
                  {txt}
                </span>
              ))
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}

function tokenClass(cls: string) {
  switch (cls) {
    case "c1":
      return "text-[#7aa2ff]";
    case "c3":
      return "text-[#5eead4]";
    case "c4":
      return "text-white/35";
    default:
      return "text-white/85";
  }
}

function SoonVisual() {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-2xl border border-dashed border-ink/15 bg-surface">
      <div className="text-center">
        <div className="mx-auto mb-3 h-10 w-10 animate-pulseDot rounded-full border border-ink/20" />
        <span className="text-sm text-muted">Coming soon</span>
      </div>
    </div>
  );
}

"use client";

import { useLang, t } from "@/lib/i18n";
import { certifications } from "@/content/site";
import { Section, SectionLabel } from "./ui";
import { Reveal } from "./Reveal";

export function Certifications() {
  const { lang } = useLang();

  return (
    <Section id="certifications" className="bg-surface/40">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Reveal>
            <SectionLabel>{t(certifications.label, lang)}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-title mt-6 text-3xl font-semibold text-ink sm:text-4xl">
              {lang === "fr" ? "Certifié & en veille continue" : "Certified & always learning"}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <span className="text-sm text-muted">
            {certifications.items.length} {lang === "fr" ? "certifications" : "certifications"}
          </span>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {certifications.items.map((c, i) => (
          <Reveal key={c.name + i} delay={0.03 * i}>
            <div className="group flex h-full items-start justify-between gap-3 bg-bg p-5 transition-colors hover:bg-surface/60">
              <div className="min-w-0">
                <h3 className="text-[15px] font-medium text-ink">{c.name}</h3>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
              </div>
              <span className="shrink-0 text-xs tabular-nums text-faint">{t(c.date, lang)}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

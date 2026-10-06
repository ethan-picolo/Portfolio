"use client";

import { useLang, t } from "@/lib/i18n";
import { timeline } from "@/content/site";
import { Section, SectionLabel } from "./ui";
import { Reveal } from "./Reveal";

export function Timeline() {
  const { lang } = useLang();

  return (
    <Section id="path">
      <Reveal>
        <SectionLabel>{t(timeline.label, lang)}</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display-title mt-6 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
          {lang === "fr" ? "Expériences & formation" : "Experience & education"}
        </h2>
      </Reveal>

      <ol className="mt-12 space-y-0">
        {timeline.items.map((item, i) => (
          <Reveal key={i} delay={0.05 * i}>
            <li className="group relative grid gap-4 border-t border-line py-8 sm:grid-cols-[220px_1fr] sm:gap-10">
              {/* Colonne gauche : type + période */}
              <div className="flex flex-col gap-2">
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-pill px-3 py-1 text-[11px] uppercase tracking-label ${
                    item.kind === "experience"
                      ? "bg-ink text-bg"
                      : "border border-line bg-bg text-muted"
                  }`}
                >
                  {item.kind === "experience"
                    ? lang === "fr"
                      ? "Expérience"
                      : "Experience"
                    : lang === "fr"
                    ? "Formation"
                    : "Education"}
                </span>
                <span className="text-sm text-muted">{t(item.period, lang)}</span>
              </div>

              {/* Colonne droite : rôle, org, détails */}
              <div>
                <h3 className="text-xl font-medium text-ink sm:text-2xl">{t(item.role, lang)}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                  <span className="font-medium text-ink/80">{item.org}</span>
                  {item.location && (
                    <>
                      <span className="text-line">·</span>
                      <span>{t(item.location, lang)}</span>
                    </>
                  )}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets[lang].map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

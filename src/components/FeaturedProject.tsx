"use client";

import Image from "next/image";
import { useLang, t } from "@/lib/i18n";
import { featured } from "@/content/site";
import { Section, SectionLabel } from "./ui";
import { Reveal } from "./Reveal";

export function FeaturedProject() {
  const { lang } = useLang();
  const [hero, ...rest] = featured.screenshots;

  const stackGroups: [string, string[]][] = [
    ["Frontend", featured.stack.frontend],
    ["Backend", featured.stack.backend],
    [lang === "fr" ? "Outils" : "Tools", featured.stack.tools],
  ];

  return (
    <Section id="projects">
      {/* En-tête */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <Reveal>
            <SectionLabel>{t(featured.label, lang)}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-title mt-6 flex flex-wrap items-center gap-3 text-4xl font-semibold text-ink sm:text-5xl">
              {featured.name}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-normal text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t(featured.status, lang)}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-2xl text-lg text-muted">{t(featured.tagline, lang)}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <span className="chip">{t(featured.tag, lang)}</span>
        </Reveal>
      </div>

      {/* Capture principale */}
      <Reveal delay={0.1}>
        <figure className="glass mt-10 overflow-hidden rounded-card p-2 sm:p-3">
          <Image
            src={hero.src}
            width={hero.w}
            height={hero.h}
            alt={`ComplianceZen — ${t(hero.caption, lang)}`}
            className="h-auto w-full rounded-xl border border-line"
            unoptimized
            priority
          />
        </figure>
      </Reveal>

      {/* Intro + problème/solution + fonctionnalités */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="space-y-6">
          <Reveal>
            <p className="text-xl leading-relaxed text-ink">{t(featured.intro, lang)}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="glass rounded-card p-6">
              <h3 className="text-xs uppercase tracking-label text-faint">
                {lang === "fr" ? "Le problème" : "The problem"}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{t(featured.problem, lang)}</p>
              <h3 className="mt-5 text-xs uppercase tracking-label text-faint">
                {lang === "fr" ? "La solution" : "The solution"}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{t(featured.solution, lang)}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="glass divide-y divide-line overflow-hidden rounded-card">
            {featured.features.map((f, i) => (
              <li key={i} className="flex gap-3 p-4">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-[11px] text-accent">
                  ✓
                </span>
                <div>
                  <h4 className="text-[15px] font-medium text-ink">{t(f.title, lang)}</h4>
                  <p className="mt-0.5 text-sm leading-snug text-muted">{t(f.desc, lang)}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Galerie de captures */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {rest.map((s, i) => (
          <Reveal key={s.src} delay={0.04 * i}>
            <figure className="glass glass-hover overflow-hidden rounded-card p-2">
              <Image
                src={s.src}
                width={s.w}
                height={s.h}
                alt={`ComplianceZen — ${t(s.caption, lang)}`}
                className="h-auto w-full rounded-xl border border-line"
                unoptimized
              />
              <figcaption className="px-2 pb-1 pt-2 text-xs text-muted">{t(s.caption, lang)}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Stack technique */}
      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stackGroups.map(([label, items]) => (
            <div key={label} className="glass rounded-card p-5">
              <h3 className="mb-3 text-xs uppercase tracking-label text-faint">{label}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((x) => (
                  <li key={x} className="chip">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

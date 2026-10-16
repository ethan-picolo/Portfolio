"use client";

import { useLang, t } from "@/lib/i18n";
import { about } from "@/content/site";
import { Section, SectionLabel } from "./ui";
import { Reveal } from "./Reveal";

export function About() {
  const { lang } = useLang();

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionLabel>{t(about.label, lang)}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-title mt-6 text-3xl font-semibold text-ink sm:text-4xl">
              {t(about.title, lang)}
            </h2>
          </Reveal>

          {/* Faits clés */}
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-2.5">
              {about.facts.map((f) => (
                <div key={t(f.k, lang)} className="glass glass-hover rounded-2xl p-5">
                  <dt className="text-xs uppercase tracking-label text-faint">{t(f.k, lang)}</dt>
                  <dd className="mt-1.5 text-[15px] font-medium text-ink">{t(f.v, lang)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          {about.paragraphs[lang].map((p, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p
                className={`leading-relaxed ${
                  i === 0 ? "text-xl text-ink sm:text-2xl" : "text-lg text-muted"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useLang, t } from "@/lib/i18n";
import { skills } from "@/content/site";
import { Section, SectionLabel } from "./ui";
import { Reveal } from "./Reveal";

export function Skills() {
  const { lang } = useLang();

  return (
    <Section id="skills">
      <Reveal>
        <SectionLabel>{t(skills.label, lang)}</SectionLabel>
      </Reveal>

      <div className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, gi) => (
          <Reveal key={t(group.label, lang)} delay={0.05 * gi}>
            <div className="glass glass-hover flex h-full flex-col rounded-card p-6 sm:p-7">
              <h3 className="mb-4 text-xs uppercase tracking-label text-faint">{t(group.label, lang)}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

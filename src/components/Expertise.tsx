"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang, t } from "@/lib/i18n";
import { expertise } from "@/content/site";
import { Section, SectionLabel } from "./ui";
import { Reveal } from "./Reveal";
import { ArrowUpRight, iconMap } from "./icons";

export function Expertise() {
  const { lang } = useLang();
  const [active, setActive] = useState<string | null>(expertise.rows[0]?.key ?? null);

  return (
    <Section id="expertise">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Reveal>
            <SectionLabel>{t(expertise.label, lang)}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-title mt-6 text-3xl font-semibold text-ink sm:text-4xl">
              {t(expertise.title, lang)}
            </h2>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.08}>
        <ul className="overflow-hidden rounded-card border border-line">
          {expertise.rows.map((row, i) => {
            const Icon = iconMap[row.icon as keyof typeof iconMap] ?? iconMap.shield;
            const isActive = active === row.key;
            return (
              <li
                key={row.key}
                onMouseEnter={() => setActive(row.key)}
                onFocus={() => setActive(row.key)}
                className={`group relative border-line transition-colors duration-300 ${
                  i !== 0 ? "border-t" : ""
                } ${isActive ? "bg-surface" : "bg-bg hover:bg-surface/60"}`}
              >
                <div className="flex items-center gap-4 px-5 py-6 sm:px-7">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                      isActive ? "border-ink bg-ink text-bg" : "border-line text-ink"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-medium text-ink sm:text-xl">{t(row.label, lang)}</h3>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 4 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden text-sm text-muted"
                        >
                          {t(row.blurb, lang)}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <span className="hidden text-sm tabular-nums text-faint sm:block">
                    {row.count.toString().padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 text-ink transition-transform duration-300 ${
                      isActive ? "translate-x-0.5 -translate-y-0.5" : "opacity-40"
                    }`}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}

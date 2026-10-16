"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang, t } from "@/lib/i18n";
import { hero, contact } from "@/content/site";
import { ArrowUpRight, ArrowRight } from "./icons";

export function Hero() {
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const lines = hero.headline[lang];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const line = {
    hidden: { opacity: 0, y: reduce ? 0 : "0.6em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      {/* halo décoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(42,91,255,0.10),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(34,181,115,0.10),transparent_62%)] blur-2xl"
      />

      <div className="relative mx-auto w-full max-w-page px-5 sm:px-8">
        {/* Statut disponible */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass mb-8 inline-flex items-center gap-2.5 rounded-pill py-2 pl-3 pr-4 text-[13px] text-ink"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t(hero.status, lang)}
        </motion.div>

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 text-sm uppercase tracking-label text-muted"
        >
          {t(hero.kicker, lang)}
        </motion.p>

        {/* Titre display */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="display-title max-w-[15ch] text-[13vw] font-semibold text-ink sm:text-[9vw] lg:text-[7.4rem]"
        >
          {lines.map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span variants={line} className="block">
                {l}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Intro + CTA */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-muted">
              {t(hero.intro, lang)}
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                {t(hero.ctaPrimary, lang)}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="btn-ghost">
                {t(hero.ctaSecondary, lang)}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Badges technos (façon bannière) */}
          <motion.div variants={container} initial="hidden" animate="show" className="lg:justify-self-end">
            <motion.p variants={item} className="mb-3 text-xs uppercase tracking-label text-faint">
              Stack
            </motion.p>
            <div className="flex flex-wrap gap-2.5 lg:max-w-xs lg:justify-end">
              {hero.badges.map((b) => (
                <motion.span
                  key={b}
                  variants={item}
                  className="rounded-pill bg-ink px-4 py-2 text-sm font-medium text-bg"
                >
                  {b}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee de mots-clés en bas du hero */}
      <Marquee />
    </section>
  );
}

function Marquee() {
  const words = [
    "SecOps",
    "Incident Response",
    "EDR",
    "SIEM / XDR",
    "Phishing Analysis",
    "Active Directory",
    "Vulnerability Management",
    "Python Automation",
    "Network Defense",
  ];
  const row = [...words, ...words];
  return (
    <div className="edge-fade mt-16 select-none border-y border-line py-4">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap will-change-transform motion-reduce:animate-none">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 text-sm uppercase tracking-label text-faint">
            {w}
            <span className="h-1 w-1 rounded-full bg-line" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang, t } from "@/lib/i18n";
import { nav, ui, contactSection } from "@/content/site";
import { ArrowUpRight, Plus } from "./icons";
import { Monogram } from "./ui";

export function Nav() {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu au changement de hash / resize desktop
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto w-full max-w-3xl rounded-[26px] border border-line bg-bg/85 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-[0_16px_40px_-24px_rgba(0,0,0,0.4)]" : "shadow-[0_6px_24px_-18px_rgba(0,0,0,0.3)]"
        }`}
      >
        <div className="flex items-center gap-2 p-1.5 pl-2.5">
          {/* Logo + tagline */}
          <a href="#top" className="group flex min-w-0 items-center gap-2.5" aria-label="Ethan Picolo — accueil">
            <Monogram className="h-9 w-9 shrink-0" />
            <span className="hidden min-w-0 flex-col leading-tight sm:flex">
              <span className="truncate text-[13px] font-medium text-ink">{t(nav.taglineLine1, lang)}</span>
              <span className="truncate text-[13px] text-muted">{t(nav.taglineLine2, lang)}</span>
            </span>
          </a>

          {/* Liens desktop */}
          <div className="ml-auto hidden items-center gap-1 md:flex">
            {nav.links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="rounded-pill px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {t(l.label, lang)}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="btn-primary ml-auto shrink-0 !py-2.5 !pl-4 !pr-3.5 text-[13px] md:ml-1"
          >
            {t(contactSection.callCta, lang)}
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Switch langue */}
          <button
            onClick={toggle}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-bg text-[12px] font-semibold text-ink transition-colors hover:bg-surface"
            aria-label={`Switch language to ${t(ui.langSwitch, lang)}`}
          >
            {t(ui.langSwitch, lang)}
          </button>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-bg text-ink transition-colors hover:bg-surface md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <Plus className={`h-4.5 w-4.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
          </button>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 border-t border-line p-2">
                {nav.links.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-3 py-3 text-[15px] text-ink transition-colors hover:bg-surface"
                  >
                    {t(l.label, lang)}
                    <ArrowUpRight className="h-4 w-4 text-muted" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

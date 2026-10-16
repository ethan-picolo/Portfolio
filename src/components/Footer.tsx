"use client";

import { useLang, t } from "@/lib/i18n";
import { footer, contact } from "@/content/site";
import { Monogram } from "./ui";
import { ArrowUpRight, LinkedIn, Mail } from "./icons";

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto w-full max-w-page px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Monogram className="h-9 w-9" />
              <span className="font-display text-lg font-semibold text-ink">Ethan Picolo</span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{t(footer.tagline, lang)}</p>
          </div>

          <div className="flex gap-3">
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-surface"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-surface"
            >
              <LinkedIn className="h-4 w-4" />
            </a>
            <a
              href="#top"
              aria-label={t(footer.backToTop, lang)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-surface"
            >
              <ArrowUpRight className="h-4.5 w-4.5 -rotate-45" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Ethan Picolo. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}</span>
          <span>{t(footer.builtWith, lang)}</span>
        </div>
      </div>
    </footer>
  );
}

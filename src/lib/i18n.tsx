"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Lang, MaybeLocalized } from "@/content/site";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // Restaure la préférence (langue navigateur ou choix précédent)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "fr" || stored === "en") {
        setLangState(stored);
        return;
      }
      const browser = navigator.language?.toLowerCase() ?? "";
      if (browser.startsWith("en")) setLangState("en");
    } catch {
      /* localStorage indisponible — on garde le défaut */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((p) => (p === "fr" ? "en" : "fr")), []);

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

/** Résout une valeur potentiellement localisée vers une chaîne. */
export function t(value: MaybeLocalized, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

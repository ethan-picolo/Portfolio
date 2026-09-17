"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang, t } from "@/lib/i18n";
import { projects, ui } from "@/content/site";
import { SectionLabel } from "./ui";
import { Reveal } from "./Reveal";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "./icons";
import { ProjectVisual } from "./ProjectVisual";

export function Projects() {
  const { lang } = useLang();
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scroller.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 560);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto w-full max-w-page px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <SectionLabel>{t(projects.label, lang)}</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-title mt-6 text-3xl font-semibold text-ink sm:text-4xl">
                {lang === "fr" ? "Réalisations récentes" : "Recent work"}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex gap-2">
              <button
                onClick={() => scrollBy(-1)}
                disabled={!canPrev}
                aria-label={lang === "fr" ? "Précédent" : "Previous"}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-all hover:bg-surface disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                disabled={!canNext}
                aria-label={lang === "fr" ? "Suivant" : "Next"}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-all hover:bg-surface disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scroller}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-8"
      >
        {/* espace de bord aligné au conteneur */}
        <div className="hidden shrink-0 lg:block lg:w-[max(0px,calc((100vw-1240px)/2))]" aria-hidden />
        {projects.items.map((p) => (
          <ProjectCard key={p.slug} project={p} lang={lang} />
        ))}
        <div className="shrink-0 pr-1 sm:pr-3" aria-hidden />
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  lang,
}: {
  project: (typeof projects.items)[number];
  lang: "fr" | "en";
}) {
  const hasLink = project.links && project.links.length > 0 && project.links[0].href;

  return (
    <article className="group flex w-[86vw] shrink-0 snap-start flex-col overflow-hidden rounded-card border border-line bg-bg sm:w-[560px]">
      {/* Visuel */}
      <div className="aspect-[16/11] w-full p-3 sm:p-4">
        <ProjectVisual slug={project.slug} />
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6 pt-2 sm:p-7 sm:pt-3">
        <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-label text-faint">
          <span>{t(project.tag, lang)}</span>
          <span className="h-1 w-1 rounded-full bg-line" />
          <span>{project.year}</span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-[11px] normal-case tracking-normal text-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${project.soon ? "bg-faint" : "bg-accent"}`} />
            {t(project.status, lang)}
          </span>
        </div>

        <h3 className="display-title text-2xl font-semibold text-ink">{t(project.title, lang)}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{t(project.description, lang)}</p>

        {project.tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech} className="rounded-md border border-line px-2.5 py-1 text-xs text-ink/70">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center gap-4 pt-1">
          {hasLink ? (
            <a
              href={project.links![0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium text-ink"
            >
              {t(ui.viewProject, lang)}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            !project.soon && (
              <span className="inline-flex items-center gap-1.5 text-sm text-faint">
                {lang === "fr" ? "Privé" : "Private"}
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}

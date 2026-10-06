"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang, t } from "@/lib/i18n";
import { contact, contactSection, faq } from "@/content/site";
import { Section, SectionLabel } from "./ui";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Mail, LinkedIn, GitHub, Calendar, Plus } from "./icons";

export function Contact() {
  const { lang } = useLang();

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        {/* Colonne gauche : accroche + liens */}
        <div>
          <Reveal>
            <SectionLabel>{t(contactSection.label, lang)}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-title mt-6 text-4xl font-semibold text-ink sm:text-5xl">
              {t(contactSection.title, lang)}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {t(contactSection.subtitle, lang)}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}`} className="btn-primary">
                {t(contactSection.emailCta, lang)}
                <Mail className="h-4 w-4" />
              </a>
              {contact.calendly && (
                <a
                  href={contact.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  {t(contactSection.callCta, lang)}
                  <Calendar className="h-4 w-4" />
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              <ContactRow
                icon={<Mail className="h-4.5 w-4.5" />}
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactRow
                icon={<LinkedIn className="h-4 w-4" />}
                label="LinkedIn"
                value="in/ethan-picolo"
                href={contact.linkedin}
                external
              />
              {contact.github && (
                <ContactRow
                  icon={<GitHub className="h-4 w-4" />}
                  label="GitHub"
                  value={contact.github.replace(/^https?:\/\//, "")}
                  href={contact.github}
                  external
                />
              )}
              <ContactRow
                icon={<span className="text-[13px]">📍</span>}
                label={lang === "fr" ? "Localisation" : "Location"}
                value={t(contact.location, lang)}
              />
            </ul>
          </Reveal>
        </div>

        {/* Colonne droite : formulaire + FAQ */}
        <div className="flex flex-col gap-10">
          <ContactForm lang={lang} />
          <Faq lang={lang} />
        </div>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-4 py-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink">
        {icon}
      </span>
      <span className="text-xs uppercase tracking-label text-faint">{label}</span>
      <span className="ml-auto flex items-center gap-1.5 text-[15px] text-ink">
        {value}
        {href && <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />}
      </span>
    </div>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group block transition-colors hover:bg-surface/50"
        >
          {content}
        </a>
      </li>
    );
  }
  return <li className="group">{content}</li>;
}

function ContactForm({ lang }: { lang: "fr" | "en" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === "fr" ? `Prise de contact — ${name}` : `Contact request — ${name}`
    );
    const body = encodeURIComponent(
      `${message}\n\n${lang === "fr" ? "De" : "From"}: ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-2xl border border-line bg-bg px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-faint focus:border-ink/30 focus:bg-surface/40";

  return (
    <Reveal>
      <form onSubmit={onSubmit} className="glass rounded-card p-6 sm:p-7">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t(contactSection.formName, lang)}
            className={field}
            aria-label={t(contactSection.formName, lang)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t(contactSection.formEmail, lang)}
            className={field}
            aria-label={t(contactSection.formEmail, lang)}
          />
        </div>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t(contactSection.formMessage, lang)}
          rows={4}
          className={`${field} mt-3 resize-none`}
          aria-label={t(contactSection.formMessage, lang)}
        />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="max-w-[15rem] text-xs text-faint">{t(contactSection.formNote, lang)}</p>
          <button type="submit" className="btn-primary">
            {t(contactSection.formSubmit, lang)}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </Reveal>
  );
}

function Faq({ lang }: { lang: "fr" | "en" }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Reveal delay={0.05}>
      <div>
        <h3 className="mb-4 text-xs uppercase tracking-label text-faint">{t(faq.label, lang)}</h3>
        <ul className="glass overflow-hidden rounded-card">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className={i !== 0 ? "border-t border-line" : ""}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-surface/50"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-[15px] font-medium text-ink">{t(item.q, lang)}</span>
                  <Plus
                    className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted">{t(item.a, lang)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}

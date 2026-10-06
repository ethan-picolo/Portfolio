/**
 * Contenu central du portfolio — bilingue (FR / EN).
 * ────────────────────────────────────────────────────────────
 * Pour modifier le portfolio, il suffit d'éditer ce fichier.
 * Les valeurs marquées « TODO » sont des placeholders à confirmer.
 */

export type Lang = "fr" | "en";

export type Localized = { fr: string; en: string };
/** Une valeur qui peut être identique dans les deux langues ou traduite. */
export type MaybeLocalized = string | Localized;

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  tag: Localized;
  title: MaybeLocalized;
  year: string;
  status: Localized;
  description: Localized;
  tech: string[];
  accent: string; // couleur de fond de la card
  links?: ProjectLink[];
  soon?: boolean;
}

export interface ExpertiseRow {
  key: string;
  label: { fr: string; en: string };
  blurb: { fr: string; en: string };
  count: number;
  icon: string;
}

export interface SkillGroup {
  label: { fr: string; en: string };
  items: string[];
}

export interface TimelineItem {
  kind: "experience" | "education";
  role: Localized;
  org: string;
  period: Localized;
  location?: MaybeLocalized;
  bullets: { fr: string[]; en: string[] };
}

export interface Certification {
  name: string;
  issuer: string;
  date: { fr: string; en: string };
}

export interface FaqItem {
  q: { fr: string; en: string };
  a: { fr: string; en: string };
}

/* ────────────────────────────────────────────────────────────
 * Coordonnées & liens
 * ──────────────────────────────────────────────────────────── */
export const contact = {
  name: "Ethan Picolo",
  email: "ethan.picolo@outlook.com",
  phone: "+33 6 67 83 29 72",
  location: { fr: "Bry-sur-Marne, France", en: "Bry-sur-Marne, France" },
  linkedin: "https://www.linkedin.com/in/ethan-picolo",
  calendly: "https://calendly.com/ethan-picolo/30min",
  // TODO — ajoute ton lien GitHub public quand il sera prêt
  github: "", // ex: "https://github.com/ethan-picolo"
};

/* ────────────────────────────────────────────────────────────
 * Navigation
 * ──────────────────────────────────────────────────────────── */
export const nav = {
  taglineLine1: { fr: "Cybersécurité & Réseaux.", en: "Cybersecurity & Networks." },
  taglineLine2: { fr: "En recherche de stage.", en: "Open to internships." },
  cta: { fr: "Me contacter", en: "Get in touch" },
  links: [
    { id: "about", label: { fr: "À propos", en: "About" } },
    { id: "expertise", label: { fr: "Expertise", en: "Expertise" } },
    { id: "projects", label: { fr: "Projets", en: "Projects" } },
    { id: "path", label: { fr: "Parcours", en: "Path" } },
    { id: "contact", label: { fr: "Contact", en: "Contact" } },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Hero
 * ──────────────────────────────────────────────────────────── */
export const hero = {
  status: { fr: "Disponible — recherche de stage", en: "Available — open to internships" },
  kicker: {
    fr: "Étudiant en Cybersécurité & Réseaux",
    en: "Cybersecurity & Networks student",
  },
  // Le titre est découpé pour l'animation ligne par ligne
  headline: {
    fr: ["Je sécurise", "les réseaux et", "les systèmes."],
    en: ["I secure", "networks and", "systems."],
  },
  intro: {
    fr: "Ethan Picolo — étudiant en Bachelor Cybersécurité & Réseaux à l'EFREI Paris-Panthéon-Assas. Analyse de menaces, réponse à incident et automatisation en Python.",
    en: "Ethan Picolo — Cybersecurity & Networks Bachelor student at EFREI Paris-Panthéon-Assas. Threat analysis, incident response and Python automation.",
  },
  ctaPrimary: { fr: "Travaillons ensemble", en: "Let's work together" },
  ctaSecondary: { fr: "Voir mes projets", en: "See my projects" },
  badges: ["Python", "SQL", "EDR", "SIEM / XDR", "Active Directory", "Linux"],
};

/* ────────────────────────────────────────────────────────────
 * À propos
 * ──────────────────────────────────────────────────────────── */
export const about = {
  label: { fr: "À propos", en: "About" },
  title: {
    fr: "De l'analyse d'alertes à l'automatisation, je transforme la sécurité en réflexe.",
    en: "From alert triage to automation, I turn security into a reflex.",
  },
  paragraphs: {
    fr: [
      "Je suis en deuxième année de Bachelor Cybersécurité & Réseaux à l'EFREI Paris-Panthéon-Assas. J'ai effectué un stage au sein du département Sécurité des Systèmes d'Information (SSI) de SPIE France, à Cergy, intégré à l'équipe SecOps travaillant avec le SOC.",
      "Au quotidien, j'y ai travaillé sur l'analyse de courriels suspects et de malware, le traitement d'alertes EDR et SIEM/XDR, la réponse à incident et la gouvernance des accès. J'y ai conçu et développé de façon autonome un script Python d'automatisation de l'analyse de vulnérabilités qui a réduit un traitement de plusieurs heures à quelques minutes.",
      "Rigueur, curiosité et persévérance guident mon travail — des réflexes développés notamment par plusieurs années d'arts martiaux (Penchak Silat, karaté).",
    ],
    en: [
      "I'm a second-year Cybersecurity & Networks Bachelor student at EFREI Paris-Panthéon-Assas. I completed an internship within SPIE France's information-security department (SSI), in Cergy, embedded in the SecOps team working alongside the SOC.",
      "Day to day, I worked on suspicious-email and malware analysis, EDR and SIEM/XDR alert handling, incident response and access governance. I independently designed and built a Python vulnerability-analysis automation script that cut a multi-hour manual process down to a few minutes.",
      "Rigor, curiosity and perseverance drive my work — reflexes sharpened by several years of martial arts (Penchak Silat, karate).",
    ],
  },
  facts: [
    { k: { fr: "École", en: "School" }, v: "EFREI Paris" },
    { k: { fr: "Basé à", en: "Based in" }, v: "Bry-sur-Marne" },
    { k: { fr: "Focus", en: "Focus" }, v: { fr: "Cyber & Réseaux", en: "Cyber & Networks" } },
    { k: { fr: "Langues", en: "Languages" }, v: { fr: "FR · EN", en: "FR · EN" } },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Expertise (rows type « Services »)
 * ──────────────────────────────────────────────────────────── */
export const expertise = {
  label: { fr: "Expertise", en: "Expertise" },
  title: {
    fr: "Ce sur quoi je travaille",
    en: "What I work on",
  },
  rows: [
    {
      key: "secops",
      label: { fr: "SecOps & Détection", en: "SecOps & Detection" },
      blurb: {
        fr: "Traitement d'alertes EDR, SIEM/XDR et surveillance réseau.",
        en: "EDR, SIEM/XDR alert handling and network monitoring.",
      },
      count: 6,
      icon: "shield",
    },
    {
      key: "ir",
      label: { fr: "Réponse à incident", en: "Incident Response" },
      blurb: {
        fr: "Analyse de phishing et de malware, investigation, remédiation.",
        en: "Phishing and malware analysis, investigation, remediation.",
      },
      count: 5,
      icon: "alert",
    },
    {
      key: "vuln",
      label: { fr: "Gestion des vulnérabilités", en: "Vulnerability Management" },
      blurb: {
        fr: "Enrichissement CVE (NVD, FIRST), priorisation, automatisation.",
        en: "CVE enrichment (NVD, FIRST), prioritization, automation.",
      },
      count: 4,
      icon: "bug",
    },
    {
      key: "infra",
      label: { fr: "Systèmes & Virtualisation", en: "Systems & Virtualization" },
      blurb: {
        fr: "Windows / Linux, Active Directory, VMware, VirtualBox.",
        en: "Windows / Linux, Active Directory, VMware, VirtualBox.",
      },
      count: 6,
      icon: "server",
    },
    {
      key: "dev",
      label: { fr: "Développement & Automatisation", en: "Development & Automation" },
      blurb: {
        fr: "Python, SQL, scripts d'automatisation, apps web.",
        en: "Python, SQL, automation scripts, web apps.",
      },
      count: 6,
      icon: "code",
    },
  ] as ExpertiseRow[],
};

/* ────────────────────────────────────────────────────────────
 * Compétences (chips groupés)
 * ──────────────────────────────────────────────────────────── */
export const skills: { label: { fr: string; en: string }; groups: SkillGroup[] } = {
  label: { fr: "Compétences", en: "Skills" },
  groups: [
    {
      label: { fr: "Cybersécurité", en: "Cybersecurity" },
      items: [
        "EDR",
        "Threat & Vulnerability Management",
        "Incident Response",
        "Phishing Analysis",
        "Active Directory",
        "Network Defense",
        "Information Security",
        "Endpoint Security",
      ],
    },
    {
      label: { fr: "Systèmes & Virtualisation", en: "Systems & Virtualization" },
      items: ["Linux", "Windows / Windows Server", "VMware", "VirtualBox", "Virtualisation"],
    },
    {
      label: { fr: "Développement", en: "Development" },
      items: ["Python", "C", "PHP", "SQL", "MySQL", "HTML"],
    },
    {
      label: { fr: "Data & Marketing", en: "Data & Marketing" },
      items: ["Google Analytics", "Google Ads"],
    },
    {
      label: { fr: "IA & Outils", en: "AI & Tooling" },
      items: ["Claude", "Claude Code", "IBM SkillsBuild", "Git", "Docker"],
    },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Projet phare — ComplianceZen (étude de cas + vraies captures)
 * ──────────────────────────────────────────────────────────── */
export const featured = {
  label: { fr: "Projet phare", en: "Featured project" },
  name: "ComplianceZen",
  tag: { fr: "SaaS · RGPD", en: "SaaS · GDPR" },
  status: { fr: "En développement", en: "In development" },
  tagline: {
    fr: "La conformité RGPD, sans y passer vos soirées.",
    en: "GDPR compliance, without spending your evenings on it.",
  },
  intro: {
    fr: "ComplianceZen est une plateforme SaaS B2B que je conçois et développe de bout en bout pour aider les TPE et PME françaises à se mettre en conformité avec le RGPD — un sujet complexe, chronophage et souvent sans juriste ni DPO en interne.",
    en: "ComplianceZen is a B2B SaaS platform I design and build end-to-end to help French small businesses become GDPR-compliant — a complex, time-consuming topic they usually tackle without a lawyer or DPO.",
  },
  problem: {
    fr: "La mise en conformité RGPD est obligatoire mais obscure : jargon juridique, documents à produire, obligations éparpillées. Les petites structures n'ont ni le temps ni les ressources pour s'y retrouver.",
    en: "GDPR compliance is mandatory yet opaque: legal jargon, mandatory documents, scattered obligations. Small structures have neither the time nor the resources to navigate it.",
  },
  solution: {
    fr: "Centraliser toute la démarche au même endroit : un diagnostic guidé sans jargon, la génération automatique des documents obligatoires, un plan d'action priorisé, un scanner de site, et un suivi du score de conformité en temps réel.",
    en: "Bring the whole process into one place: a jargon-free guided diagnostic, automatic generation of the mandatory documents, a prioritized action plan, a website scanner, and real-time compliance-score tracking.",
  },
  features: [
    {
      title: { fr: "Diagnostic guidé", en: "Guided diagnostic" },
      desc: {
        fr: "Un questionnaire sans jargon qui calcule un score /100 et liste les points à traiter par ordre d'importance.",
        en: "A jargon-free questionnaire that computes a /100 score and lists what to fix, ranked by importance.",
      },
    },
    {
      title: { fr: "Registre des traitements", en: "Processing registry" },
      desc: {
        fr: "Le registre obligatoire (article 30) généré automatiquement et exportable.",
        en: "The mandatory registry (Article 30) generated automatically and exportable.",
      },
    },
    {
      title: { fr: "Politique de confidentialité", en: "Privacy policy" },
      desc: {
        fr: "Un texte conforme CNIL, personnalisé et prêt à publier sur le site.",
        en: "A CNIL-compliant, customized policy ready to publish on the website.",
      },
    },
    {
      title: { fr: "Plan de remédiation", en: "Remediation plan" },
      desc: {
        fr: "Les actions critiques et importantes priorisées, avec suivi de l'avancement.",
        en: "Critical and important actions prioritized, with progress tracking.",
      },
    },
    {
      title: { fr: "Scanner de site", en: "Website scanner" },
      desc: {
        fr: "Analyse RGPD d'un site web en quelques secondes (politique, cookies, HTTPS, trackers…).",
        en: "A few-second GDPR scan of a website (policy, cookies, HTTPS, trackers…).",
      },
    },
    {
      title: { fr: "Abonnement & facturation", en: "Subscription & billing" },
      desc: {
        fr: "Gestion des comptes et de la facturation par abonnement via Stripe.",
        en: "Account management and subscription billing via Stripe.",
      },
    },
  ],
  stack: {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    backend: ["NestJS", "Prisma", "PostgreSQL", "JWT / Passport"],
    tools: ["Stripe", "Docker", "ESLint", "Prettier"],
  },
  screenshots: [
    { key: "landing", caption: { fr: "Page d'accueil", en: "Landing page" } },
    { key: "features", caption: { fr: "Diagnostic guidé", en: "Guided diagnostic" } },
    { key: "dashboard", caption: { fr: "Tableau de bord — score de conformité", en: "Dashboard — compliance score" } },
    { key: "actions", caption: { fr: "Plan de remédiation", en: "Remediation plan" } },
    { key: "scanner", caption: { fr: "Scanner RGPD de site", en: "Website GDPR scanner" } },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Projets (carousel)
 * ──────────────────────────────────────────────────────────── */
export const projects: { label: { fr: string; en: string }; items: Project[] } = {
  label: { fr: "Autres projets", en: "Other projects" },
  items: [
    {
      slug: "vuln-automation",
      tag: { fr: "Python · Sécurité", en: "Python · Security" },
      title: { fr: "Automatisation d'analyse de vulnérabilités", en: "Vulnerability Analysis Automation" },
      year: "2026",
      status: { fr: "Stage SPIE France — SecOps", en: "SPIE France internship — SecOps" },
      description: {
        fr: "Script Python conçu en autonomie pendant mon stage chez SPIE France pour automatiser l'analyse de vulnérabilités : enrichissement d'un référentiel CVE via les API NVD (CVSS) et FIRST (EPSS), multithreading, cache local JSON et export Excel de priorisation. Résultat : un traitement de plusieurs heures ramené à quelques minutes.",
        en: "Python script I built independently during my SPIE France internship to automate vulnerability analysis: enriching a CVE dataset via the NVD (CVSS) and FIRST (EPSS) APIs, multithreading, local JSON caching and a prioritized Excel export. Outcome: a multi-hour process reduced to a few minutes.",
      },
      tech: ["Python", "NVD API (CVSS)", "FIRST API (EPSS)", "Multithreading", "JSON cache", "Excel export"],
      accent: "#12233A",
      links: [],
    },
    {
      slug: "more",
      tag: { fr: "Bientôt", en: "Soon" },
      title: { fr: "Prochain projet", en: "Next project" },
      year: "2026",
      status: { fr: "En préparation", en: "In the works" },
      description: {
        fr: "D'autres projets sont en cours de préparation, autour de la cybersécurité, du réseau et de l'automatisation. Cette section évoluera au fil de mes réalisations.",
        en: "More projects are in the works, around cybersecurity, networking and automation. This section will grow as I ship.",
      },
      tech: [],
      accent: "#F4F4F5",
      soon: true,
    },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Parcours (timeline : expériences + formations)
 * ──────────────────────────────────────────────────────────── */
export const timeline: { label: { fr: string; en: string }; items: TimelineItem[] } = {
  label: { fr: "Parcours", en: "Path" },
  items: [
    {
      kind: "experience",
      role: {
        fr: "Stagiaire Informatique / Analyste Cybersécurité",
        en: "IT Intern / Cybersecurity Analyst",
      },
      org: "SPIE France — SecOps / SSI",
      period: { fr: "Avr. – Juin 2026", en: "Apr – Jun 2026" },
      location: { fr: "Cergy · Sur site", en: "Cergy · On-site" },
      bullets: {
        fr: [
          "Analyse de courriels suspects : en-têtes (SPF/DKIM, routage, spoofing), URL et pièces jointes en environnement isolé, qualification du verdict et mise en quarantaine.",
          "Traitement d'alertes EDR et SIEM/XDR : chaîne d'exécution, vérification des hash, règles de détection, croisement des IOC et recherche de propagation.",
          "Réponse à incident : isolation du poste, documentation des IOC et de la chronologie, transmission à l'équipe de remédiation.",
          "Gouvernance des accès : audit des connexions VPN tierces et des demandes de droits admin, dans le respect du moindre privilège.",
          "Script Python d'automatisation des vulnérabilités : enrichissement CVE via les API NVD (CVSS) et FIRST (EPSS), multithreading, cache JSON et export Excel. Heures → minutes.",
          "Tâches système : installation d'un serveur Windows Server (RAID, IPAM, jonction Active Directory), supervision et sauvegardes.",
          "Outils : SEKOIA.IO (SIEM/XDR), EDR, VirusTotal, Joe Sandbox, URLScan.io, EasyVista, Active Directory.",
        ],
        en: [
          "Suspicious-email analysis: headers (SPF/DKIM, routing, spoofing), URLs and attachments in an isolated environment, verdict qualification and quarantine.",
          "EDR and SIEM/XDR alert handling: execution chains, hash verification, detection rules, IOC correlation and propagation hunting.",
          "Incident response: host isolation, IOC and timeline documentation, handover to the remediation team.",
          "Access governance: auditing third-party VPN connections and local-admin requests, following least privilege.",
          "Python vulnerability-automation script: CVE enrichment via the NVD (CVSS) and FIRST (EPSS) APIs, multithreading, JSON caching and Excel export. Hours → minutes.",
          "Systems tasks: installing a physical Windows Server (RAID, IPAM, Active Directory join), monitoring and backups.",
          "Tooling: SEKOIA.IO (SIEM/XDR), EDR, VirusTotal, Joe Sandbox, URLScan.io, EasyVista, Active Directory.",
        ],
      },
    },
    {
      kind: "education",
      role: {
        fr: "Bachelor Cybersécurité & Réseaux",
        en: "Cybersecurity & Networks Bachelor",
      },
      org: "EFREI Paris-Panthéon-Assas",
      period: { fr: "En cours · 2ᵉ année", en: "Ongoing · 2nd year" },
      bullets: {
        fr: [
          "Réseaux, systèmes, virtualisation et fondamentaux de la cybersécurité.",
          "Projets pratiques : Active Directory, Windows Server, environnements virtualisés.",
        ],
        en: [
          "Networks, systems, virtualization and cybersecurity fundamentals.",
          "Hands-on projects: Active Directory, Windows Server, virtualized environments.",
        ],
      },
    },
    {
      kind: "experience",
      role: {
        fr: "Stagiaire étudiant — Découverte",
        en: "Student Intern — Discovery",
      },
      org: "SPIE ICS",
      period: { fr: "Déc. 2021", en: "Dec 2021" },
      location: { fr: "Malakoff, Île-de-France · Sur site", en: "Malakoff, Île-de-France · On-site" },
      bullets: {
        fr: [
          "Stage d'observation : découverte des métiers du numérique (conseil, ingénierie, intégration réseaux) et du département Cybersécurité.",
        ],
        en: [
          "Observation internship: discovering digital-services roles (consulting, engineering, network integration) and the Cybersecurity department.",
        ],
      },
    },
    {
      kind: "education",
      role: {
        fr: "Baccalauréat général — NSI & Mathématiques",
        en: "French Baccalauréat — Computer Science & Mathematics",
      },
      org: "Lycée Polyvalent Louis Armand",
      period: { fr: "Sept. 2022 – Juil. 2025", en: "Sep 2022 – Jul 2025" },
      bullets: {
        fr: ["Spécialités Numérique et Sciences Informatiques (NSI) et Mathématiques.", "Premiers pas en développement web : HTML, PHP, MySQL."],
        en: ["Specializing in Computer Science (NSI) and Mathematics.", "First steps in web development: HTML, PHP, MySQL."],
      },
    },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Certifications
 * ──────────────────────────────────────────────────────────── */
export const certifications: { label: { fr: string; en: string }; items: Certification[] } = {
  label: { fr: "Certifications", en: "Certifications" },
  items: [
    { name: "Endpoint Security", issuer: "Cisco Networking Academy", date: { fr: "Juil. 2026", en: "Jul 2026" } },
    { name: "Network Defense", issuer: "Cisco Networking Academy", date: { fr: "Juin 2026", en: "Jun 2026" } },
    { name: "Cyber Threat Management", issuer: "Cisco Networking Academy", date: { fr: "Juin 2026", en: "Jun 2026" } },
    { name: "Networking Basics", issuer: "Cisco Networking Academy", date: { fr: "Nov. 2025", en: "Nov 2025" } },
    { name: "Introduction à la Cybersécurité", issuer: "Cisco Networking Academy", date: { fr: "—", en: "—" } },
    { name: "Python Essentials 1", issuer: "Cisco Networking Academy", date: { fr: "—", en: "—" } },
    { name: "Claude Platform 101", issuer: "Anthropic", date: { fr: "Août 2026", en: "Aug 2026" } },
    { name: "Claude Code 101", issuer: "Anthropic", date: { fr: "Juil. 2026", en: "Jul 2026" } },
    { name: "Claude 101", issuer: "Anthropic", date: { fr: "Juil. 2026", en: "Jul 2026" } },
    { name: "AI Fundamentals", issuer: "IBM SkillsBuild", date: { fr: "Juin 2026", en: "Jun 2026" } },
    { name: "Google Ads Search Certification", issuer: "Google", date: { fr: "Nov. 2025", en: "Nov 2025" } },
    { name: "Google Analytics Certification", issuer: "Google", date: { fr: "Nov. 2025", en: "Nov 2025" } },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Contact
 * ──────────────────────────────────────────────────────────── */
export const contactSection = {
  label: { fr: "Contact", en: "Contact" },
  title: {
    fr: "Travaillons ensemble.",
    en: "Let's work together.",
  },
  subtitle: {
    fr: "Je recherche un stage en cybersécurité (min. 6 semaines) entre juin et juillet, ainsi qu'une alternance pour ma 3ᵉ année. Un projet, une question, une opportunité ? Écrivez-moi.",
    en: "I'm looking for a cybersecurity internship (min. 6 weeks) between June and July, as well as an apprenticeship for my 3rd year. A project, a question, an opportunity? Let's talk.",
  },
  emailCta: { fr: "M'envoyer un email", en: "Email me" },
  callCta: { fr: "Réserver un appel", en: "Book a call" },
  formName: { fr: "Nom", en: "Name" },
  formEmail: { fr: "Email", en: "Email" },
  formMessage: { fr: "Message", en: "Message" },
  formSubmit: { fr: "Envoyer", en: "Send" },
  formNote: {
    fr: "Ce formulaire ouvre votre messagerie avec le message pré-rempli.",
    en: "This form opens your mail client with the message pre-filled.",
  },
};

/* ────────────────────────────────────────────────────────────
 * FAQ (accordéon)
 * ──────────────────────────────────────────────────────────── */
export const faq: { label: { fr: string; en: string }; items: FaqItem[] } = {
  label: { fr: "Questions fréquentes", en: "FAQ" },
  items: [
    {
      q: { fr: "Quel type de stage recherches-tu ?", en: "What kind of internship are you looking for?" },
      a: {
        fr: "Un stage en cybersécurité (SecOps, réponse à incident, gestion des vulnérabilités) d'une durée minimale de 6 semaines, entre juin et juillet. Je commence aussi à chercher une alternance en cybersécurité pour ma 3ᵉ année.",
        en: "A cybersecurity internship (SecOps, incident response, vulnerability management), at least 6 weeks long, between June and July. I'm also starting to look for a cybersecurity apprenticeship for my 3rd year.",
      },
    },
    {
      q: { fr: "Quelles sont tes principales compétences ?", en: "What are your core skills?" },
      a: {
        fr: "Côté sécurité : EDR, SIEM/XDR, analyse de phishing/malware, réponse à incident et Active Directory. Côté technique : Python et SQL, notions de PHP et C, et les environnements virtualisés Windows / Linux.",
        en: "On the security side: EDR, SIEM/XDR, phishing/malware analysis, incident response and Active Directory. On the technical side: Python and SQL, some PHP and C, and Windows / Linux virtualized environments.",
      },
    },
    {
      q: { fr: "Es-tu disponible pour des projets ponctuels ?", en: "Are you available for one-off projects?" },
      a: {
        fr: "Oui, je suis ouvert aux projets d'automatisation, de scripting ou de développement web léger. Le plus simple est de me contacter par email pour en discuter.",
        en: "Yes, I'm open to automation, scripting or lightweight web-development projects. The easiest way is to reach out by email to discuss.",
      },
    },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Divers / footer
 * ──────────────────────────────────────────────────────────── */
export const footer = {
  tagline: {
    fr: "Cybersécurité & Réseaux — construisons des systèmes sûrs.",
    en: "Cybersecurity & Networks — let's build secure systems.",
  },
  builtWith: { fr: "Conçu & développé par Ethan Picolo", en: "Designed & built by Ethan Picolo" },
  backToTop: { fr: "Haut de page", en: "Back to top" },
};

export const ui = {
  langSwitch: { fr: "EN", en: "FR" },
  availableFor: { fr: "Disponible", en: "Available" },
  viewProject: { fr: "Voir le projet", en: "View project" },
  scroll: { fr: "Défiler", en: "Scroll" },
};

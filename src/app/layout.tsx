import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://ethan-picolo.vercel.app"; // TODO — remplacer par ton domaine final

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ethan Picolo — Réseaux & Cybersécurité",
    template: "%s · Ethan Picolo",
  },
  description:
    "Ethan Picolo — étudiant en Bachelor Réseaux & Cybersécurité à l'EFREI Paris-Panthéon-Assas. Analyse de menaces, réponse à incident, automatisation Python. En recherche de stage.",
  keywords: [
    "Ethan Picolo",
    "cybersécurité",
    "cybersecurity",
    "réseaux",
    "SecOps",
    "EDR",
    "SIEM",
    "Python",
    "EFREI",
    "stage cybersécurité",
    "alternance cybersécurité",
  ],
  authors: [{ name: "Ethan Picolo" }],
  creator: "Ethan Picolo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: SITE_URL,
    title: "Ethan Picolo — Réseaux & Cybersécurité",
    description:
      "Étudiant en Réseaux & Cybersécurité à l'EFREI. Analyse de menaces, réponse à incident, automatisation Python.",
    siteName: "Ethan Picolo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Picolo — Réseaux & Cybersécurité",
    description:
      "Étudiant en Réseaux & Cybersécurité à l'EFREI. Analyse de menaces, réponse à incident, automatisation Python.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="grain antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

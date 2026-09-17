import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { contact } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ethan Picolo",
  jobTitle: "Étudiant en Réseaux & Cybersécurité",
  email: `mailto:${contact.email}`,
  url: "https://ethan-picolo.vercel.app",
  address: { "@type": "PostalAddress", addressLocality: "Bry-sur-Marne", addressCountry: "FR" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "EFREI Paris-Panthéon-Assas" },
    { "@type": "EducationalOrganization", name: "Lycée Polyvalent Louis Armand" },
  ],
  sameAs: [contact.linkedin].filter(Boolean),
  knowsAbout: [
    "Cybersecurity",
    "SecOps",
    "Incident Response",
    "EDR",
    "SIEM",
    "Python",
    "Active Directory",
    "Network Defense",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

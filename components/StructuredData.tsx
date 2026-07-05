import { education, experience, personalInfo, technologies } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    url: SITE_URL,
    image: `${SITE_URL}/images/perfil2.png`,
    email: `mailto:${personalInfo.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nilópolis",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    sameAs: [personalInfo.social.github, personalInfo.social.linkedin],
    worksFor: {
      "@type": "Organization",
      name: experience[0].company,
    },
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })),
    knowsAbout: Object.values(technologies).flat(),
    description: personalInfo.about[0],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

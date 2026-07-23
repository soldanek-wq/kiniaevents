// NOTE: telephone, email, and address are placeholders — replace with
// the studio's real details before launch. Nothing here is invented
// beyond what's needed to keep the JSON-LD schema valid; no ratings,
// reviews, or client counts are included since none were supplied.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kinga Nagiewicz Events Atelier",
  alternateName: "Events Atelier",
  description:
    "Kinga Nagiewicz Events Atelier organizuje eventy firmowe, gale, bankiety, konferencje, targi i przyjęcia prywatne na terenie całej Polski.",
  url: "https://www.kinganagiewicz.pl",
  telephone: "+48-22-000-00-00",
  email: "kontakt@kinganagiewicz.pl",
  image: "https://www.kinganagiewicz.pl/images/hero.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  founder: {
    "@type": "Person",
    name: "Kinga Nagiewicz",
    jobTitle: "Założycielka",
  },
  sameAs: ["https://www.instagram.com/kinganagiewicz.ateliers"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eventy firmowe" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bankiety i gale" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Targi i wydarzenia branżowe" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Przyjęcia prywatne" } },
  ],
};

/** Injects the site's JSON-LD structured data for search engines. */
export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

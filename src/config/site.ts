/**
 * Single source of truth for all business details.
 * Edit these values to rebrand the site.
 */
export const site = {
  name: "Noir Ink",
  legalName: "Noir Ink Studio",
  tagline: "Custom tattoos & professional piercing. Designed around you.",
  description:
    "Noir Ink is a contemporary tattoo and piercing studio offering custom tattoos, fine line, blackwork, realism and professional piercing.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappNumber: "919876543210",
  whatsappMessage:
    "Hi, I would like to enquire about a tattoo/piercing appointment.",
  email: "studio@noirink.example",
  street: "24 Linden Lane, Bandra West",
  city: "Mumbai",
  region: "Maharashtra",
  postalCode: "400050",
  country: "IN",
  hours: [
    { days: "Tue – Fri", time: "12:00 – 21:00" },
    { days: "Sat – Sun", time: "11:00 – 22:00" },
    { days: "Monday", time: "Closed" },
  ],
  founded: "2014",
  social: {
    instagram: "https://instagram.com",
  },
} as const;

export const fullAddress = `${site.street}, ${site.city}, ${site.region} ${site.postalCode}`;

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Tattoo / piercing enquiry",
)}`;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress,
)}&output=embed`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: site.legalName,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: site.country,
  },
  openingHours: ["Tu-Fr 12:00-21:00", "Sa-Su 11:00-22:00"],
  areaServed: site.city,
};

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

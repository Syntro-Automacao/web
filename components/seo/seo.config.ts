/**
 * Configuração centralizada de SEO para Syntro Automação
 * Mantém todas as configurações em um único lugar
 */

export const SITE_CONFIG = {
  name: "Syntro Automação Industrial",
  url: "https://syntro.com.br",
  description:
    "Especialistas em automação industrial com robôs cartesianos, sistemas SCADA, IoT industrial e CLP. Soluções completas para indústrias em São Paulo e Brasil.",
  keywords: [
    "automação industrial",
    "robô cartesiano",
    "SCADA",
    "IoT industrial",
    "CLP",
    "sistema de automação",
    "indústria 4.0",
    "automação São Paulo",
    "robô industrial",
    "controle de processos",
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/syntro-automacao",
    youtube: "https://www.youtube.com/@syntroautomacao",
    instagram: "https://www.instagram.com/syntroautomacao",
  },
  contact: {
    phone: "+5519996362101",
    email: "contato@syntro.com.br",
    address: "São Paulo, SP - Brasil",
  },
  images: {
    og: "https://syntro.com.br/og-image.webp",
    twitter: "https://syntro.com.br/twitter-image.webp",
    logo: "https://syntro.com.br/logo.svg",
  },
} as const;

/**
 * Configurações de Schema.org
 */
export const SCHEMA_CONFIG = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.images.logo,
    description: SITE_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phone,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    sameAs: Object.values(SITE_CONFIG.social),
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  },
} as const;

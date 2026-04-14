"use client";

import Script from "next/script";

/**
 * Componente limpo para Schema.org JSON-LD
 * Mantém o layout.tsx limpo e organizado
 */
export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Syntro Automação Industrial",
    description:
      "Especialistas em automação industrial com robôs cartesianos, sistemas SCADA, IoT industrial e CLP",
    url: "https://syntro.com.br",
    logo: "https://syntro.com.br/logo.svg",
    image: "https://syntro.com.br/og-image.webp",
    telephone: "+5519996362101",
    email: "contato@syntro.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Exemplo, 123",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01234-567",
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
    serviceType: [
      "Automação Industrial",
      "Sistemas SCADA",
      "Robôs Cartesianos",
      "IoT Industrial",
      "CLP - Controladores Lógicos Programáveis",
      "Projetos Elétricos Industriais",
      "Painéis Elétricos",
      "Supervisórios",
    ],
    areaServed: [
      {
        "@type": "State",
        name: "São Paulo",
      },
      {
        "@type": "State",
        name: "Brasil",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/syntro-automacao",
      "https://www.youtube.com/@syntroautomacao",
      "https://www.instagram.com/syntroautomacao",
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

/**
 * Hook simplificado para SEO - mantém tudo limpo e organizado
 *
 * @example
 * export const metadata = useSEO({
 *   title: "Robôs Cartesianos",
 *   description: "Robôs cartesianos de alta precisão",
 *   keywords: ["robô", "automação"]
 * });
 */
export function createSEO({
  title,
  description,
  keywords = [],
  image = "https://syntro.com.br/og-image.webp",
  noIndex = false,
}: SEOProps): Metadata {
  // Keywords base para automação industrial
  const baseKeywords = [
    "automação industrial",
    "robô cartesiano",
    "SCADA",
    "IoT industrial",
    "CLP",
    "São Paulo",
    "Brasil",
  ];

  return {
    title: `${title} | Syntro Automação`,
    description,
    keywords: [...new Set([...keywords, ...baseKeywords])],
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: "/", // Será sobrescrito pelas páginas com a URL correta
    },
    openGraph: {
      title: `${title} | Syntro Automação`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Syntro Automação`,
      description,
      images: [image],
    },
  };
}

/**
 * SEO para páginas de produtos específicos
 */
export function createProductSEO(
  productName: string,
  description: string,
): Metadata {
  return createSEO({
    title: productName,
    description,
    keywords: [
      productName.toLowerCase(),
      "automação industrial",
      "robô industrial",
    ],
    image: "https://syntro.com.br/products-og.webp",
  });
}

/**
 * SEO para páginas de serviços
 */
export function createServiceSEO(
  serviceName: string,
  description: string,
): Metadata {
  return createSEO({
    title: serviceName,
    description,
    keywords: [serviceName.toLowerCase(), "serviço", "automação", "industrial"],
  });
}

export const useSEO = createSEO;
export const useProductSEO = createProductSEO;
export const useServiceSEO = createServiceSEO;

import type { Metadata } from "next";

interface UseSEOProps {
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
export function useSEO({
  title,
  description,
  keywords = [],
  image = "https://syntro.com.br/og-image.webp",
  noIndex = false,
}: UseSEOProps): Metadata {
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
export function useProductSEO(
  productName: string,
  description: string,
): Metadata {
  return useSEO({
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
export function useServiceSEO(
  serviceName: string,
  description: string,
): Metadata {
  return useSEO({
    title: serviceName,
    description,
    keywords: [serviceName.toLowerCase(), "serviço", "automação", "industrial"],
  });
}

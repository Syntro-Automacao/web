import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/components/seo/seo.config";
// Configuração necessária para static export
export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    host: SITE_CONFIG.siteUrl,
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
  };
}

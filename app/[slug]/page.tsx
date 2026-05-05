import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createSEO } from "@/components/seo/useSEO";
import { RobosCartesianosPage } from "@/components/pages/RobosCartesianosPage";
import {
  getRobosCartesianosCidadeBySlug,
  robosCartesianosCidades,
} from "@/data/robosCartesianosCidades";

type Params = {
  slug: string;
};

const PREFIX = "robos-cartesianos-";

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return robosCartesianosCidades.map((c) => ({
    slug: `${PREFIX}${c.slug}`,
  }));
}

function getCidadeFromRouteSlug(routeSlug: unknown) {
  if (typeof routeSlug !== "string") return null;
  if (!routeSlug.startsWith(PREFIX)) return null;
  const cidadeSlug = routeSlug.slice(PREFIX.length);
  if (!cidadeSlug) return null;
  return getRobosCartesianosCidadeBySlug(cidadeSlug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cidadeData = getCidadeFromRouteSlug(slug);
  if (!cidadeData) return {};

  return createSEO({
    title: cidadeData.seoTitle,
    description: cidadeData.seoDescription,
    keywords: [
      "robô cartesiano",
      "automação industrial",
      "eixos lineares",
      `robôs cartesianos em ${cidadeData.cidade}`,
      `automação em ${cidadeData.cidade}`,
    ],
  });
}

export default async function LocalSeoSlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cidadeData = getCidadeFromRouteSlug(slug);
  if (!cidadeData) notFound();

  return <RobosCartesianosPage cidade={cidadeData} />;
}

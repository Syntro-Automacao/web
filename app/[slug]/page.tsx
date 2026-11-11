import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { createSEO } from "@/components/seo/useSEO";
import { RobosCartesianosPage } from "@/components/pages/RobosCartesianosPage";
import { RoboArmPage } from "@/components/pages/RoboArmPage";
import { SoftwaresIndustriaisPage } from "@/components/pages/SoftwaresIndustriaisPage";
import {
  getRobosCartesianosCidadeBySlug,
  robosCartesianosCidades,
  type RobosCartesianosCidade,
} from "@/data/robosCartesianosCidades";
import {
  getRoboArmCidadeBySlug,
  roboArmCidades,
  type RoboArmCidade,
} from "@/data/roboArmCidades";
import {
  getSoftwaresIndustriaisCidadeBySlug,
  softwaresIndustriaisCidades,
  type SoftwaresIndustriaisCidade,
} from "@/data/softwaresIndustriaisCidades";

type Params = {
  slug: string;
};

type CidadeLocal =
  | RobosCartesianosCidade
  | RoboArmCidade
  | SoftwaresIndustriaisCidade;

type LocalSection = {
  prefix: string;
  cidades: CidadeLocal[];
  getBySlug: (slug: string) => CidadeLocal | null;
  keywords: (cidade: CidadeLocal) => string[];
  render: (cidade: CidadeLocal) => ReactNode;
};

const LOCAL_SECTIONS: LocalSection[] = [
  {
    prefix: "robos-cartesianos-",
    cidades: robosCartesianosCidades,
    getBySlug: getRobosCartesianosCidadeBySlug,
    keywords: (cidade) => [
      "robô cartesiano",
      "automação industrial",
      "eixos lineares",
      `robôs cartesianos em ${cidade.cidade}`,
      `automação em ${cidade.cidade}`,
    ],
    render: (cidade) => (
      <RobosCartesianosPage cidade={cidade as RobosCartesianosCidade} />
    ),
  },
  {
    prefix: "robo-arm-",
    cidades: roboArmCidades,
    getBySlug: getRoboArmCidadeBySlug,
    keywords: (cidade) => [
      "robô industrial",
      "robô arm",
      "manipulador articulado",
      "automação industrial",
      `robô industrial em ${cidade.cidade}`,
      `automação em ${cidade.cidade}`,
    ],
    render: (cidade) => <RoboArmPage cidade={cidade as RoboArmCidade} />,
  },
  {
    prefix: "softwares-industriais-",
    cidades: softwaresIndustriaisCidades,
    getBySlug: getSoftwaresIndustriaisCidadeBySlug,
    keywords: (cidade) => [
      "software industrial",
      "IoT industrial",
      "dashboards industriais",
      "supervisório industrial",
      `software industrial em ${cidade.cidade}`,
      `automação em ${cidade.cidade}`,
    ],
    render: (cidade) => (
      <SoftwaresIndustriaisPage cidade={cidade as SoftwaresIndustriaisCidade} />
    ),
  },
];

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return LOCAL_SECTIONS.flatMap((section) =>
    section.cidades.map((cidade) => ({
      slug: `${section.prefix}${cidade.slug}`,
    })),
  );
}

function resolveCidade(routeSlug: string) {
  for (const section of LOCAL_SECTIONS) {
    if (!routeSlug.startsWith(section.prefix)) continue;
    const cidadeSlug = routeSlug.slice(section.prefix.length);
    if (!cidadeSlug) return null;
    const cidade = section.getBySlug(cidadeSlug);
    if (!cidade) return null;
    return { section, cidade };
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveCidade(slug);
  if (!resolved) return {};

  const { section, cidade } = resolved;
  return createSEO({
    title: cidade.seoTitle,
    description: cidade.seoDescription,
    keywords: section.keywords(cidade),
  });
}

export default async function LocalSeoSlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const resolved = resolveCidade(slug);
  if (!resolved) notFound();

  return resolved.section.render(resolved.cidade);
}

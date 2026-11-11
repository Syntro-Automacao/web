import type { Metadata } from "next";
import { createSEO } from "@/components/seo/useSEO";
import { SoftwareTwinHero } from "@/components/sections/Software/SoftwareTwinHero";
import { SoftwaresIndustriaisContent } from "@/components/pages/SoftwaresIndustriaisContent";

export const metadata: Metadata = createSEO({
  title: "Software Industrial com IoT | Dashboards e Monitoramento",
  description:
    "Desenvolvimento de software industrial com IoT, dashboards, coleta de dados em tempo real, integração com CLPs, sensores e monitoramento remoto de máquinas.",
  keywords: [
    "software industrial com iot",
    "iot industrial",
    "dashboards industriais",
    "coleta de dados em tempo real",
    "integração com clps",
    "supervisórios industriais",
    "rastreabilidade",
    "alertas automáticos",
    "indicadores de produção",
    "manutenção preventiva",
  ],
});

export default function SoftwaresIndustriaisIndexPage() {
  return (
    <main className="bg-background">
      <SoftwareTwinHero />

      <SoftwaresIndustriaisContent />
    </main>
  );
}

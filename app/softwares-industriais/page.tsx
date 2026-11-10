import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { createSEO } from "@/components/seo/useSEO";
import { TrackedWhatsAppLink } from "@/components/analytics/ClientTrackedLinks";
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
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-blue-700 via-blue-600 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100/90">
              Soluções em software
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Software Industrial com IoT para Controle e Monitoramento
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-blue-100 leading-relaxed">
              Desenvolvemos software industrial com IoT, dashboards,
              monitoramento remoto, coleta de dados em tempo real e integração
              com CLPs, sensores e máquinas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <TrackedWhatsAppLink
                ctaName="orcamento_software_whatsapp"
                location="softwares_hero"
                href="https://wa.me/+5519996362101?text=Olá! Gostaria de desenvolver um software industrial com IoT para minha operação."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar análise
              </TrackedWhatsAppLink>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Falar com a equipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SoftwaresIndustriaisContent />
    </main>
  );
}

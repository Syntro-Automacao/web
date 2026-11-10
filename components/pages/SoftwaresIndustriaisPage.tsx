import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TrackedWhatsAppLink } from "@/components/analytics/ClientTrackedLinks";
import { SoftwaresIndustriaisContent } from "@/components/pages/SoftwaresIndustriaisContent";
import type { SoftwaresIndustriaisCidade } from "@/data/softwaresIndustriaisCidades";

type Props = {
  cidade: SoftwaresIndustriaisCidade;
};

export function SoftwaresIndustriaisPage({ cidade }: Props) {
  const whatsappHref = `https://wa.me/+5519996362101?text=${encodeURIComponent(
    `Olá! Gostaria de um software industrial com IoT em ${cidade.cidade}.`,
  )}`;

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-blue-700 via-blue-600 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100/90">
                Soluções locais
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {cidade.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg md:text-xl text-blue-100 leading-relaxed">
                {cidade.intro}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <TrackedWhatsAppLink
                  ctaName="orcamento_software_local_whatsapp"
                  location={`softwares_${cidade.slug}_hero`}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {cidade.cta}
                </TrackedWhatsAppLink>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Falar com a equipe
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Software industrial em {cidade.cidade} e região
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {cidade.textoRegional}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              Próximo passo
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Conte sua operação e receba uma recomendação de arquitetura,
              integrações e indicadores para o seu cenário.
            </p>
            <Link
              href="/contato"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 transition-opacity"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              {cidade.cta}
            </Link>
          </div>
        </div>
      </section>

      <SoftwaresIndustriaisContent />
    </main>
  );
}

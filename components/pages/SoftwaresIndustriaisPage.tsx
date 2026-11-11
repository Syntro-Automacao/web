import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SoftwareTwinHero } from "@/components/sections/Software/SoftwareTwinHero";
import { SoftwaresIndustriaisContent } from "@/components/pages/SoftwaresIndustriaisContent";
import type { SoftwaresIndustriaisCidade } from "@/data/softwaresIndustriaisCidades";

type Props = {
  cidade: SoftwaresIndustriaisCidade;
};

export function SoftwaresIndustriaisPage({ cidade }: Props) {
  return (
    <main className="bg-background">
      <SoftwareTwinHero
        titlePrefix={`Sua linha de produção em ${cidade.cidade},`}
        description={cidade.intro}
        ctaLabel={cidade.cta}
        ctaName="orcamento_software_local_form"
        location={`softwares_${cidade.slug}_hero`}
      />

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

import type { Metadata } from "next";
import Link from "next/link";
import { Grip, PackageCheck, ScanSearch, MessageCircle } from "lucide-react";
import { createSEO } from "@/components/seo/useSEO";
import { TrackedWhatsAppLink } from "@/components/analytics/ClientTrackedLinks";
import { FerramentalIndex } from "@/components/sections/Ferramental/FerramentalIndex";

export const metadata: Metadata = createSEO({
  title:
    "Ferramental para Robôs Industriais | Garras, Ventosas e EOAT | Syntro",
  description:
    "Desenvolvimento de ferramental para robôs industriais, garras, ventosas, manipuladores e ferramentas especiais para automação industrial.",
  keywords: [
    "ferramental para robôs industriais",
    "garras para robôs",
    "ventosas industriais",
    "eoat",
    "ferramentas para robôs cartesianos",
    "ferramentas para robôs de 6 eixos",
    "sistemas de pega",
    "pick and place",
    "paletização",
    "manipulação de peças",
  ],
});

const destaques = [
  {
    title: "Garras, ventosas e EOAT",
    description:
      "Desenvolvemos ferramentas de pega conforme o produto, o ciclo da máquina e o nível de precisão exigido na aplicação.",
    icon: Grip,
  },
  {
    title: "Pick and place, paletização e abastecimento",
    description:
      "Projetos para alimentação e retirada de máquinas, manipulação de peças e operações repetitivas com estabilidade e segurança.",
    icon: PackageCheck,
  },
  {
    title: "Ferramental com visão e dispositivos especiais",
    description:
      "Integração com sensores, sistemas de visão e dispositivos sob medida para células robotizadas com mais inteligência de processo.",
    icon: ScanSearch,
  },
];

export default function FerramentalParaRobosPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
              Ferramental e EOAT
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ferramental para Robôs Industriais
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-200 leading-relaxed">
              Desenvolvemos garras, ventosas, manipuladores e ferramentas
              especiais para robôs cartesianos, robôs de 6 eixos e células de
              automação industrial.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <TrackedWhatsAppLink
                ctaName="cta_ferramental_whatsapp"
                location="ferramental_hero"
                href="https://wa.me/+5519996362101?text=Olá! Preciso de um ferramental para robô industrial e gostaria de uma avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar avaliação
              </TrackedWhatsAppLink>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Falar com a equipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {destaques.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-6 md:py-10">
        <FerramentalIndex />
      </section>

      <section className="py-16 md:py-20 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Ferramental sob medida para robôs e células automatizadas
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                O ferramental certo impacta diretamente ciclo, segurança,
                repetibilidade e qualidade da aplicação. Por isso, avaliamos
                peso, geometria, acabamento da peça, tipo de movimento e
                necessidade de sensores antes de definir a melhor solução.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Também podemos integrar o projeto com{" "}
                <Link
                  href="/robos-cartesianos"
                  className="font-medium text-primary hover:opacity-80"
                >
                  robôs cartesianos
                </Link>
                ,{" "}
                <Link
                  href="/robo-arm"
                  className="font-medium text-primary hover:opacity-80"
                >
                  robôs de 6 eixos
                </Link>{" "}
                e{" "}
                <Link
                  href="/equipamentos-especiais"
                  className="font-medium text-primary hover:opacity-80"
                >
                  equipamentos especiais
                </Link>
                , formando uma solução completa de automação.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                Precisa de uma garra, ventosa ou ferramenta especial?
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Desenvolvemos ferramental sob medida para robôs industriais e
                células automatizadas.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <TrackedWhatsAppLink
                  ctaName="cta_ferramental_orcamento"
                  location="ferramental_bottom_cta"
                  href="https://wa.me/+5519996362101?text=Olá! Quero solicitar um orçamento de ferramental para robô industrial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar orçamento
                </TrackedWhatsAppLink>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Ir para contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

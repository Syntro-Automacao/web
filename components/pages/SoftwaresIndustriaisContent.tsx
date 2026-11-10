import Link from "next/link";
import { BarChart3, BellRing, DatabaseZap, MessageCircle } from "lucide-react";
import { TrackedWhatsAppLink } from "@/components/analytics/ClientTrackedLinks";
import { SoftwareIndex } from "@/components/sections/Software/SoftwareIndex";
import Grid from "@/components/sections/Grid/Grid";
import { Iot } from "@/components/sections/Iot/Iot";

const diferenciais = [
  {
    title: "Coleta de dados em tempo real",
    description:
      "Integramos CLPs, sensores, máquinas e bancos de dados para transformar o chão de fábrica em informação confiável para operação e gestão.",
    icon: DatabaseZap,
  },
  {
    title: "Dashboards e supervisórios industriais",
    description:
      "Criamos telas operacionais, supervisórios, históricos, rastreabilidade e indicadores para acompanhar desempenho, consumo e qualidade.",
    icon: BarChart3,
  },
  {
    title: "Alertas e manutenção preventiva",
    description:
      "Configuramos eventos, notificações e regras de manutenção preventiva para reduzir paradas e aumentar previsibilidade da produção.",
    icon: BellRing,
  },
];

export function SoftwaresIndustriaisContent() {
  return (
    <>
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {diferenciais.map((item) => {
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
        <Iot />
        <Grid />
      </section>
      <section className="py-6 md:py-10">
        <SoftwareIndex />
      </section>

      <section className="py-16 md:py-20 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Integração industrial para rastreabilidade e tomada de decisão
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Nossos projetos combinam software, conectividade e visualização
                para acompanhar indicadores de produção, consumo, qualidade,
                paradas e setup. Isso permite padronizar a operação, registrar
                dados e acelerar a resposta da equipe técnica.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Também podemos integrar o software a{" "}
                <Link
                  href="/equipamentos-especiais"
                  className="font-medium text-primary hover:opacity-80"
                >
                  equipamentos especiais
                </Link>{" "}
                e a células com{" "}
                <Link
                  href="/robos-cartesianos"
                  className="font-medium text-primary hover:opacity-80"
                >
                  robôs cartesianos
                </Link>
                , criando uma arquitetura única entre máquina, supervisão e
                gestão.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                Precisa monitorar máquinas e processos em tempo real?
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Solicite uma análise para desenvolver um software industrial com
                IoT para sua operação.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <TrackedWhatsAppLink
                  ctaName="cta_orcamento_software"
                  location="softwares_bottom_cta"
                  href="https://wa.me/+5519996362101?text=Olá! Quero solicitar uma análise de software industrial com IoT."
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
    </>
  );
}

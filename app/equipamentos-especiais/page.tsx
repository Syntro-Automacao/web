import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Factory, Settings2, MessageCircle } from "lucide-react";
import { createSEO } from "@/components/seo/useSEO";
import { TrackedWhatsAppLink } from "@/components/analytics/GoogleAnalytics";
import { RoboHdIndex } from "@/components/sections/RoboHd/RoboHdIndex";

export const metadata: Metadata = createSEO({
  title: "Equipamentos Especiais para Automação Industrial | Syntro",
  description:
    "Projeto e desenvolvimento de equipamentos especiais, dispositivos automatizados e soluções industriais sob medida com integração mecânica, elétrica e software.",
  keywords: [
    "equipamentos especiais para automação industrial",
    "máquinas especiais",
    "dispositivos industriais sob medida",
    "bancadas automatizadas",
    "células automatizadas",
    "sistemas de teste",
    "sistemas de inspeção",
    "alimentadores de peças",
    "integração mecânica elétrica e software",
  ],
});

const aplicacoes = [
  {
    title: "Máquinas especiais e dispositivos sob medida",
    description:
      "Projetamos soluções específicas para montagem, movimentação, inspeção, teste, alimentação e retirada de peças em processos industriais.",
    icon: Factory,
  },
  {
    title: "Integração mecânica, elétrica e software",
    description:
      "Cada equipamento pode receber CLP, IHM, sensores, atuadores, servos e lógica supervisória para operar com segurança e repetibilidade.",
    icon: Cpu,
  },
  {
    title: "Células automatizadas completas",
    description:
      "Desenvolvemos bancadas, sistemas de teste e equipamentos com inteligência para aumentar produtividade e reduzir intervenção manual.",
    icon: Settings2,
  },
];

export default function EquipamentosEspeciaisPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100/80">
              Soluções sob medida
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Equipamentos Especiais para Automação Industrial
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-200 leading-relaxed">
              Desenvolvemos equipamentos especiais, dispositivos automatizados e
              células industriais sob medida para aplicações que exigem
              robustez, integração e alta confiabilidade operacional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <TrackedWhatsAppLink
                ctaName="cta_equipamentos_whatsapp"
                location="equipamentos_hero"
                href="https://wa.me/+5519996362101?text=Olá! Tenho um processo que precisa de um equipamento especial para automação industrial."
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
                Falar com a engenharia
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {aplicacoes.map((item) => {
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
        <RoboHdIndex />
      </section>

      <section className="py-16 md:py-20 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Equipamentos especiais com foco no processo real da sua fábrica
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                A Syntro desenvolve máquinas especiais, alimentadores,
                dispositivos, bancadas automatizadas, sistemas de teste e
                inspeção a partir da sua necessidade real de processo. O
                objetivo é entregar um equipamento consistente, seguro e simples
                de operar.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Quando necessário, combinamos esses projetos com{" "}
                <Link
                  href="/softwares-industriais"
                  className="font-medium text-primary hover:opacity-80"
                >
                  software industrial
                </Link>{" "}
                e{" "}
                <Link
                  href="/ferramental-para-robos"
                  className="font-medium text-primary hover:opacity-80"
                >
                  ferramental para robôs
                </Link>
                , criando uma solução completa de automação sob medida.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                Tem um processo que precisa ser automatizado?
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                A Syntro pode desenvolver um equipamento especial sob medida
                para sua aplicação.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <TrackedWhatsAppLink
                  ctaName="cta_equipamentos_orcamento"
                  location="equipamentos_bottom_cta"
                  href="https://wa.me/+5519996362101?text=Olá! Quero solicitar um orçamento para um equipamento especial."
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

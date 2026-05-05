import Link from "next/link";
import { CartesianoIndex } from "@/components/sections/Cartesiano/CartesianoIndex";
import type { RobosCartesianosCidade } from "@/data/robosCartesianosCidades";
import { Reveal } from "@/components/motion/Reveal";
import { MessageCircle } from "lucide-react";

type Props = {
  cidade?: RobosCartesianosCidade | null;
};

export function RobosCartesianosPage({ cidade }: Props) {
  const isLocal = Boolean(cidade);

  return (
    <main className="relative">
      <div className="pt-24 bg-(--bg-cinza)" />

      {isLocal ? (
        <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
            <Reveal>
              <p className="text-sm font-medium text-primary">Soluções locais</p>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                {cidade?.h1}
              </h1>
              <p className="mt-4 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                {cidade?.intro}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm">
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                    Atendimento na região de {cidade?.cidade}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {cidade?.textoRegional}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">
                    Próximo passo
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Conte sua aplicação e receba uma recomendação técnica de
                    arquitetura, eixos e integração.
                  </p>
                  <Link
                    href="/contato"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 transition-opacity"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {cidade?.cta}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <CartesianoIndex />
    </main>
  );
}


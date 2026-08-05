import { Suspense } from "react";
import type { Metadata } from "next";
import { createSEO } from "@/components/seo/useSEO";
import { ObrigadoClient } from "./ObrigadoClient";

export const metadata: Metadata = createSEO({
  title: "Obrigado | Syntro Automação",
  description:
    "Recebemos sua mensagem. Em breve a equipe da Syntro Automação Industrial entrará em contato.",
  keywords: ["contato", "obrigado", "syntro", "automação industrial"],
});

export default function ObrigadoPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] bg-background">
          <section className="py-16 sm:py-20 text-center">
            <p className="text-sm font-medium text-primary/90">Mensagem enviada</p>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Obrigado pelo contato
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
              Recebemos sua solicitação e retornaremos o mais rápido possível.
            </p>
          </section>
        </main>
      }
    >
      <ObrigadoClient />
    </Suspense>
  );
}

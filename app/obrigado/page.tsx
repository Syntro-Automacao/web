import type { Metadata } from "next";
import Link from "next/link";
import { createSEO } from "@/components/seo/useSEO";
import { Button } from "@/components/ui/button";
import { RoboArmParallax } from "@/components/sections/RoboArm/RoboArmParalax";
import { MessageCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = createSEO({
  title: "Obrigado | Syntro Automação",
  description:
    "Recebemos sua mensagem. Em breve a equipe da Syntro Automação Industrial entrará em contato.",
  keywords: ["contato", "obrigado", "syntro", "automação industrial"],
});

export default function ObrigadoPage() {
  return (
    <main className="min-h-[70vh] bg-background">
      <RoboArmParallax />
      <section className="relative overflow-hidden border-b border-border flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-sm font-medium text-primary/90">
            Mensagem enviada
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Obrigado pelo contato
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Recebemos sua solicitação e retornaremos o mais rápido possível. Se
            preferir, fale com a equipe diretamente pelo WhatsApp.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button asChild className="rounded-xl">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para a Home
              </Link>
            </Button>

            <Button asChild variant="secondary" className="rounded-xl">
              <a
                href="https://wa.me/+5519996362101?text=Olá! Acabei de enviar um contato pelo site e gostaria de falar com um especialista."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

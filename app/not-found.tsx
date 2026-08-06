import { Metadata } from "next";
import { createSEO } from "@/components/seo/useSEO";
import { SobreIndex } from "@/components/sections/Sobre/SobreIndex";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";
import { TrackedWhatsAppLink } from "@/components/analytics/ClientTrackedLinks";

// Metadata para a página 404
export const metadata: Metadata = createSEO({
  title: "Página Não Encontrada",
  description:
    "A página que você está procurando não foi encontrada. Volte para a página inicial ou explore nossas soluções de automação industrial.",
  keywords: [
    "página não encontrada",
    "404",
    "erro",
    "syntro",
    "automação industrial",
  ],
  noIndex: true, // Impede indexação do Google
});

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section com mensagem 404 */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Página Não Encontrada
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              A página que você está procurando não existe ou foi movida. Mas
              não se preocupe, você pode voltar para a página inicial ou
              explorar nossas soluções de automação industrial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Voltar para Home
              </Link>
              <TrackedWhatsAppLink
                ctaName="whatsapp_contato"
                location="404_hero"
                href="https://wa.me/+5519996362101?text=Olá! Gostaria de saber mais sobre os serviços da Syntro Automação."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Falar no WhatsApp
              </TrackedWhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seção Sobre para manter o usuário engajado */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Conheça a Syntro Automação
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Enquanto você está aqui, que tal conhecer mais sobre nossa
                empresa e como podemos transformar sua indústria com soluções de
                automação de ponta?
              </p>
            </div>
          </Reveal>

          {/* Componente SobreIndex para mostrar informações da empresa */}
          <SobreIndex />
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Pronto para automatizar seu processo?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato com nossos especialistas e descubra como podemos
              revolucionar sua linha de produção com automação industrial
              inteligente.
            </p>
            <TrackedWhatsAppLink
              ctaName="whatsapp_contato"
              location="404_cta"
              href="https://wa.me/+5519996362101?text=Olá! Gostaria de saber mais sobre os serviços da Syntro Automação."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              Falar no WhatsApp
            </TrackedWhatsAppLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import { createSEO } from "@/components/seo/useSEO";
import { SoftwareIndex } from "@/components/sections/Software/SoftwareIndex";
import { TrackedCtaLink } from "@/components/analytics/GoogleAnalytics";

export const metadata: Metadata = createSEO({
  title: "Softwares Industriais | Syntro Automação",
  description:
    "Desenvolvimento de softwares industriais personalizados para automação, controle de processos, monitoramento e gestão industrial. Soluções em SCADA, IoT e sistemas embarcados.",
  keywords: [
    "software industrial",
    "desenvolvimento software automação",
    "scada software",
    "sistema supervisório",
    "iot industrial",
    "controle de processos",
    "monitoramento industrial",
    "software embarcado",
    "hmi industrial",
    "sistemas scada",
  ],
});

export default function SoftwaresIndustriaisPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Softwares Industriais
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Soluções em software para automação industrial, controle de
              processos e monitoramento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TrackedCtaLink
                ctaName="consultoria_whatsapp"
                location="softwares_hero"
                href="https://wa.me/+5519996362101?text=Olá! Gostaria de saber mais sobre desenvolvimento de softwares industriais para minha empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.2-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.47-4.45-9.91-9.91-9.91zM12.04 20.32c-1.48 0-2.9-.4-4.18-1.15l-.3-.18-3.12.82.83-3.04-.19-.3c-1.4-1.62-2.14-3.57-2.14-5.67 0-5.47 4.45-9.91 9.91-9.91 2.65 0 5.14 1.03 7.01 2.88 1.87 1.87 2.9 4.36 2.9 7.01 0 5.47-4.45 9.91-9.91 9.91z" />
                </svg>
                Solicitar Consultoria
              </TrackedCtaLink>
              <TrackedCtaLink
                ctaName="ligar_telefone"
                location="softwares_hero"
                href="tel:+5519996362101"
                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors text-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Ligar Agora
              </TrackedCtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SoftwareIndex />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para automatizar seus processos?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e descubra como nossos softwares industriais podem
            transformar sua operação
          </p>
          <TrackedCtaLink
            ctaName="visita_tecnica_whatsapp"
            location="softwares_cta"
            href="https://wa.me/+5519996362101?text=Olá! Gostaria de agendar uma visita técnica para avaliar minha necessidade de software industrial e automação."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Agendar Visita Técnica
          </TrackedCtaLink>
        </div>
      </section>
    </div>
  );
}

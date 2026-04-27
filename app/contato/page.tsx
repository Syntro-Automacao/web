import { createSEO } from "@/components/seo/useSEO";
import { Reveal } from "@/components/motion/Reveal";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import { TrackedCtaLink } from "@/components/analytics/GoogleAnalytics";
import ContactFormEmailJS from "@/components/forms/ContactFormEmailJS";

export const metadata = createSEO({
  title: "Contato | Syntro Automação Industrial",
  description:
    "Entre em contato com a Syntro Automação Industrial. Especialistas em robótica, automação industrial, SCADA e IoT. Solicite um orçamento.",
  keywords: [
    "contato syntro",
    "automação industrial contato",
    "robótica industrial orçamento",
    "scada consultoria",
    "iot industrial contato",
    "são paulo automação",
  ],
});

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl md:text-2xl ext-blue-100">
                Transforme sua indústria com as soluções de automação da Syntro
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <Reveal>
        <ContactFormEmailJS />
      </Reveal>
      {/* Informações de Contato */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* WhatsApp */}
              <Reveal>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-4">Resposta rápida e direta</p>
                  <TrackedCtaLink
                    ctaName="whatsapp_contato"
                    location="contato_cards"
                    href="https://wa.me/+5519996362101?text=Olá! Gostaria de saber mais sobre os serviços da Syntro Automação."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Iniciar Conversa
                  </TrackedCtaLink>
                </div>
              </Reveal>

              {/* Telefone */}
              <Reveal>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Telefone
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Segunda a Sexta, 8h às 18h
                  </p>
                  <TrackedCtaLink
                    ctaName="telefone_contato"
                    location="contato_cards"
                    href="tel:+5519996362101"
                    className="text-blue-600 font-medium hover:text-blue-700 text-lg"
                  >
                    (19) 99636-2101
                  </TrackedCtaLink>
                </div>
              </Reveal>

              {/* Email */}
              <Reveal>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Envie suas dúvidas detalhadas
                  </p>
                  <TrackedCtaLink
                    ctaName="email_contato"
                    location="contato_cards"
                    href="mailto:contato@syntro.com.br"
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    contato@syntro.com.br
                  </TrackedCtaLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Final */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para automatizar seu processo?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Solicite uma visita técnica gratuita e descubra como nossas
              soluções de automação podem revolucionar sua linha de produção.
            </p>
            <TrackedCtaLink
              ctaName="visita_tecnica_whatsapp"
              location="contato_final_cta"
              href="https://wa.me/+5519996362101?text=Olá! Gostaria de agendar uma visita técnica para avaliar minha necessidade de automação industrial."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Visita Técnica
            </TrackedCtaLink>
          </Reveal>
        </div>
      </section>
      ,
    </div>
  );
}

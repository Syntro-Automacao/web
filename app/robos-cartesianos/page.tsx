import { useSEO } from "@/components/seo/useSEO";
import type { Metadata } from "next";

// SEO simplificado para a página de Robôs Cartesianos
export const metadata: Metadata = useSEO({
  title: "Robôs Cartesianos",
  description:
    "Robôs cartesianos de alta precisão para automação industrial. Sistemas confiáveis, manutenção reduzida e integração perfeita.",
  keywords: [
    "robô cartesiano",
    "manipulador cartesiano",
    "sistema de coordenadas cartesianas",
    "automação com robôs",
    "eixos lineares",
    "automação de pick and place",
  ],
});

export default function RobosCartesianosPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Robôs Cartesianos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Robôs cartesianos de alta precisão para automação industrial com
            sistemas confiáveis, manutenção reduzida e integração perfeita.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Alta precisão e repetibilidade
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Manutenção reduzida
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Integração perfeita com sistemas existentes
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Eixos lineares de alta qualidade
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Automação de pick and place
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Aplicações</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Manipulação de peças
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Soldagem automática
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Montagem de produtos
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Inspeção de qualidade
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Embalagem e paletização
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Pronto para automatizar seu processo?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entre em contato com nossos especialistas e descubra como nossos
            robôs cartesianos podem transformar a eficiência da sua operação.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Solicitar Orçamento
          </button>
        </section>
      </div>
    </main>
  );
}

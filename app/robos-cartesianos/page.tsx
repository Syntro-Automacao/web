import { CartesianoIndex } from "@/components/sections/Cartesiano/CartesianoIndex";
import { createSEO } from "@/components/seo/useSEO";
import type { Metadata } from "next";

// SEO simplificado para a página de Robôs Cartesianos
export const metadata: Metadata = createSEO({
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
    <>
      <main className="relative">
        <div className="pt-24 bg-(--bg-cinza)"></div>
        <CartesianoIndex />
      </main>
    </>
  );
}

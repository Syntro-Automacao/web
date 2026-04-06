import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Multiplataforma() {
  return (
    <FeatureSection
      id={SECTION_IDS.MULTIPLATAFORMA}
      title=""
      description="Nossas soluções são multiplataforma, operando de forma integrada entre servidores, dispositivos móveis e smartwatches, com projetos escaláveis que acompanham a evolução da tecnologia, além de interfaces modernas, dinâmicas e intuitivas, alinhadas à aplicação; o sistema também conta com o auxílio de inteligência artificial para análise e tomada de decisão em tempo real."
      imageSrc="/assets/images/sistema-iot.webp"
      imageAlt="Syntro Software para automação industrial, mostrando programação de CLP"
      contentFirst={false} // imagem à esquerda
      imageWidth={800}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}

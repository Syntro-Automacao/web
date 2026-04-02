import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function RoboEscada() {
  return (
    <FeatureSection
      id={SECTION_IDS.ESCADA}
      title="Robô Escada"
      description="Robô tipo escada da Syntro, para automação de processos verticais, como montagem, pintura, polimento e manipulação de peças, com confiabilidade em ambientes industriais exigentes."
      imageSrc="/assets/robos/escada.webp"
      imageAlt="Robô Escada da Syntro para automação de processos verticais"
      contentFirst={true} // imagem à esquerda
      imageEnterFrom="left" // entra da esquerda
      imageScaleFrom={1}
      imageDistance="110%"
      reverseOnMobile={true}
      imageWidth={600}
      imageHeight={600}
    />
  );
}

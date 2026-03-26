import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Multiplataforma() {
  return (
    <FeatureSection
      id={SECTION_IDS.MULTIPLATAFORMA}
      title=""
      description="Nossas soluções são multiplataforma, operando de forma integrada entre dispositivos, servidores, dispositivos móveis e até smartwatches."
      description2="Desenvolvemos interfaces modernas, dinâmicas e intuitivas, alinhadas com à aplicação, sistema possui auxílio da inteligência artificial para análise e tomada de decisão em tempo real."
      imageSrc="/assets/images/multiplataforma.webp"
      imageAlt="Syntro Software para automação industrial, mostrando programação de CLP"
      contentFirst={true} // imagem à esquerda
      imageEnterFrom="right" // entra da esquerda
      imageScaleFrom={0.85}
      imageDistance="110%"
      imageWidth={800}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}

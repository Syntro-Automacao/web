import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Software() {
  return (
    <FeatureSection
      id={SECTION_IDS.SOFTWARE}
      title="Syntro Software"
      description="Syntro Software é uma solução de automação industrial para operações repetitivas e de alta precisão. Ideal para montagem, pintura, polimento e manipulação de peças, com confiabilidade em ambientes industriais exigentes."
      imageSrc="/assets/images/programacaoCLP.webp"
      imageAlt="Syntro Software para automação industrial, mostrando programação de CLP"
      contentFirst={false} // imagem à esquerda
      imageEnterFrom="left" // entra da esquerda
      imageScaleFrom={0.85}
      imageDistance="110%"
      imageWidth={800}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}

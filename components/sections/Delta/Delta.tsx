import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function RoboDelta() {
  return (
    <FeatureSection
      id={SECTION_IDS.DELTA}
      title="Robô Delta"
      description="O Robô Delta é uma solução de automação industrial que combina alta velocidade e precisão para operações repetitivas. Ideal para pick-and-place de produtos, montagem leve e linhas de produção, oferecendo eficiência e confiabilidade em ambientes industriais."
      imageSrc="/assets/robos/delta.webp"
      imageAlt="Robô Delta da Syntro para movimentação de peças em alta velocidade"
      contentFirst={true} // texto esquerda, visual direita
      imageEnterFrom="right" // entra da direita
      imageScaleFrom={0.85}
      imageDistance="110%"
      reverseOnMobile={true}
    />
  );
}

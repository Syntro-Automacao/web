import { FeatureSection } from "@/components/sections/Features/FeatureSection";

export function RoboHD() {
  return (
    <FeatureSection
      id="robo-hd"
      title="Robô Industrial HD"
      description="Solução de automação industrial para operações repetitivas e de alta precisão. Ideal para montagem, pintura, polimento e manipulação de peças, com confiabilidade em ambientes industriais exigentes."
      imageSrc="/assets/robos/robo-hd.webp"
      imageAlt="Robô industrial HD, integrado pela Syntro"
      contentFirst={true} // texto à esquerda no desktop
      reverseOnMobile={true} // (opcional) texto aparece antes no mobile
      imageEnterFrom="right" // imagem entra da direita
      imageScaleFrom={0.85}
      imageDistance="110%"
      //minHeightClass="min-h-[110vh]" // (opcional) mais sensação de controle
    />
  );
}

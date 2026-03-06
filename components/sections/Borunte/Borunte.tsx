import { FeatureSection } from "@/components/sections/Features/FeatureSection";

export function Borunte() {
  return (
    <FeatureSection
      id="borunte"
      title="Robô Industrial de Seis Eixos"
      description="Solução de automação industrial para operações repetitivas e de alta precisão. Ideal para montagem, pintura, polimento e manipulação de peças, com confiabilidade em ambientes industriais exigentes."
      imageSrc="/assets/robos/borunte.png"
      imageAlt="Robô industrial de seis eixos Borunte, integrado pela Syntro"
      contentFirst={true} // texto primeiro (esquerda), imagem na direita
      imageEnterFrom="right" // entra da direita
      imageScaleFrom={0.85}
      imageDistance="110%"
    />
  );
}

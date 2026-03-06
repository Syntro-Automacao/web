import { FeatureSection } from "@/components/sections/Features/FeatureSection";

export function RoboBandeja3D() {
  return (
    <FeatureSection
      id="robo-cartesiano"
      title="Robô Cartesiano"
      description="O Robô Cartesiano é uma solução de automação industrial que combina a flexibilidade de um robô com a precisão de um manipulador cartesiano. Ideal para operações de movimentação de peças em ambientes industriais."
      imageSrc="/assets/robos/bandeja/M_Synbot20_001.webp"
      imageAlt="Renderização 3D do Robô Cartesiano da Syntro"
      contentFirst={true} // texto à esquerda
      imageEnterFrom="right" // imagem entra da direita
      imageScaleFrom={0.85}
      imageDistance="110%"
    />
  );
}

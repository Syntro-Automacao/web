import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function RoboBandeja3D() {
  return (
    <FeatureSection
      id={SECTION_IDS.CARTESIANO}
      title=""
      description="Os robôs cartesianos oferecem precisão milimétrica, garantindo operações altamente confiáveis e consistentes em toda a linha de produção. Com movimentos suaves e controlados nos eixos X, Y e Z, proporcionam estabilidade e repetibilidade mesmo nas aplicações mais exigentes. Além disso, sua fácil integração com diversos sistemas, seja sistemas de visão, sistemas ERP entre outros sistemas que possam enviar instrução para executar um determinado processo."
      imageSrc="/assets/robos/bandeja/M_Synbot20_001.webp"
      imageAlt="Renderização 3D do Robô Cartesiano da Syntro"
      contentFirst={false} // texto à esquerda
      imageEnterFrom="right" // imagem entra da direita
      imageScaleFrom={1}
      imageDistance="110%"
      reverseOnMobile={true}
      imageWidth={600}
      imageHeight={600}
    />
  );
}

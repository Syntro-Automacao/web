import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";

export function Iot() {
  return (
    <FeatureSection
      id={SECTION_IDS.IOT}
      title="Sistemas IOT"
      description="Sistemas IOT, da Syntro, mostrando a integração de dispositivos conectados"
      imageSrc="/assets/images/iot.webp"
      imageAlt="Sistemas IoT, da Syntro, mostrando a integração de dispositivos conectados"
      contentFirst={true} // imagem primeiro (esquerda), texto depois
      reverseOnMobile={true} // no mobile: texto primeiro, imagem depois
      imageEnterFrom="right" // entra da esquerda
      imageScaleFrom={0.9}
      imageDistance="110%"
    />
  );
}

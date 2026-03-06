import { FeatureSection } from "@/components/sections/Features/FeatureSection";

export function Iot() {
  return (
    <FeatureSection
      id="iot"
      title="Sistemas IOT"
      description="Sistemas IOT, da Syntro, mostrando a integração de dispositivos conectados"
      imageSrc="/assets/images/iot.webp"
      imageAlt="Sistemas IoT, da Syntro, mostrando a integração de dispositivos conectados"
      contentFirst={false} // imagem primeiro (esquerda), texto depois
      imageEnterFrom="left" // entra da esquerda
      imageScaleFrom={0.9}
      imageDistance="110%"
    />
  );
}

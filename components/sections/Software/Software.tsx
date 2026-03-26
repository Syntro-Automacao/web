import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Software() {
  return (
    <FeatureSection
      id={SECTION_IDS.SOFTWARE}
      title=""
      description="Somos especialistas no desenvolvimento de softwares avançados para diversas indústrias, química, biologia, segurança, medicina entre outras. nossos desenvolvimento tem duas frentes, sendo uma programacao de maquinas e equipamentos, como programação de PLCs, HMIs, Sistemas Scadas, robos e dispositivos industriais, outra frente é relacionado as desenvolvimento de sistemas webs, aplicativos e aplicacoes para servidores, conectando máquinas, manipulando dados e tomada de decisões em um único ecossistema inteligente."
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

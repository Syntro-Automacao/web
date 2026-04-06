import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Software() {
  return (
    <FeatureSection
      id={SECTION_IDS.SOFTWARE}
      title=""
      description="Somos especialistas no desenvolvimento de softwares avançados para diversas indústrias, como química, biologia, segurança e medicina, entre outras. Nossos desenvolvimentos possuem duas frentes principais: a primeira é voltada para a programação de máquinas e equipamentos, incluindo PLCs, HMIs, sistemas SCADA, robôs e dispositivos industriais; a segunda está relacionada ao desenvolvimento de sistemas web e aplicativos, conectando servidores a equipamentos, manipulando dados e apoiando a tomada de decisões em um único ecossistema inteligente."
      imageSrc="/assets/images/programacaoCLP.webp"
      imageAlt="Syntro Software para automação industrial, mostrando programação de CLP"
      contentFirst={false}
      imageWidth={600}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}

import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Criatividade() {
  return (
    <FeatureSection
      id={SECTION_IDS.CRIATIVIDADE}
      title=""
      description="Somos criativos em nossos desenvolvimento, estudando melhor recurso para comunicação e transparência das informação técnica, com a inteligência artificial em jogo podemos criar chats no qual pudesse se comunicar com os sistemas automatizados."
      imageSrc="/assets/images/criatividade.webp"
      imageAlt="Syntro Software para automação industrial, mostrando programação de CLP"
      contentFirst={false} // imagem à esquerda
      imageEnterFrom="right" // entra da esquerda
      imageScaleFrom={0.85}
      imageDistance="110%"
      imageWidth={800}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}

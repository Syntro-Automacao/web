import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Criatividade() {
  return (
    <FeatureSection
      id={SECTION_IDS.CRIATIVIDADE}
      title=""
      description="Somos criativos em nossos desenvolvimentos, buscando constantemente os melhores recursos para comunicação e transparência das informações técnicas. Com a inteligência artificial em evidência, podemos criar chats com agentes inteligentes capazes de se comunicar com sistemas automatizados, permitindo interações por meio de perguntas e respostas de forma natural, como em uma conversa com um humano. Além disso, todas as interações podem ser registradas no WhatsApp, criando um histórico acessível e organizado das conversas."
      imageSrc="/assets/images/criatividade.webp"
      imageAlt="Syntro Software para automação industrial, mostrando programação de CLP"
      contentFirst={false} // imagem à esquerda
      imageWidth={600}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}

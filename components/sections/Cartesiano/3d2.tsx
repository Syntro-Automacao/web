import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function RoboBandeja3D2() {
  return (
    <FeatureSection
      id="cartesiano3D"
      title=""
      description="Na ponta do eixo Z é possível desenvolver uma ferramenta de trabalho, seja essa ferramenta um conjunto de ventosas para manipular componentes com vácuo, um uma garra mecânica, tambem pode ser incrementado dispositivos de dispensar para executar aplicação de resina, cola entre outros materiais em um determinado produto, com tambem pode ser incrementado uma pistola de pintura ou tocha para soldas, esse robô cartesiano pode ser aplicado em diversas atividades."
      description2="Esses equipamentos são de fácil manutenção, com os componentes projetado e instalado em locais com fácil acesso, cabos de movimentação para maior durabilidade, projetos elétricos e mecânico padronizados e organizados de forma inteligentes para melhor entendimento."
      imageSrc="/assets/images/symbotxyz.webp"
      imageAlt="Renderização 3D do Robô Cartesiano da Syntro"
      contentFirst={true} // texto à esquerda
      imageEnterFrom="right" // imagem entra da direita
      imageScaleFrom={1}
      imageDistance="110%"
      reverseOnMobile={true}
      imageWidth={600}
      imageHeight={600}
    />
  );
}

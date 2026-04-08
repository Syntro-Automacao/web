import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function SupervisoryControl() {
  return (
    <FeatureSection
      id={SECTION_IDS.SUPERVISORY}
      title=""
      description="Sistemas IoT (Internet das Coisas) interconectam objetos físicos à internet por meio de sensores, softwares e redes, permitindo controle e monitoramento. Um exemplo é o monitoramento de um sistema de captação de energia solar, o gerenciamento da iluminação de quadras, ruas, pátios e campos, além do controle do consumo de água e energia. Também é possível controlar e monitorar o tratamento da água de uma piscina, sendo esses recursos utilizado em clubes, condomínios, bairros, indústrias, hospitais, laboratórios, entre outros."
      imageSrc="/assets/images/supervisory_control.webp"
      imageAlt="Syntro Software para automação industrial, mostrando controle e monitoramento de objetos físicos à internet"
      contentFirst={false}
      imageWidth={600}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}

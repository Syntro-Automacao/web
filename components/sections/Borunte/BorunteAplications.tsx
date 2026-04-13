import { UltraLoadingGears } from "@/components/ui/ultra-loading-gears";

type Application = {
  title: string;
  image: string;
  description: string;
  alt: string;
};

const aplications: Application[] = [
  {
    title: "Robustez e agilidade com precisão",
    image: "/assets/robos/borunte/borunte-soldando.webp",
    alt: "robo robusto, agilidade com precisao ",
    description:
      "O robô possui robustez para trabalhar em aplicações industriais, muito utilizado para soldas e manuseio de ferramentas.",
  },
  {
    title: "Articulações e repetibilidade",
    image: "/assets/robos/borunte/borunte-pintando.webp",
    alt: "robo de articulações e repetibilidade",
    description:
      "Repetibilidade com precisão de ±0,03 mm para processos que exigem alta qualidade e padronização, com articulações que possibilitam movimentos complexos.",
  },
  {
    title: "Baixa taxa de falhas e longa vida útil",
    image: "/assets/robos/borunte/borunte-caixa.webp",
    alt: "robo baixa taxa de falhas e longa vida útil",
    description:
      "Projeto desenvolvido para uso contínuo, reduzindo paradas e executando diretamente os comandos do sistema, com alta confiabilidade operacional.",
  },
];

export function BorunteAplications() {
  return (
    <section id="servicos" className="py-24 lg:py-32 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Aplications Grid */}
        <div className="max-w-[1920px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aplications.map((aplication, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 bg-card/50 rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <UltraLoadingGears
                src={aplication.image}
                alt={aplication.alt}
                className="w-full mb-4"
                minHeight={200}
                spinnerSize={40}
                spinnerText=""
                objectFit="cover"
              />
              <h3 className="2xl:text-2xl text-xl font-semibold text-foreground mb-3">
                {aplication.title}
              </h3>
              <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed">
                {aplication.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

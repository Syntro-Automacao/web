import { Bot, Wrench, Code2, Boxes, Network, Cog } from "lucide-react";

const aplications = [
  {
    title: "Robustes e agilidade com precisao",
    image: "/assets/robos/borunte/borunte-soldando.webp",
    description:
      "O robô possui robustez para trabalhar em aplicações industriais, muito utilizado para soldas e manuseio de ferramentas.",
  },
  {
    title: "Articulacoes e repetibilidade",
    image: "/assets/robos/borunte/borunte-pintando.webp",
    description:
      "Retibilidade com precisão de ±0,03 mm para processos que exigem qualidade e padronização, com articulações possibilitando movimentos complexos.",
  },
  {
    title: "Baixa taxa de falhas e longa vida útil",
    image: "/assets/robos/borunte/borunte-caixa.webp",
    description:
      "Projeto voltado para uso contínuo, reduzindo paradas e executando diretamente o comando vindo do sistema, sem falhas operacionais.",
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
              <img
                src={aplication.image}
                alt={aplication.title}
                className="w-full object-cover rounded-md mb-4"
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

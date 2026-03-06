import { Bot, Wrench, Code2, Boxes, Network, Cog } from "lucide-react";

const aplications = [
  {
    title: "Operação simples e resposta rápida",
    image: "/assets/robos/borunte/borunte-soldando.webp",
    description:
      "Interface amigável e movimentos ágeis para ciclos curtos e maior produtividade.",
  },
  {
    title: "Alta precisão e consistência",
    image: "/assets/robos/borunte/borunte-pintando.webp",
    description:
      "Repetibilidade de ±0,03 mm para processos que exigem qualidade e padronização.",
  },
  {
    title: "Baixa taxa de falhas e longa vida útil",
    image: "/assets/robos/borunte/borunte-caixa.webp",
    description:
      "Projeto voltado para uso contínuo, reduzindo paradas e custos de manutenção.",
  },
];

export function BorunteAplications() {
  return (
    <section id="servicos" className="py-24 lg:py-32 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Aplications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {aplication.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {aplication.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

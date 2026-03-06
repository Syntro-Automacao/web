import { Bot, Wrench, Code2, Boxes, Network, Cog } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Robôs Industriais",
    description:
      "Desenvolvimento de robôs industriais customizados para aplicações específicas, desde manipuladores até sistemas autônomos.",
  },
  {
    icon: Wrench,
    title: "Automação Turnkey",
    description:
      "Projetos completos de automação industrial, do conceito à implementação, com entrega pronta para operação.",
  },
  {
    icon: Code2,
    title: "Engenharia de Software",
    description:
      "Desenvolvimento de sistemas de controle, interfaces HMI, integração com ERPs e soluções de IoT industrial.",
  },
  {
    icon: Boxes,
    title: "Modelagem 3D",
    description:
      "Design industrial e modelagem 3D de alta precisão para prototipagem e fabricação de componentes.",
  },
  {
    icon: Network,
    title: "Indústria 4.0",
    description:
      "Integração de sistemas cyber-físicos, análise de dados e implementação de conceitos da quarta revolução industrial.",
  },
  {
    icon: Cog,
    title: "Engenharia Mecânica e Elétrica",
    description:
      "Projetos mecânicos estruturais, sistemas elétricos de potência e automação de processos industriais.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="max-w-[1920px] mx-auto py-24 lg:py-32">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
            Soluções Completas em Automação
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oferecemos um portfólio completo de serviços para transformar sua
            indústria, desde o desenvolvimento de robôs até a integração de
            sistemas complexos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

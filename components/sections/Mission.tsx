import { Target, Eye, Compass } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Transformar a indústria brasileira através de soluções de automação e robótica de alta performance, democratizando o acesso à tecnologia de ponta e impulsionando a competitividade nacional.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em automação industrial na América Latina, reconhecida pela excelência técnica, inovação constante e compromisso com o desenvolvimento tecnológico do Brasil.",
  },
  {
    icon: Compass,
    title: "Valores",
    description:
      "Inovação contínua, excelência técnica, compromisso com resultados, parceria de longo prazo com clientes e valorização do desenvolvimento tecnológico nacional.",
  },
];

export function Mission() {
  return (
    <section
      id="missao"
      className="max-w-[1920px] mx-auto py-24 lg:py-32 bg-card/30"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nosso Propósito
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
            Missão, Visão e Valores
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Os princípios que guiam nossa jornada na construção do futuro da
            indústria brasileira.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-10 bg-card rounded-lg border border-border text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

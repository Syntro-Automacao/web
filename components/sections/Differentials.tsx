import { Flag, Shield, Sparkles, HeadphonesIcon } from "lucide-react";

const differentials = [
  {
    icon: Flag,
    title: "Tecnologia 100% Brasileira",
    description:
      "Desenvolvemos toda nossa tecnologia no Brasil, gerando empregos locais e fortalecendo a indústria nacional com soluções adaptadas à nossa realidade.",
    highlight: "Made in Brazil",
  },
  {
    icon: Shield,
    title: "Alternativa aos Importados",
    description:
      "Oferecemos uma alternativa competitiva aos robôs chineses e europeus, com qualidade equivalente, preços acessíveis e suporte local.",
    highlight: "Custo-benefício",
  },
  {
    icon: Sparkles,
    title: "Customização Profunda",
    description:
      "Cada projeto é único. Desenvolvemos soluções sob medida para suas necessidades específicas, sem limitações de produtos de prateleira.",
    highlight: "Sob medida",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Próximo",
    description:
      "Domínio total da tecnologia significa suporte técnico ágil, manutenção preventiva eficiente e evolução contínua dos sistemas.",
    highlight: "Sem barreiras",
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="max-w-[1920px] mx-auto py-24 lg:py-32 bg-card/30"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
            Por Que Escolher a Syntro?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Combinamos tecnologia de ponta com proximidade e flexibilidade para
            entregar soluções que realmente fazem a diferença na sua operação.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-10 bg-card rounded-lg border border-border overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 mb-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {item.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

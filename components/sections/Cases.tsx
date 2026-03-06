import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Linha de Montagem Automatizada",
    client: "Dell Technologies",
    description:
      "Desenvolvimento de célula robótica para montagem de componentes eletrônicos com alta precisão e velocidade.",
    tags: ["Robótica", "Montagem", "Eletrônicos"],
    metric: "40% mais produtividade",
  },
  {
    title: "Sistema de Paletização Inteligente",
    client: "Indústria Alimentícia",
    description:
      "Implementação de sistema automatizado de paletização com visão computacional e adaptação dinâmica.",
    tags: ["Paletização", "Visão Computacional", "Logística"],
    metric: "24h operação contínua",
  },
  {
    title: "Robô Colaborativo para Inspeção",
    client: "Setor Automotivo",
    description:
      "Cobot para inspeção de qualidade em peças automotivas, integrado à linha de produção existente.",
    tags: ["Cobot", "Inspeção", "Qualidade"],
    metric: "99.8% precisão",
  },
];

export function Cases() {
  return (
    <section id="cases" className="max-w-[1920px] mx-auto py-24 lg:py-32">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Cases de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
            Experiência Comprovada
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Conheça alguns dos projetos que entregamos para empresas líderes em
            seus segmentos, transformando operações com automação inteligente.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <article
              key={index}
              className="group relative bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Top Section */}
              <div className="p-6 lg:p-8">
                {/* Client */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {caseItem.client}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {caseItem.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric Section */}
              <div className="px-6 lg:px-8 py-4 bg-secondary/30 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium text-foreground">
                    {caseItem.metric}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

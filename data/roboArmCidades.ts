export type RoboArmCidade = {
  slug: string;
  cidade: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  textoRegional: string;
  cta: string;
};

// Adicione novas cidades aqui. Para cada nova cidade, crie um objeto seguindo
// o mesmo formato. O slug é usado na URL: /robo-arm-{slug}/
export const roboArmCidades: RoboArmCidade[] = [
  {
    slug: "valinhos",
    cidade: "Valinhos",
    seoTitle: "Robô Arm Industrial em Valinhos",
    seoDescription:
      "Robôs industriais articulados em Valinhos para automação com picking, packing, paletização e operações complexas com alta precisão e repetibilidade.",
    h1: "Robô Arm Industrial em Valinhos",
    intro:
      "A Syntro integra robôs industriais articulados para empresas de Valinhos, com foco em precisão, repetibilidade e flexibilidade para operações complexas.",
    textoRegional:
      "Em Valinhos e região, entregamos células robotizadas com robôs de 6 eixos para picking, packing, paletização e manipulação de peças. Atuamos do estudo da aplicação ao comissionamento, integrando o robô a CLPs, sensores, dispositivos de visão e sistemas de supervisão.",
    cta: "Solicitar orçamento em Valinhos",
  },
  {
    slug: "vinhedo",
    cidade: "Vinhedo",
    seoTitle: "Robô Arm Industrial em Vinhedo",
    seoDescription:
      "Robô arm industrial em Vinhedo para automação com movimentos suaves, repetibilidade elevada e integração completa ao seu processo produtivo.",
    h1: "Robô Arm Industrial em Vinhedo",
    intro:
      "Se você busca automação industrial em Vinhedo, os robôs manipuladores da Syntro aumentam a produtividade e padronizam operações com alta repetibilidade.",
    textoRegional:
      "Atendemos Vinhedo com soluções que combinam mecânica robusta, controle de movimento de alta performance e software industrial. Isso permite automatizar tarefas complexas com estabilidade, reduzir paradas e integrar o robô ao seu ecossistema (CLP, HMI, SCADA e rastreabilidade), mantendo a operação simples para o time.",
    cta: "Falar com especialista em Vinhedo",
  },
  {
    slug: "campinas",
    cidade: "Campinas",
    seoTitle: "Robô Arm Industrial em Campinas",
    seoDescription:
      "Robôs industriais de 6 eixos em Campinas para picking, packing, paletização e células robotizadas. Projeto completo, integração e suporte técnico.",
    h1: "Robô Arm Industrial em Campinas",
    intro:
      "Em Campinas, a Syntro entrega robôs industriais articulados para aplicações que exigem velocidade, repetibilidade e controle total do processo.",
    textoRegional:
      "Campinas concentra operações industriais com alta demanda por eficiência. Por isso, desenhamos células robotizadas pensando em ciclo, segurança, manutenção e escalabilidade. O resultado é uma solução confiável para produção contínua, com integração a dispositivos de visão, sensores e sistemas de dados quando necessário.",
    cta: "Agendar visita técnica em Campinas",
  },
  {
    slug: "hortolandia",
    cidade: "Hortolândia",
    seoTitle: "Robô Arm Industrial em Hortolândia",
    seoDescription:
      "Soluções em robôs industriais articulados em Hortolândia para automação com precisão e robustez. Integração com CLP/HMI/SCADA e suporte.",
    h1: "Robô Arm Industrial em Hortolândia",
    intro:
      "A Syntro atende Hortolândia com robôs industriais projetados para aplicações de alta repetibilidade, redução de custo operacional e melhoria de qualidade.",
    textoRegional:
      "Projetamos soluções para Hortolândia considerando layout de fábrica, ergonomia, segurança e necessidades de integração. Isso inclui desde a escolha do modelo e do alcance do robô até a lógica de controle e interface de operação, garantindo uma automação consistente para picking, packing e manipulação de peças.",
    cta: "Solicitar proposta em Hortolândia",
  },
  {
    slug: "jundiai",
    cidade: "Jundiaí",
    seoTitle: "Robô Arm Industrial em Jundiaí",
    seoDescription:
      "Robôs industriais articulados em Jundiaí para automação com picking, packing, paletização e movimentação de peças com alta precisão.",
    h1: "Robô Arm Industrial em Jundiaí",
    intro:
      "A Syntro integra robôs industriais articulados para empresas de Jundiaí, com foco em precisão, repetibilidade e flexibilidade para operações complexas.",
    textoRegional:
      "Em Jundiaí e região, entregamos células robotizadas com robôs de 6 eixos para picking, packing, paletização e manipulação de peças. Atuamos do estudo da aplicação ao comissionamento, integrando o robô a CLPs, sensores, dispositivos de visão e sistemas de supervisão.",
    cta: "Solicitar orçamento em Jundiaí",
  },
  {
    slug: "louveira",
    cidade: "Louveira",
    seoTitle: "Robô Arm Industrial em Louveira",
    seoDescription:
      "Robô arm industrial em Louveira para automação com movimentos suaves, repetibilidade elevada e integração completa ao seu processo.",
    h1: "Robô Arm Industrial em Louveira",
    intro:
      "Se você busca automação industrial em Louveira, os robôs manipuladores da Syntro aumentam a produtividade e padronizam operações com alta repetibilidade.",
    textoRegional:
      "Atendemos Louveira com soluções que combinam mecânica robusta, controle de movimento de alta performance e software industrial. Isso permite automatizar tarefas complexas com estabilidade, reduzir paradas e integrar o robô ao seu ecossistema (CLP, HMI, SCADA e rastreabilidade), mantendo a operação simples para o time.",
    cta: "Falar com especialista em Louveira",
  },
  {
    slug: "itatiba",
    cidade: "Itatiba",
    seoTitle: "Robô Arm Industrial em Itatiba",
    seoDescription:
      "Soluções em robôs industriais articulados em Itatiba para automação com precisão e robustez. Integração com CLP/HMI/SCADA e suporte.",
    h1: "Robô Arm Industrial em Itatiba",
    intro:
      "A Syntro atende Itatiba com robôs industriais projetados para aplicações de alta repetibilidade, redução de custo operacional e melhoria de qualidade.",
    textoRegional:
      "Projetamos soluções para Itatiba considerando layout de fábrica, ergonomia, segurança e necessidades de integração. Isso inclui desde a escolha do modelo e do alcance do robô até a lógica de controle e interface de operação, garantindo uma automação consistente para picking, packing e manipulação de peças.",
    cta: "Solicitar proposta em Itatiba",
  },
  {
    slug: "sumare",
    cidade: "Sumaré",
    seoTitle: "Robô Arm Industrial em Sumaré",
    seoDescription:
      "Robôs industriais de 6 eixos em Sumaré para picking, packing, paletização e células robotizadas. Projeto completo, integração e suporte técnico.",
    h1: "Robô Arm Industrial em Sumaré",
    intro:
      "Em Sumaré, a Syntro entrega robôs industriais articulados para aplicações que exigem velocidade, repetibilidade e controle total do processo.",
    textoRegional:
      "Sumaré reúne operações industriais variadas, com demanda por eficiência e controle. Por isso, desenhamos células robotizadas pensando em ciclo, segurança, manutenção e escalabilidade. O resultado é uma solução confiável para produção contínua, com integração a dispositivos de visão, sensores e sistemas de dados quando necessário.",
    cta: "Agendar visita técnica em Sumaré",
  },
  {
    slug: "americana",
    cidade: "Americana",
    seoTitle: "Robô Arm Industrial em Americana",
    seoDescription:
      "Robôs industriais articulados em Americana para automação com picking, packing e paletização, com alta precisão e repetibilidade.",
    h1: "Robô Arm Industrial em Americana",
    intro:
      "A Syntro integra robôs industriais articulados para empresas de Americana, com foco em precisão, repetibilidade e flexibilidade para operações complexas.",
    textoRegional:
      "Em Americana e região, entregamos células robotizadas com robôs de 6 eixos para picking, packing, paletização e manipulação de peças. Atuamos do estudo da aplicação ao comissionamento, integrando o robô a CLPs, sensores, dispositivos de visão e sistemas de supervisão.",
    cta: "Solicitar orçamento em Americana",
  },
  {
    slug: "paulinia",
    cidade: "Paulínia",
    seoTitle: "Robô Arm Industrial em Paulínia",
    seoDescription:
      "Robôs industriais articulados em Paulínia para automação com picking, packing, paletização e movimentação de peças com alta precisão.",
    h1: "Robô Arm Industrial em Paulínia",
    intro:
      "A Syntro atende Paulínia com robôs industriais projetados para dar precisão, repetibilidade e flexibilidade à produção.",
    textoRegional:
      "Projetamos soluções para Paulínia considerando o processo produtivo, o layout da fábrica e as necessidades do time de operação. Isso inclui a escolha do modelo e do alcance do robô, a integração com CLP, HMI e SCADA e a interface de operação, garantindo uma automação consistente para picking, packing e paletização.",
    cta: "Falar com especialista em Paulínia",
  },
];

export function getRoboArmCidadeBySlug(slug: string) {
  return roboArmCidades.find((c) => c.slug === slug) ?? null;
}

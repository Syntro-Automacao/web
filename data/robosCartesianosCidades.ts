export type RobosCartesianosCidade = {
  slug: string;
  cidade: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  textoRegional: string;
  cta: string;
};

export const robosCartesianosCidades: RobosCartesianosCidade[] = [
  {
    slug: "valinhos",
    cidade: "Valinhos",
    seoTitle: "Robôs Cartesianos em Valinhos | Syntro Automação",
    seoDescription:
      "Soluções em robôs cartesianos em Valinhos para automação industrial, movimentação de peças e integração robotizada com alta precisão.",
    h1: "Robôs Cartesianos em Valinhos",
    intro:
      "A Syntro desenvolve e integra robôs cartesianos para aplicações industriais em Valinhos, com foco em desempenho, repetibilidade e integração fácil com o seu processo.",
    textoRegional:
      "Em Valinhos e região, entregamos projetos sob medida para linhas de produção que precisam de pick and place, paletização, inspeção e movimentação de peças com eixos lineares. Atuamos desde o estudo da aplicação até a entrega e comissionamento, com integração a CLPs, sensores e sistemas de supervisão.",
    cta: "Solicitar orçamento em Valinhos",
  },
  {
    slug: "vinhedo",
    cidade: "Vinhedo",
    seoTitle: "Robôs Cartesianos em Vinhedo | Syntro Automação",
    seoDescription:
      "Robôs cartesianos em Vinhedo para automação industrial com alta precisão, velocidade e confiabilidade. Integração completa e manutenção reduzida.",
    h1: "Robôs Cartesianos em Vinhedo",
    intro:
      "Se você busca automação industrial em Vinhedo, os robôs cartesianos da Syntro ajudam a aumentar produtividade e padronizar operações com movimentos lineares precisos.",
    textoRegional:
      "Atendemos Vinhedo com soluções que combinam mecânica robusta, controle de movimento e software industrial. Isso permite automatizar tarefas repetitivas com estabilidade, reduzir paradas e integrar o robô ao seu ecossistema (CLP, HMI, SCADA e rastreabilidade), mantendo uma operação simples para o time.",
    cta: "Falar com especialista em Vinhedo",
  },
  {
    slug: "campinas",
    cidade: "Campinas",
    seoTitle: "Robôs Cartesianos em Campinas | Syntro Automação",
    seoDescription:
      "Robôs cartesianos em Campinas para automação industrial, movimentação de peças e células robotizadas. Projeto completo, integração e suporte.",
    h1: "Robôs Cartesianos em Campinas",
    intro:
      "Em Campinas, a Syntro entrega robôs cartesianos e soluções de automação industrial para aplicações que exigem velocidade, repetibilidade e controle total do processo.",
    textoRegional:
      "Campinas concentra operações industriais com alta demanda por eficiência. Por isso, desenhamos células de automação com eixos cartesianos pensando em ciclo, segurança, manutenção e escalabilidade. O resultado é uma solução confiável para produção contínua, com integração a dispositivos de visão, sensores e sistemas de dados quando necessário.",
    cta: "Agendar visita técnica em Campinas",
  },
  {
    slug: "hortolandia",
    cidade: "Hortolândia",
    seoTitle: "Robôs Cartesianos em Hortolândia | Syntro Automação",
    seoDescription:
      "Soluções em robôs cartesianos em Hortolândia para automação industrial com precisão e robustez. Integração com CLP/HMI/SCADA e suporte.",
    h1: "Robôs Cartesianos em Hortolândia",
    intro:
      "A Syntro atende Hortolândia com robôs cartesianos projetados para aplicações industriais de alta repetibilidade, redução de custo operacional e melhoria de qualidade.",
    textoRegional:
      "Projetamos soluções para Hortolândia considerando layout de fábrica, ergonomia, segurança e necessidades de integração. Isso inclui desde o dimensionamento de eixos e servos até a lógica de controle e interface de operação, garantindo uma automação consistente para movimentação de peças, abastecimento de máquinas e processos contínuos.",
    cta: "Solicitar proposta em Hortolândia",
  },
];

export function getRobosCartesianosCidadeBySlug(slug: string) {
  return robosCartesianosCidades.find((c) => c.slug === slug) ?? null;
}

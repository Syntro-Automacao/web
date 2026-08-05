"use client";

import Link from "next/link";
import { TrackedWhatsAppLink } from "@/components/analytics/GoogleAnalytics";

function SectionTitle({ children, id }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl sm:text-2xl font-semibold tracking-tight text-foreground"
    >
      {children}
    </h2>
  );
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-sm font-medium text-primary/90">LGPD</p>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Política de Privacidade
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Esta Política explica, de forma clara, como o site{" "}
            <span className="font-medium text-foreground">syntro.com.br</span>{" "}
            trata dados pessoais quando você navega por nossas páginas e quando
            você escolhe falar conosco pelo WhatsApp.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
            <span>Última atualização: 24/04/2026</span>
            <span className="hidden sm:inline">•</span>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              Voltar para o site
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-6">
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="visao-geral">1. Visão geral</SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                A Syntro Automação Industrial mantém este site com finalidade
                institucional. Nosso objetivo é apresentar soluções, serviços e
                conteúdos sobre automação industrial.
              </p>
              <p>
                O site não possui login e não possui formulário de contato. Por
                isso, em regra, não coletamos dados pessoais diretamente por
                meio de preenchimento de campos.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="dados-diretos">
              2. Dados que não coletamos diretamente
            </SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Este site não solicita cadastro e não disponibiliza formulário
                de contato. Assim, não pedimos nome, e-mail, telefone ou outros
                dados por meio do próprio site.
              </p>
              <p>
                Se você decidir entrar em contato por outros canais (ex.: e-mail
                ou WhatsApp), os dados que você compartilhar serão tratados no
                contexto daquele canal.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="dados-automaticos">
              3. Dados que podem ser coletados automaticamente
            </SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Como a maioria dos sites, podemos receber informações técnicas
                automaticamente quando você acessa nossas páginas, como:
              </p>
              <ul className="grid gap-2 list-disc pl-5">
                <li>Endereço IP e informações aproximadas de localização</li>
                <li>
                  Informações do dispositivo e do navegador (tipo, versão,
                  sistema operacional)
                </li>
                <li>Dados de navegação (páginas visitadas e interações)</li>
              </ul>
              <p>
                Esses dados podem ser utilizados para segurança, estabilidade,
                prevenção a abuso e melhoria da experiência no site.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="cookies">
              4. Cookies (quando aplicável)
            </SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Cookies são pequenos arquivos armazenados no seu navegador.
                Dependendo da configuração do site, podem existir:
              </p>
              <ul className="grid gap-2 list-disc pl-5">
                <li>
                  Cookies necessários: ajudam o site a funcionar corretamente
                </li>
                <li>
                  Cookies de desempenho/medição: ajudam a entender como o site é
                  utilizado (ex.: analytics), quando habilitados
                </li>
              </ul>
              <p>
                Você pode gerenciar cookies nas configurações do seu navegador.
                Se o site utilizar um banner de consentimento, ele permitirá que
                você escolha sobre o uso de cookies não essenciais.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="whatsapp">
              5. Redirecionamento para WhatsApp
            </SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                O site pode oferecer botões/links que redirecionam você para o
                WhatsApp para facilitar o contato.
              </p>
              <p>
                Ao clicar e abrir o WhatsApp, o tratamento de dados passa a ser
                regido também pelas políticas e termos do WhatsApp/Meta. O
                conteúdo da conversa e os dados compartilhados por você no
                WhatsApp são fornecidos por você nesse ambiente.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="bases-legais">
              6. Finalidades e bases legais (LGPD)
            </SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Quando houver tratamento de dados pessoais relacionado à
                navegação e à segurança do site, utilizamos essas informações
                para finalidades legítimas como proteger o serviço, prevenir
                fraudes, manter a estabilidade e melhorar a experiência.
              </p>
              <p>
                Quando houver uso de cookies não essenciais (como analytics), a
                base pode ser o consentimento, quando aplicável, conforme a
                configuração do site.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="direitos">7. Seus direitos (LGPD)</SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                A LGPD garante direitos ao titular de dados. Quando aplicável,
                você pode solicitar:
              </p>
              <ul className="grid gap-2 list-disc pl-5">
                <li>Confirmação e acesso</li>
                <li>
                  Correção de dados incompletos, inexatos ou desatualizados
                </li>
                <li>Anonimização, bloqueio ou eliminação</li>
                <li>Portabilidade, quando cabível</li>
                <li>Informações sobre compartilhamento</li>
                <li>Revogação de consentimento, quando aplicável</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="seguranca">8. Segurança</SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Adotamos medidas de segurança compatíveis com o tipo de site e
                com os riscos envolvidos para reduzir a possibilidade de acesso
                não autorizado, uso indevido e incidentes.
              </p>
              <p>
                Apesar disso, nenhum sistema é completamente livre de riscos. Se
                você identificar alguma vulnerabilidade, entre em contato.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="atualizacoes">
              9. Atualizações desta Política
            </SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Podemos atualizar esta Política para refletir mudanças no site,
                em tecnologias utilizadas ou em requisitos legais. A data da
                última atualização estará sempre indicada no topo desta página.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <SectionTitle id="contato">10. Contato</SectionTitle>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Para dúvidas ou solicitações relacionadas a privacidade e dados
                pessoais, fale conosco:
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="mailto:contato@syntro.com.br"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  contato@syntro.com.br
                </a>
                <TrackedWhatsAppLink
                  ctaName="privacy_policy_whatsapp"
                  location="privacidade_contato"
                  href="https://wa.me/+5519996362101?text=Olá! Gostaria de falar sobre privacidade e dados no site da Syntro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-95 transition-opacity"
                >
                  Falar no WhatsApp
                </TrackedWhatsAppLink>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;

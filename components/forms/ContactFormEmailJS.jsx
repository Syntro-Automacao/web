"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const INITIAL_FORM = {
  nome: "",
  email: "",
  assunto: "Agendar visita",
  mensagem: "",
};

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_NOTIFY =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NOTIFY ??
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_TEMPLATE_ID_AUTOREPLY =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_AUTOREPLY;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactFormEmailJS() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = formData.nome.trim();
    const email = formData.email.trim();
    const mensagem = formData.mensagem.trim();
    const assunto = formData.assunto.trim();

    if (!nome || !email || !mensagem || !assunto) {
      setFeedback({
        type: "error",
        message: "Preencha todos os campos antes de enviar.",
      });
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setFeedback({
        type: "error",
        message: "Informe um e-mail válido.",
      });
      return;
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID_NOTIFY ||
      !EMAILJS_TEMPLATE_ID_AUTOREPLY ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setFeedback({
        type: "error",
        message:
          "Configuração de envio não encontrada. Defina NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NOTIFY (ou NEXT_PUBLIC_EMAILJS_TEMPLATE_ID), NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_AUTOREPLY e NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.",
      });
      return;
    }

    setIsLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_NOTIFY,
        {
          nome,
          email,
          assunto,
          mensagem,
          to_email: "contato@syntro.com.br",
          toEmail: "contato@syntro.com.br",
          reply_to: email,
          replyTo: email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      let autoReplySent = true;
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_AUTOREPLY,
          {
            nome,
            email,
            assunto,
            mensagem,
            to_email: email,
            toEmail: email,
            reply_to: "contato@syntro.com.br",
            replyTo: "contato@syntro.com.br",
          },
          EMAILJS_PUBLIC_KEY,
        );
      } catch {
        autoReplySent = false;
      }

      setFeedback({
        type: "success",
        message: autoReplySent
          ? "Mensagem enviada com sucesso. Você receberá uma confirmação por e-mail."
          : "Mensagem enviada com sucesso. Se você não receber o e-mail de confirmação, verifique a caixa de spam.",
      });
      setFormData(INITIAL_FORM);
    } catch {
      setFeedback({
        type: "error",
        message: "Não foi possível enviar agora. Tente novamente em instantes.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl shadow-lg border border-border bg-card  overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-border bg-gradient-to-br from-primary/10 via-card to-card">
            <p className="text-sm font-medium text-primary">Contato</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fale com Nossos Especialistas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para entender suas necessidades e oferecer a
              melhor solução de automação industrial para sua empresa.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="nome"
                    className="text-sm font-medium text-foreground"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40"
                    placeholder="voce@empresa.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="assunto"
                    className="text-sm font-medium text-foreground"
                  >
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40"
                  >
                    <option>Agendar visita</option>
                    <option>Consulta</option>
                    <option>Orçamento</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Resposta
                  </p>
                  <p className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                    Enviaremos para{" "}
                    <span className="text-foreground font-medium">
                      contato@syntro.com.br
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="mensagem"
                  className="text-sm font-medium text-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 resize-y"
                  placeholder="Descreva sua necessidade"
                />
              </div>

              {feedback.message ? (
                <div
                  role="status"
                  className={`rounded-xl px-4 py-3 text-sm border ${
                    feedback.type === "success"
                      ? "bg-green-500/10 text-green-700 border-green-500/20"
                      : "bg-red-500/10 text-red-700 border-red-500/20"
                  }`}
                >
                  {feedback.message}
                </div>
              ) : null}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Ao enviar, você concorda com a nossa{" "}
                  <Link
                    href="/privacidade"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </p>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-xl"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

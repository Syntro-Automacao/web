"use client";

import { trackCTAClick } from "@/components/analytics/GoogleAnalytics";

// Componentes clientes para links com tracking
export function WhatsAppLink() {
  const handleClick = () => {
    trackCTAClick("whatsapp_contato", "contato_page");
  };

  return (
    <a
      href="https://wa.me/+5519996362101?text=Olá! Gostaria de saber mais sobre os serviços da Syntro Automação."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
      onClick={handleClick}
    >
      Iniciar Conversa
    </a>
  );
}

export function EmailLink() {
  const handleClick = () => {
    trackCTAClick("email_contato", "contato_page");
  };

  return (
    <a
      href="mailto:contato@syntro.com.br"
      className="text-purple-600 font-medium hover:text-purple-700"
      onClick={handleClick}
    >
      contato@syntro.com.br
    </a>
  );
}

export function VisitaTecnicaLink() {
  const handleClick = () => {
    trackCTAClick("visita_tecnica", "contato_page");
  };

  return (
    <a
      href="https://wa.me/+5519996362101?text=Olá! Gostaria de agendar uma visita técnica para avaliar minha necessidade de automação industrial."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
      onClick={handleClick}
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      Solicitar Visita Técnica
    </a>
  );
}

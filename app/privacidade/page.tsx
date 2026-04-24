import type { Metadata } from "next";
import { createSEO } from "@/components/seo/useSEO";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";

export const metadata: Metadata = createSEO({
  title: "Política de Privacidade",
  description:
    "Saiba como o site da Syntro Automação Industrial trata dados pessoais, cookies e redirecionamentos para WhatsApp, em conformidade com a LGPD.",
  keywords: ["privacidade", "lgpd", "cookies", "syntro"],
});

export default function PrivacidadePage() {
  return <PrivacyPolicy />;
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-CHK228GNT6";

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID && pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);
}

// Função para tracking de eventos
export const trackEvent = (
  action: string,
  category?: string,
  label?: string,
  value?: number,
) => {
  if (!GA_MEASUREMENT_ID) return;

  const eventParams: any = { action };

  if (category) eventParams.category = category;
  if (label) eventParams.label = label;
  if (value !== undefined) eventParams.value = value;

  ReactGA.event(eventParams);
};

// Função para tracking de formulários
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
};

// Função para tracking de cliques em CTAs
export const trackCTAClick = (ctaName: string, location?: string) => {
  trackEvent(
    "cta_click",
    "engagement",
    `${ctaName}${location ? `_${location}` : ""}`,
  );
};

// Função para tracking de visualizações de página
export const trackPageView = (page: string, title?: string) => {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.send({
    hitType: "pageview",
    page,
    title,
  });
};

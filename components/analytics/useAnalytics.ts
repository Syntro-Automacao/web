"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-CHK228GNT6";
const CONSENT_KEY = "syntro_cookie_consent";

function getConsentValue() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function isAnalyticsEnabled() {
  const raw = getConsentValue();
  if (!raw) return false;
  if (raw === "accepted") return true;
  if (raw === "dismissed") return false;

  try {
    const parsed = JSON.parse(raw);
    return Boolean(parsed?.analytics);
  } catch {
    return false;
  }
}

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_MEASUREMENT_ID && isAnalyticsEnabled()) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID && isAnalyticsEnabled() && pathname) {
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
  if (!GA_MEASUREMENT_ID || !isAnalyticsEnabled()) return;

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
  if (!GA_MEASUREMENT_ID || !isAnalyticsEnabled()) return;

  ReactGA.send({
    hitType: "pageview",
    page,
    title,
  });
};

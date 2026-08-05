"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-CHK228GNT6";
const CONSENT_KEY = "syntro_cookie_consent";

let initialized = false;

type ParsedConsent =
  | { analytics?: boolean; marketing?: boolean; necessary?: boolean }
  | "accepted"
  | "dismissed"
  | null;

function safeParseConsent(raw: string | null): ParsedConsent {
  if (!raw) return null;
  if (raw === "accepted") return "accepted";
  if (raw === "dismissed") return "dismissed";
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") {
      return parsed as {
        analytics?: boolean;
        marketing?: boolean;
        necessary?: boolean;
      };
    }
    return null;
  } catch {
    return null;
  }
}

function isConsentEnabled(
  parsed: ParsedConsent,
  category: "analytics" | "marketing",
): boolean {
  if (parsed === "accepted") return true;
  if (parsed === "dismissed") return false;
  if (parsed && typeof parsed === "object") {
    return Boolean(parsed[category]);
  }
  return false;
}

function getConsentValue(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function isAnalyticsEnabled(): boolean {
  return isConsentEnabled(safeParseConsent(getConsentValue()), "analytics");
}

export function isMarketingEnabled(): boolean {
  return isConsentEnabled(safeParseConsent(getConsentValue()), "marketing");
}

function getConsentStateLabel(): "granted" | "denied" | "partial" | "unknown" {
  const parsed = safeParseConsent(getConsentValue());
  if (!parsed) return "unknown";
  if (parsed === "accepted") return "granted";
  if (parsed === "dismissed") return "denied";
  if (parsed && typeof parsed === "object") {
    const a = Boolean(parsed.analytics);
    const m = Boolean(parsed.marketing);
    if (a && m) return "granted";
    if (!a && !m) return "denied";
    return "partial";
  }
  return "unknown";
}

function inferContentGroup(pathname: string | null | undefined): string {
  const p = String(pathname ?? "/").trim();
  if (!p || p === "/") return "home";
  if (p.startsWith("/contato")) return "contato";
  if (p.startsWith("/obrigado")) return "contato";
  if (p.startsWith("/privacidade")) return "legal";
  if (p.startsWith("/robo-arm")) return "produtos";
  if (p.startsWith("/robos-cartesianos")) return "produtos";
  if (p.startsWith("/softwares-industriais")) return "produtos";
  if (p.startsWith("/equipamentos-especiais")) return "produtos";
  if (p.startsWith("/ferramental-para-robos")) return "produtos";
  if (/^\/robos-cartesianos-/.test(p)) return "seo_local";
  if (/^\/\[[^\]]+\]/.test(p)) return "dinamica";
  return "outros";
}

type StandardParams = {
  page_path?: string;
  page_location?: string;
  page_title?: string;
  page_referrer?: string;
  content_group?: string;
  consent_state?: string;
  site_environment?: "development" | "production";
  screen_resolution?: string;
  viewport_size?: string;
  user_language?: string;
};

export function getStandardParams(
  override: Partial<StandardParams> = {},
): StandardParams {
  if (typeof window === "undefined") {
    return {
      consent_state: "unknown",
      ...override,
    };
  }

  const pathname =
    override.page_path ?? window.location.pathname + window.location.search;
  const viewportW = window.innerWidth ?? 0;
  const viewportH = window.innerHeight ?? 0;
  const screenW = window.screen?.width ?? 0;
  const screenH = window.screen?.height ?? 0;

  return {
    page_path: pathname,
    page_location: window.location.href,
    page_title: typeof document !== "undefined" ? document.title : undefined,
    page_referrer:
      typeof document !== "undefined" ? document.referrer : undefined,
    content_group: inferContentGroup(pathname),
    consent_state: getConsentStateLabel(),
    site_environment:
      window.location.hostname === "syntro.com.br"
        ? "production"
        : "development",
    screen_resolution: screenW && screenH ? `${screenW}x${screenH}` : undefined,
    viewport_size:
      viewportW && viewportH ? `${viewportW}x${viewportH}` : undefined,
    user_language: window.navigator?.language ?? undefined,
    ...override,
  };
}

function setGa4UserProperties(): void {
  try {
    if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;
    const gtag = (window as unknown as { gtag?: unknown }).gtag;
    if (typeof gtag !== "function") return;
    const params = getStandardParams();
    gtag("set", "user_properties", {
      consent_state: params.consent_state,
      site_environment: params.site_environment,
      user_language: params.user_language,
    });
  } catch {
    return;
  }
}

export function ensureGaInitialized(): boolean {
  if (typeof window === "undefined") return false;
  if (!GA_MEASUREMENT_ID) return false;
  if (!isAnalyticsEnabled()) return false;
  if (initialized) return true;
  try {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      testMode: false,
      gaOptions: {
        anonymize_ip: true,
      },
    });
    setGa4UserProperties();
    initialized = true;
    return true;
  } catch {
    initialized = false;
    return false;
  }
}

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    ensureGaInitialized();
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isAnalyticsEnabled()) return;
    if (!pathname) return;
    ensureGaInitialized();
    trackPageView(pathname);
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
  if (!ensureGaInitialized()) return;

  const eventParams: Record<string, string | number> = {
    ...(getStandardParams() as Record<string, string | number>),
    action,
  };

  if (category) eventParams.category = category;
  if (label) eventParams.label = label;
  if (value !== undefined) eventParams.value = value;

  ReactGA.event(action, eventParams);
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
  if (!ensureGaInitialized()) return;

  const params = getStandardParams({
    page_path: page,
    page_title: title,
  });

  try {
    ReactGA.gtag("event", "page_view", {
      ...params,
    });
  } catch {
    ReactGA.send({
      hitType: "pageview",
      page: params.page_path ?? page,
      title: params.page_title ?? title,
    });
  }
};

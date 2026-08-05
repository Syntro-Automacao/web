"use client";

import ReactGA from "react-ga4";
import { getStandardParams, ensureGaInitialized } from "./useAnalytics";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-CHK228GNT6";

const ADS_FORM_SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_SEND_TO;
const ADS_WHATSAPP_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_SEND_TO;
const ADS_PHONE_SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_SEND_TO;

const CONSENT_KEY = "syntro_cookie_consent";
const GENERATE_LEAD_DEDUP_KEY = "syntro_generate_lead_fired";
const GENERATE_LEAD_DEDUP_TTL_MS = 2 * 60 * 60 * 1000;

export type SyntroEventName =
  | "generate_lead"
  | "whatsapp_click"
  | "phone_click";

export type SyntroEventParams = {
  page_path?: string;
  page_location?: string;
  page_title?: string;
  cta_name?: string;
  cta_location?: string;
  form_name?: string;
  phone_number?: string;
  transaction_id?: string;
  method?: "emailjs" | "obrigado_redirect";
  [key: string]: string | number | boolean | undefined;
};

type GtagFunction = (
  command: "event" | "config" | "consent" | "js",
  target?: string | Date,
  config?: Record<string, unknown>,
) => void;

type WindowWithGtag = Window & {
  gtag?: GtagFunction;
  dataLayer?: unknown[];
};

type ConsentState = {
  analytics?: boolean;
  marketing?: boolean;
  necessary?: boolean;
};

function safeParseConsent(
  raw: string | null,
): ConsentState | "accepted" | "dismissed" | null {
  if (!raw) return null;
  if (raw === "accepted") return "accepted";
  if (raw === "dismissed") return "dismissed";
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") {
      return parsed as ConsentState;
    }
    return null;
  } catch {
    return null;
  }
}

function isConsentCategoryEnabled(
  parsed: ReturnType<typeof safeParseConsent>,
  category: "analytics" | "marketing",
): boolean {
  if (parsed === "accepted") return true;
  if (parsed === "dismissed") return false;
  if (parsed && typeof parsed === "object") {
    return Boolean(parsed[category]);
  }
  return false;
}

export function isAnalyticsEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return isConsentCategoryEnabled(safeParseConsent(raw), "analytics");
  } catch {
    return false;
  }
}

export function isMarketingEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return isConsentCategoryEnabled(safeParseConsent(raw), "marketing");
  } catch {
    return false;
  }
}

function getSafeWindow(): WindowWithGtag | null {
  if (typeof window === "undefined") return null;
  return window as WindowWithGtag;
}

export function getPagePath(): string | undefined {
  return getStandardParams().page_path as string | undefined;
}

export function getPageLocation(): string | undefined {
  return getStandardParams().page_location as string | undefined;
}

export function getPageTitle(): string | undefined {
  return getStandardParams().page_title as string | undefined;
}

function generateTransactionId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).slice(2, 10);
  return `syntro_${timestamp}_${randomPart}`;
}

function shouldFireGenerateLead(): { ok: boolean; transactionId: string } {
  const transactionId = generateTransactionId();
  if (typeof window === "undefined") return { ok: false, transactionId };
  try {
    const raw = sessionStorage.getItem(GENERATE_LEAD_DEDUP_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { ts: number; id: string };
      if (parsed && typeof parsed.ts === "number") {
        const age = Date.now() - parsed.ts;
        if (age < GENERATE_LEAD_DEDUP_TTL_MS) {
          return { ok: false, transactionId: parsed.id ?? transactionId };
        }
      }
    }
    sessionStorage.setItem(
      GENERATE_LEAD_DEDUP_KEY,
      JSON.stringify({ ts: Date.now(), id: transactionId }),
    );
    return { ok: true, transactionId };
  } catch {
    return { ok: true, transactionId };
  }
}

export function markGenerateLeadPending(): string {
  const { transactionId } = shouldFireGenerateLead();
  return transactionId;
}

type AdsConversionPayload = Record<string, unknown> & {
  event_callback?: () => void;
  event_timeout?: number;
};

function fireAdsConversion(
  sendTo: string | undefined,
  payload: AdsConversionPayload,
): Promise<void> {
  return new Promise<void>((resolve) => {
    if (!sendTo) {
      resolve();
      return;
    }
    if (!isMarketingEnabled()) {
      resolve();
      return;
    }

    const DEFAULT_EVENT_TIMEOUT_MS = 1200;
    const requestedTimeout =
      typeof payload.event_timeout === "number"
        ? payload.event_timeout
        : DEFAULT_EVENT_TIMEOUT_MS;

    const fallbackId = window.setTimeout(() => {
      payload.event_callback?.();
      resolve();
    }, requestedTimeout);

    const safePayload: AdsConversionPayload = {
      ...payload,
      event_timeout: requestedTimeout,
      event_callback: () => {
        window.clearTimeout(fallbackId);
        payload.event_callback?.();
        resolve();
      },
    };

    try {
      const win = getSafeWindow();
      if (!win || !win.gtag || typeof win.gtag !== "function") {
        window.clearTimeout(fallbackId);
        safePayload.event_callback?.();
        resolve();
        return;
      }
      win.gtag("event", "conversion", {
        send_to: sendTo,
        ...safePayload,
      });
    } catch {
      window.clearTimeout(fallbackId);
      safePayload.event_callback?.();
      resolve();
      return;
    }
  });
}

function fireGa4Event(
  eventName: SyntroEventName,
  params: SyntroEventParams,
): void {
  if (!isAnalyticsEnabled()) return;
  try {
    ensureGaInitialized();
    ReactGA.event(eventName, { ...params });
  } catch {
    return;
  }
}

export function fireEvent(
  eventName: SyntroEventName,
  params: SyntroEventParams = {},
): void {
  void fireEventAsync(eventName, params);
}

export async function fireEventAsync(
  eventName: SyntroEventName,
  params: SyntroEventParams = {},
): Promise<void> {
  if (typeof window === "undefined") return;

  const standard = getStandardParams();
  const enriched: SyntroEventParams = {
    ...standard,
    ...params,
  } as SyntroEventParams;

  if (eventName === "generate_lead") {
    const dedup = shouldFireGenerateLead();
    if (!dedup.ok) return;
    enriched.transaction_id = enriched.transaction_id ?? dedup.transactionId;
  }

  fireGa4Event(eventName, enriched);

  if (!isMarketingEnabled()) return;

  if (eventName === "generate_lead") {
    await fireAdsConversion(ADS_FORM_SEND_TO, {
      transaction_id: enriched.transaction_id,
    });
  } else if (eventName === "whatsapp_click") {
    await fireAdsConversion(ADS_WHATSAPP_SEND_TO, {
      cta_name: enriched.cta_name,
      cta_location: enriched.cta_location,
      phone_number: enriched.phone_number,
    });
  } else if (eventName === "phone_click") {
    await fireAdsConversion(ADS_PHONE_SEND_TO, {
      cta_name: enriched.cta_name,
      cta_location: enriched.cta_location,
      phone_number: enriched.phone_number,
    });
  }
}

export function fireGenerateLead(params: SyntroEventParams = {}): string {
  void fireGenerateLeadAsync(params);
  return (params.transaction_id as string) ?? markGenerateLeadPending();
}

export async function fireGenerateLeadAsync(
  params: SyntroEventParams = {},
): Promise<string> {
  const finalParams: SyntroEventParams = {
    form_name: "contato_syntro",
    method: "emailjs",
    ...params,
  };
  await fireEventAsync("generate_lead", finalParams);
  return (finalParams.transaction_id as string) ?? markGenerateLeadPending();
}

export function fireWhatsAppClick(params: SyntroEventParams = {}): void {
  void fireWhatsAppClickAsync(params);
}

export function fireWhatsAppClickAsync(
  params: SyntroEventParams = {},
): Promise<void> {
  return fireEventAsync("whatsapp_click", {
    cta_name: "whatsapp_generic",
    cta_location: "site",
    ...params,
  });
}

export function firePhoneClick(params: SyntroEventParams = {}): void {
  void firePhoneClickAsync(params);
}

export function firePhoneClickAsync(
  params: SyntroEventParams = {},
): Promise<void> {
  return fireEventAsync("phone_click", {
    cta_name: "phone_generic",
    cta_location: "site",
    ...params,
  });
}

export function handleWhatsAppAnchorClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  params: SyntroEventParams = {},
): void {
  void handleWhatsAppAnchorClickAsync(event, params);
}

export async function handleWhatsAppAnchorClickAsync(
  event: React.MouseEvent<HTMLAnchorElement>,
  params: SyntroEventParams = {},
): Promise<void> {
  const target = event.currentTarget;
  await fireWhatsAppClickAsync({
    cta_name: params.cta_name ?? target.dataset.trackCta ?? "whatsapp_link",
    cta_location:
      params.cta_location ??
      target.dataset.trackLocation ??
      getPagePath() ??
      "site",
    ...params,
  });
}

export function handlePhoneAnchorClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  params: SyntroEventParams = {},
): void {
  void handlePhoneAnchorClickAsync(event, params);
}

export async function handlePhoneAnchorClickAsync(
  event: React.MouseEvent<HTMLAnchorElement>,
  params: SyntroEventParams = {},
): Promise<void> {
  const target = event.currentTarget;
  const rawPhone = target.href ?? "";
  const match = rawPhone.match(/tel:([^?]+)/);
  const phoneNumber = match
    ? decodeURIComponent(match[1]).replace(/\s+/g, "")
    : undefined;
  await firePhoneClickAsync({
    cta_name: params.cta_name ?? target.dataset.trackCta ?? "phone_link",
    cta_location:
      params.cta_location ??
      target.dataset.trackLocation ??
      getPagePath() ??
      "site",
    phone_number: phoneNumber,
    ...params,
  });
}

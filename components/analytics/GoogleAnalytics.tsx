"use client";

import { Suspense, type AnchorHTMLAttributes, useEffect, useState } from "react";
import { trackCTAClick, useAnalytics } from "./useAnalytics";

function AnalyticsComponent() {
  useAnalytics();
  return null;
}

const CONSENT_KEY = "syntro_cookie_consent";

function isAnalyticsEnabled() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    if (raw === "accepted") return true;
    if (raw === "dismissed") return false;
    const parsed = JSON.parse(raw);
    return Boolean(parsed?.analytics);
  } catch {
    return false;
  }
}

export function TrackedCtaLink({
  ctaName,
  location,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  ctaName: string;
  location?: string;
}) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackCTAClick(ctaName, location);
        onClick?.(event);
      }}
    />
  );
}

export function GoogleAnalytics() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const update = () => setIsEnabled(isAnalyticsEnabled());
    const onConsentChange = () => update();

    update();
    window.addEventListener("storage", update);
    window.addEventListener("syntro:cookie-consent", onConsentChange);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("syntro:cookie-consent", onConsentChange);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <Suspense fallback={null}>
      <AnalyticsComponent />
    </Suspense>
  );
}

// Re-exportar funções úteis para compatibilidade
export {
  trackEvent,
  trackFormSubmission,
  trackCTAClick,
  trackPageView,
} from "./useAnalytics";

"use client";

import {
  Suspense,
  type AnchorHTMLAttributes,
  type MouseEvent,
  useEffect,
  useState,
} from "react";
import { trackCTAClick, useAnalytics } from "./useAnalytics";
import {
  fireWhatsAppClick,
  firePhoneClick,
  handleWhatsAppAnchorClick,
  handlePhoneAnchorClick,
  type SyntroEventParams,
} from "./conversionTracking";

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

type TrackedWhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  ctaName?: string;
  location?: string;
  trackingParams?: SyntroEventParams;
};

export function TrackedWhatsAppLink({
  ctaName,
  location,
  trackingParams,
  onClick,
  children,
  ...props
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      {...props}
      data-syntro-auto-tracked="1"
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        const target = event.currentTarget;
        target.setAttribute("data-syntro-auto-tracked", "1");
        const derived: SyntroEventParams = {
          cta_name: ctaName,
          cta_location: location,
          ...trackingParams,
        };
        handleWhatsAppAnchorClick(event, derived);
        fireWhatsAppClick(derived);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

type TrackedPhoneLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  ctaName?: string;
  location?: string;
  trackingParams?: SyntroEventParams;
};

export function TrackedPhoneLink({
  ctaName,
  location,
  trackingParams,
  onClick,
  children,
  ...props
}: TrackedPhoneLinkProps) {
  return (
    <a
      {...props}
      data-syntro-auto-tracked="1"
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        const target = event.currentTarget;
        target.setAttribute("data-syntro-auto-tracked", "1");
        const derived: SyntroEventParams = {
          cta_name: ctaName,
          cta_location: location,
          ...trackingParams,
        };
        handlePhoneAnchorClick(event, derived);
        firePhoneClick(derived);
        onClick?.(event);
      }}
    >
      {children}
    </a>
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

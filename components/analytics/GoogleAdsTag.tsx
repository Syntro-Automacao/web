"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const DEFAULT_ADS_ID = "AW-828141749";
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? DEFAULT_ADS_ID;
const CONSENT_KEY = "syntro_cookie_consent";

function getConsentValue() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function readConsent() {
  const raw = getConsentValue();
  if (!raw) return { analytics: false, marketing: false };
  if (raw === "accepted") return { analytics: true, marketing: true };
  if (raw === "dismissed") return { analytics: false, marketing: false };

  try {
    const parsed = JSON.parse(raw);
    return {
      analytics: Boolean(parsed?.analytics),
      marketing: Boolean(parsed?.marketing),
    };
  } catch {
    return { analytics: false, marketing: false };
  }
}

export function GoogleAdsTag() {
  const [consentState, setConsentState] = useState(() => readConsent());

  useEffect(() => {
    const update = () => {
      setConsentState(readConsent());
    };
    const onConsentChange = () => update();

    update();
    window.addEventListener("storage", update);
    window.addEventListener("syntro:cookie-consent", onConsentChange);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("syntro:cookie-consent", onConsentChange);
    };
  }, []);

  useEffect(() => {
    try {
      const gtag = (window as unknown as { gtag?: unknown }).gtag;
      if (typeof gtag !== "function") return;
      gtag("consent", "update", {
        ad_storage: consentState.marketing ? "granted" : "denied",
        ad_user_data: consentState.marketing ? "granted" : "denied",
        ad_personalization: consentState.marketing ? "granted" : "denied",
        analytics_storage: consentState.analytics ? "granted" : "denied",
      });
    } catch {
      return;
    }
  }, [consentState.analytics, consentState.marketing]);

  if (!ADS_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            gtag('js', new Date());
            gtag('config', '${ADS_ID}');
          `,
        }}
      />
    </>
  );
}

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

function isMarketingEnabled() {
  const raw = getConsentValue();
  if (!raw) return false;
  if (raw === "accepted") return true;
  if (raw === "dismissed") return false;

  try {
    const parsed = JSON.parse(raw);
    return Boolean(parsed?.marketing);
  } catch {
    return false;
  }
}

export function GoogleAdsTag() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsEnabled(isMarketingEnabled());
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

  if (!ADS_ID || !isEnabled) return null;

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
            gtag('js', new Date());
            gtag('config', '${ADS_ID}');
          `,
        }}
      />
    </>
  );
}

"use client";

import { Suspense, type AnchorHTMLAttributes } from "react";
import { trackCTAClick, useAnalytics } from "./useAnalytics";

function AnalyticsComponent() {
  useAnalytics();
  return null;
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

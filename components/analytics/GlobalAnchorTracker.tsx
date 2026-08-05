"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { fireWhatsAppClick, firePhoneClick } from "./conversionTracking";

const TRACKED_FLAG = "data-syntro-auto-tracked";

function isWhatsAppHref(href: string): boolean {
  return /^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(
    href,
  );
}

function isTelHref(href: string): boolean {
  return /^tel:/i.test(href);
}

type TrackKind = "whatsapp" | "phone" | null;

function detectKind(href: string): TrackKind {
  if (isWhatsAppHref(href)) return "whatsapp";
  if (isTelHref(href)) return "phone";
  return null;
}

function extractPhoneFromTel(href: string): string | undefined {
  const match = href.match(/^tel:([^?]+)/i);
  if (!match) return undefined;
  try {
    return decodeURIComponent(match[1]).replace(/\s+/g, "");
  } catch {
    return match[1].replace(/\s+/g, "");
  }
}

export function GlobalAnchorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      const kind = detectKind(href);
      if (!kind) return;

      const alreadyTracked = anchor.getAttribute(TRACKED_FLAG) === "1";
      if (alreadyTracked) return;
      anchor.setAttribute(TRACKED_FLAG, "1");

      const ctaName =
        anchor.dataset.trackCta ??
        (kind === "whatsapp" ? "whatsapp_auto" : "phone_auto");
      const ctaLocation = anchor.dataset.trackLocation ?? pathname ?? "site";

      try {
        if (kind === "whatsapp") {
          fireWhatsAppClick({
            cta_name: ctaName,
            cta_location: ctaLocation,
            page_path: pathname ?? undefined,
          });
        } else {
          firePhoneClick({
            cta_name: ctaName,
            cta_location: ctaLocation,
            phone_number: extractPhoneFromTel(href),
            page_path: pathname ?? undefined,
          });
        }
      } catch {
        return;
      }
    }

    window.addEventListener("click", handleClick, true);
    return () => {
      window.removeEventListener("click", handleClick, true);
    };
  }, [pathname]);

  return null;
}

export default GlobalAnchorTracker;

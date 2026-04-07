"use client";

import { ReactNode } from "react";
import { SectionReveal3D } from "@/components/motion/SectionReveal3D";

type RevealIfProps = {
  children: ReactNode;
  enabled?: boolean;
  className?: string;
  id?: string;
  direction?: "left" | "right" | "center";
  rotateStart?: number;
  rotateEnd?: number;
  yStart?: number;
  xStart?: number;
  scaleStart?: number;
  perspective?: number;
  duration?: number;
  delay?: number;
  mobileDisabled?: boolean;
  once?: boolean;
};

export function RevealIf({
  children,
  enabled = false,
  ...props
}: RevealIfProps) {
  if (!enabled) {
    return <>{children}</>;
  }

  return <SectionReveal3D {...props}>{children}</SectionReveal3D>;
}

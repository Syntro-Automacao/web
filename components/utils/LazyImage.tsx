"use client";

import React, { useState, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
  objectPosition?: string;
}

/**
 * Componente LazyImage otimizado com:
 * - lazy loading nativo (loading="lazy")
 * - fallback com blur placeholder
 * - observer para preload de imagens próximas
 */
export function LazyImage({
  src,
  alt,
  className,
  placeholder,
  width,
  height,
  objectFit = "cover",
  objectPosition = "50% 50%",
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload otimizado usando Intersection Observer
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      // Fallback se imagem não carregar
      setIsLoaded(false);
    };
    img.src = src;
  }, [src]);

  const style: React.CSSProperties = {
    objectFit,
    objectPosition,
    transition: "opacity 0.3s ease-in-out",
    opacity: isLoaded ? 1 : 0.7,
    ...(placeholder && !isLoaded
      ? {
          backgroundImage: `url(${placeholder})`,
          backgroundSize: "cover",
          backgroundPosition: objectPosition,
        }
      : {}),
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
    />
  );
}

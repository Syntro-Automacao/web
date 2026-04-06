import { useState, useEffect } from "react";
import { GearsSpinner } from "./gears-spinner";

interface SimpleLoadingContainerProps {
  src: string;
  alt: string;
  className?: string;
  spinnerSize?: number;
  spinnerText?: string;
  minHeight?: number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  onLoad?: () => void;
  onError?: () => void;
}

export function SimpleLoadingContainer({
  src,
  alt,
  className = "",
  spinnerSize = 80,
  spinnerText = "Carregando imagem...",
  minHeight = 400,
  objectFit = "contain",
  onLoad,
  onError,
}: SimpleLoadingContainerProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Sistema de loading confiável com HTML img puro
  useEffect(() => {
    const img = new window.Image();
    img.src = src;

    const handleLoad = () => {
      setImageLoaded(true);
      onLoad?.();
    };

    const handleError = () => {
      setImageError(true);
      setImageLoaded(true);
      onError?.();
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    // Se a imagem já estiver carregada no cache
    if (img.complete) {
      handleLoad();
    }

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src, onLoad, onError]);

  return (
    <div
      className={`flex justify-center items-center ${className}`}
      style={{ minHeight: `${minHeight}px` }}
    >
      {!imageLoaded && <GearsSpinner size={spinnerSize} text={spinnerText} />}

      <img
        src={src}
        alt={alt}
        className={`${imageLoaded ? "block" : "hidden"} object-${objectFit} w-full h-full`}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
        loading="lazy"
      />

      {imageError && imageLoaded && (
        <div className="text-gray-400 text-center p-4">
          <span className="text-sm">Erro ao carregar imagem</span>
        </div>
      )}
    </div>
  );
}

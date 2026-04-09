import Image from "next/image";

interface OptimizedHeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function OptimizedHeroImage({
  src,
  alt,
  priority = true,
  className,
}: OptimizedHeroImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        quality={85}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,..."
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
}

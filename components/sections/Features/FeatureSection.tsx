import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TypingText } from "@/components/motion/TypingText";

type EnterFrom =
  | "left"
  | "right"
  | "up"
  | "down"
  | "topRight"
  | "topLeft"
  | "bottomRight"
  | "bottomLeft";

type FeatureSectionProps = {
  id: string;
  title: string;
  description: string;

  imageSrc: string;
  imageAlt: string;

  imageEnterFrom?: EnterFrom;

  /** Desktop: true = texto primeiro (col 1), imagem depois (col 2) */
  contentFirst?: boolean;

  /** Mobile: inverte ordem (bom p/ padronizar visual) */
  reverseOnMobile?: boolean;

  /** Ajustes de animação */
  imageScaleFrom?: number;
  imageDistance?: string | number;

  /** Sensação de “controle” no scroll */
  minHeightClass?: string; // ex: "min-h-[110vh]"
};

export function FeatureSection({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  imageEnterFrom = "right",
  contentFirst = false,
  reverseOnMobile = false,
  imageScaleFrom = 0.85,
  imageDistance = "120%",
  minHeightClass = "",
}: FeatureSectionProps) {
  // define ordem no mobile
  const mobileOrder = reverseOnMobile
    ? { visual: "order-2", content: "order-1" }
    : { visual: "order-1", content: "order-2" };

  // define ordem no desktop
  const desktopOrder = contentFirst
    ? { visual: "lg:order-2", content: "lg:order-1" }
    : { visual: "lg:order-1", content: "lg:order-2" };

  return (
    <section
      id={id}
      className={[
        "max-w-[1920px] mx-auto py-24 lg:py-32 bg-card/30",
        "scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32",
        minHeightClass,
      ].join(" ")}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <ScrollReveal
            className={[
              "relative w-full aspect-video",
              mobileOrder.visual,
              desktopOrder.visual,
            ].join(" ")}
            direction={imageEnterFrom}
            distance={imageDistance}
            scaleFrom={imageScaleFrom}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="absolute object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ScrollReveal>

          {/* Content */}
          <div
            className={[mobileOrder.content, desktopOrder.content].join(" ")}
          >
            <TypingText
              as="h3"
              text={title}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance"
            />
            <TypingText
              as="p"
              text={description}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

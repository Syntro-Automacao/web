import { UltraLoadingGears } from "@/components/ui/ultra-loading-gears";

type FeatureSectionProps = {
  id: string;
  title: string;
  description: string;
  description2?: string;

  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;

  /** Desktop: true = texto primeiro (col 1), imagem depois (col 2) */
  contentFirst?: boolean;

  /** Mobile: inverte ordem (bom p/ padronizar visual) */
  reverseOnMobile?: boolean;
};

export function FeatureSection({
  id,
  title,
  description,
  description2,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  contentFirst = false,
  reverseOnMobile = false,
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
        "scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-x-clip",
        "bg-(--background)",
      ].join(" ")}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual - Imagem estática sem animação */}
          <div
            className={[
              "relative w-full max-w-5xl mx-auto lg:mx-0",
              mobileOrder.visual,
              desktopOrder.visual,
            ].join(" ")}
          >
            <div className="flex justify-center">
              <UltraLoadingGears
                src={imageSrc}
                alt={imageAlt}
                className="max-w-[600px]"
                minHeight={400}
                spinnerSize={80}
                spinnerText="Carregando imagem..."
                objectFit="contain"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={[mobileOrder.content, desktopOrder.content].join(" ")}
          >
            {title && (
              <h3 className="xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
                {title}
              </h3>
            )}

            <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed mb-8">
              {description}
            </p>

            {description2 && (
              <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed mb-8">
                {description2}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

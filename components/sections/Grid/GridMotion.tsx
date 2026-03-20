import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";

interface GridMotionProps {
  items?: string[];
  gradientColor?: string;
}

const GridMotion = ({
  items = [],
  gradientColor = "black",
}: GridMotionProps) => {
  const gridRef = useRef(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef(
    typeof window !== "undefined" ? window.innerWidth / 2 : 800,
  );

  const totalItems = 20;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`,
  );
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Mantém lagSmoothing padrão para melhor performance
    gsap.ticker.lagSmoothing(0.8);

    let isMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      isMoving = true;
    };

    const updateMotion = () => {
      if (!isMoving) return;
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      const windowWidth = window.innerWidth;
      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / windowWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
      isMoving = false;
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section className="intro">
        <div className="gridMotion-container">
          {[...Array(3)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => {
                if (el) rowRefs.current[rowIndex] = el;
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 6 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div
                      className="row__item-inner"
                      style={{ backgroundColor: "#111" }}
                    >
                      {typeof content === "string" &&
                      (content.startsWith("http") ||
                        content.startsWith("/assets/")) ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        ></div>
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;

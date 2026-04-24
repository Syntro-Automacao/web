"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "syntro_cookie_consent";

function readStoredValue() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredValue(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    return;
  }
}

function CookieConsent({
  privacyPolicyHref = "/privacidade",
  companyName = "Syntro Automação Industrial",
  onAccept = () => {},
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = readStoredValue();
    if (!stored) setIsVisible(true);
  }, []);

  const motionVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 20, filter: "blur(6px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: 20, filter: "blur(6px)" },
    }),
    [],
  );

  const handleAccept = () => {
    writeStoredValue("accepted");
    setIsVisible(false);
    onAccept();
  };

  const handleClose = () => {
    writeStoredValue("dismissed");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={motionVariants}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-background/90 backdrop-blur shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)]">
            <div className="relative p-5 sm:p-6">
              <button
                type="button"
                onClick={handleClose}
                aria-label="Fechar"
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="pr-10">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-10 w-10 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold text-foreground">
                      Cookies e privacidade
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {companyName} pode usar cookies e tecnologias semelhantes
                      para melhorar sua experiência e, quando habilitado, medir
                      desempenho do site. Você pode ler mais na{" "}
                      <Link
                        href={privacyPolicyHref}
                        className="font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Política de Privacidade
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
                  <Button
                    type="button"
                    onClick={handleAccept}
                    className="rounded-xl"
                  >
                    Aceitar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default CookieConsent;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/Header/ThemeToggle";
import { Logo } from "@/components/icons/logo";
import { navItems } from "@/components/layout/Header/hooks/nav-items";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", href);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Overlay escuro quando menu está aberto - COBRE TODA A TELA! */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "border-b border-border bg-background sm:bg-background md:bg-background"
            : "border-transparent bg-background/0"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <Logo
                className={`h-8 w-auto transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`hover:text-foreground transition-colors text-md font-medium cursor-pointer ${
                    isScrolled ? "text-muted-foreground" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
            </div>

            <div className="flex lg:hidden items-center gap-1">
              <ThemeToggle />
              <button
                className={`p-2 transition-colors duration-300 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu lateral deslizante - FORA do header! */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-72 bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header do menu com botão fechar */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Logo className="h-8 w-auto text-primary" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Conteúdo do menu */}
          <nav className="flex-1 p-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent transition-colors text-sm font-medium py-3 px-4 rounded-lg cursor-pointer"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Rodapé do menu com botão Contato */}
          <div className="p-4 border-t border-border"></div>
        </div>
      </div>
    </>
  );
}

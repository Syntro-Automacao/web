import Link from "next/link";
import { Instagram } from "lucide-react";
import { Logo } from "@/components/icons/logo";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/syntro.com.br",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-3 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-auto text-primary" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformando a indústria brasileira através de robótica e
              automação de alta performance.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1 md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contato@syntro.com.br</li>
              <li>+55 (19) 9 9636-2101</li>
              <li>Campinas, SP - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex justify-center sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Syntro Automação. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

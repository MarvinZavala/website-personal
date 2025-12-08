import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const links = [
    { href: "/", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "mailto:hello@marvinzavala.dev", label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-serif font-medium tracking-tight hover:text-primary transition-colors">
            Marvin Zavala
          </a>
        </Link>

        <div className="flex items-center gap-8">
          <div className="flex gap-6 md:gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full px-3 py-1"
          >
            <Globe className="w-3 h-3" />
            <span>{language}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

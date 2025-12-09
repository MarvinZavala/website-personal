import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [location, setLocation] = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const sections = ["about", "services", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -35% 0px" } // Adjust margins for better detection
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "projects", label: t.nav.work },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      if (location !== "/") setLocation("/");
    } else {
      // Fallback for different pages if needed in future
      setLocation("/");
      // Timeout to let hydration happen if navigating back
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <div className="fixed top-6 inset-x-0 mx-auto z-50 w-full flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "pointer-events-auto relative flex items-center justify-between gap-4 py-2 pl-4 pr-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl transition-all duration-300",
            scrolled ? "w-full max-w-2xl bg-black/80" : "w-full max-w-3xl"
          )}
        >
          {/* Logo / Name */}
          <Link href="/">
            <a
              className="text-lg font-serif font-bold tracking-tight text-white px-2 hover:opacity-80 transition-opacity whitespace-nowrap cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              M<span className="hidden sm:inline">arvin</span> Z<span className="hidden sm:inline">avala</span>
            </a>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 font-medium text-sm">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="relative px-4 py-2 rounded-full text-white/80 hover:text-white transition-colors group"
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/10 rounded-full px-3 py-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-white/90 px-4 py-2 rounded-full transition-colors whitespace-nowrap"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle (Simple dot implementation for minimal chic) */}
            <div className="md:hidden flex items-center">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="p-2 bg-white text-black rounded-full"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Nav Overlay (Minimalist) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl transition-all duration-300 pointer-events-auto">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className={cn(
              "text-sm font-medium transition-colors relative",
              activeSection === link.id ? "text-white" : "text-white/60"
            )}
          >
            {link.label}
            {activeSection === link.id && (
              <motion.div
                layoutId="nav-pill-mobile"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
              />
            )}
          </a>
        ))}
      </div>
    </>
  );
}

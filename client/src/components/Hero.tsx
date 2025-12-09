import { motion } from "framer-motion";
import { TypewriterText } from "./TypewriterText";
import { useLanguage } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >


          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-8 text-foreground tracking-tight flex flex-col items-center md:items-start">
            <TypewriterText text={t.hero.titlePart1} delay={0.5} /> <br className="hidden md:block" />
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-serif italic relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent overflow-hidden whitespace-nowrap align-bottom pr-2"
              style={{
                backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3) 0%, transparent 20%), linear-gradient(to right, var(--color-primary), #60a5fa, var(--color-accent))`
              }}
            >
              {t.hero.titlePart2}.
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10 md:ml-2">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:ml-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-shadow"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.viewWork} <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-secondary/50 backdrop-blur-md border border-white/10 text-foreground rounded-full text-lg font-medium hover:bg-secondary/70 transition-colors"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.contactMe}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative localized glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}

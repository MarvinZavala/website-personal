import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-foreground">
            {t.hero.titlePart1} <br className="hidden md:block" />
            <span className="text-muted-foreground italic">{t.hero.titlePart2}</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

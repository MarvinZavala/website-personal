import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

interface ProjectsHeaderProps {
  title: string;
  subtitle: string;
}

export function ProjectsHeader({ title, subtitle }: ProjectsHeaderProps) {
  return (
    <div className="relative mb-24 pt-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="flex h-px w-12 bg-primary/30" />
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-foreground leading-[1.1]"
          >
            {title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3">
                {word}
              </span>
            ))}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex h-24 w-24 rounded-full border border-border items-center justify-center shrink-0 group hover:border-primary/50 transition-colors"
        >
          <ArrowDownRight className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors group-hover:rotate-45 transform duration-500" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 via-border to-transparent mt-12 opacity-50"
      />
      
      {/* Decorative background element */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </div>
  );
}

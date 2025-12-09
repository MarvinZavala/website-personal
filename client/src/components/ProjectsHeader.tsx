import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

interface ProjectsHeaderProps {
  title: string;
  subtitle: string;
}

export function ProjectsHeader({ title, subtitle }: ProjectsHeaderProps) {
  return (
    <div className="relative mb-16 pt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="flex h-px w-12 bg-accent/70" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              {subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-bold text-5xl md:text-7xl text-white leading-none tracking-tight"
          >
            {title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3 drop-shadow-lg">
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
          className="hidden md:flex flex-col items-end gap-2"
        >
          <p className="text-right text-muted-foreground text-sm max-w-[200px]">
            Explorer my recent digital craft & engineering.
          </p>
          <div className="h-2 w-20 bg-primary rounded-full mt-2" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
        className="absolute bottom-[-20px] left-0 right-0 h-px bg-gradient-to-r from-primary via-accent to-transparent opacity-30"
      />

      {/* Decorative background element */}
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </div>
  );
}

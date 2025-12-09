import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useRef } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  index: number;
  description?: string; // Opt-in description
  featured?: boolean; // For Bento Grid layout spanning
}

export function ProjectCard({ id, title, category, image, index, featured = false }: ProjectCardProps) {
  // 3D Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative group rounded-3xl bg-secondary/30 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 ${featured ? "md:col-span-2 md:row-span-2" : "col-span-1"
        }`}
    >
      <Link href={`/project/${id}`}>
        <a className="block h-full cursor-pointer p-2 md:p-3">
          {/* Inner Content with 3D Pop */}
          <div
            style={{ transform: "translateZ(50px)" }}
            className="relative h-full w-full rounded-2xl overflow-hidden bg-background/50"
          >
            {/* Image with Zoom and Tint Effect */}
            <motion.div
              className="w-full h-full absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-top transition-all duration-500 filter grayscale-[0.2] contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100"
              />

              {/* Midnight Tint Overlay - Harmonizes disparate colors */}
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80" />
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">
              <div style={{ transform: "translateZ(20px)" }}>
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary-foreground bg-primary rounded-full uppercase shadow-[0_0_10px_-3px_var(--color-primary)]">
                  {category}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                  {title}
                </h3>

                <div className="flex items-center gap-4 mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <span className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-accent transition-colors">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Reflection Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </a>
      </Link>
    </motion.div>
  );
}

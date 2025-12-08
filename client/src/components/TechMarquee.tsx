import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "React Native", icon: "📱" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Figma", icon: "🎨" },
  // Duplicate for infinite scroll effect
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "React Native", icon: "📱" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Figma", icon: "🎨" },
];

export function TechMarquee() {
  return (
    <div className="relative flex overflow-x-hidden group bg-background/50 backdrop-blur-sm border-y border-border/40 py-8">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default"
          >
            <span className="text-2xl grayscale hover:grayscale-0 transition-all">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

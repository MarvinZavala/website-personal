import { motion } from "framer-motion";
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiFigma,
  SiFirebase
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" }, // Adapts to theme
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" }, // Using React icon for React Native
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  // Duplicate for infinite scroll effect
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
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
            className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default group/item"
          >
            <span className="text-3xl grayscale group-hover/item:grayscale-0 transition-all duration-300 transform group-hover/item:scale-110">
              <tech.icon style={{ color: tech.color }} />
            </span>
            <span className="font-sans tracking-tight">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

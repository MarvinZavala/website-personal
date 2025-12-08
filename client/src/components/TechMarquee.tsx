import { motion } from "framer-motion";

// SVG Icons for technologies
const icons = {
  React: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#61DAFB]" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.625c-5.306 0-9.625-4.319-9.625-9.625S6.694 2.375 12 2.375s9.625 4.319 9.625 9.625-4.319 9.625-9.625 9.625zm0-17.75c-4.475 0-8.125 3.65-8.125 8.125S7.525 20.125 12 20.125s8.125-3.65 8.125-8.125S16.475 3.875 12 3.875z"/><path d="M12 2.375c-2.31 0-4.502.83-6.22 2.35l1.06 1.06C8.26 4.606 10.06 3.875 12 3.875s3.74.731 5.16 1.91l1.06-1.06C16.502 3.205 14.31 2.375 12 2.375zM12 21.625c2.31 0 4.502-.83 6.22-2.35l-1.06-1.06c-1.42 1.179-3.22 1.91-5.16 1.91s-3.74-.731-5.16-1.91l-1.06 1.06c1.718 1.52 3.91 2.35 6.22 2.35z"/><circle cx="12" cy="12" r="2.2"/></svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#3178C6]" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM15.3 19.35c-.9 0-1.575-.278-2.025-.832l1.275-1.605c.3.353.727.525 1.282.525.42 0 .638-.158.638-.473 0-.315-.225-.51-1.058-.817-1.35-.496-2.025-1.223-2.025-2.183 0-1.155.885-1.942 2.655-1.942 1.02 0 1.763.262 2.228.787l-1.163 1.628c-.345-.3-.72-.45-1.125-.45-.375 0-.585.158-.585.472 0 .33.248.525 1.11.848 1.38.517 2.07 1.252 2.07 2.205 0 1.207-.945 1.837-2.835 1.837h-.435zM5.7 19.2h2.25V9.6h3v-2.1h-8.25v2.1h3v9.6z"/></svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-foreground" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.25h-1.5L9.75 9.75v7.5H8.25v-10.5h1.5l5.25 7.5v-7.5h1.5v10.5z"/></svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#339933]" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L1.604 6v12L12 24l10.396-6V6L12 0zm-.396 14.396l-3-1.732v-3.464l3 1.732v3.464zm0-6.928l-3-1.732 3-1.732 3 1.732-3 1.732zm6 1.732l-3 1.732v3.464l3-1.732V9.2z"/></svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#06B6D4]" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
  ),
  "React Native": (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#61DAFB]" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.625c-5.306 0-9.625-4.319-9.625-9.625S6.694 2.375 12 2.375s9.625 4.319 9.625 9.625-4.319 9.625-9.625 9.625zm0-17.75c-4.475 0-8.125 3.65-8.125 8.125S7.525 20.125 12 20.125s8.125-3.65 8.125-8.125S16.475 3.875 12 3.875z"/><path d="M12 2.375c-2.31 0-4.502.83-6.22 2.35l1.06 1.06C8.26 4.606 10.06 3.875 12 3.875s3.74.731 5.16 1.91l1.06-1.06C16.502 3.205 14.31 2.375 12 2.375zM12 21.625c2.31 0 4.502-.83 6.22-2.35l-1.06-1.06c-1.42 1.179-3.22 1.91-5.16 1.91s-3.74-.731-5.16-1.91l-1.06 1.06c1.718 1.52 3.91 2.35 6.22 2.35z"/><circle cx="12" cy="12" r="2.2"/></svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#336791]" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c2.07 0 3.75 1.68 3.75 3.75S14.07 12 12 12s-3.75-1.68-3.75-3.75S9.93 4.5 12 4.5zm0 15c-3.105 0-5.85-1.26-7.8-3.3 2.1-2.4 5.25-3.9 8.7-3.9s6.6 1.5 8.7 3.9c-1.95 2.04-4.695 3.3-7.8 3.3z"/></svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#F24E1E]" xmlns="http://www.w3.org/2000/svg"><path d="M6 12c0 1.657 1.343 3 3 3s3-1.343 3-3V9H9c-1.657 0-3 1.343-3 3zm3-6c-1.657 0-3 1.343-3 3s1.343 3 3 3h3V6H9zm6 0h-3v3h3c1.657 0 3-1.343 3-3s-1.343-3-3-3zm0 6h-3v3h3c1.657 0 3-1.343 3-3s-1.343-3-3-3zM9 15c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3v-3H9z"/></svg>
  ),
};

const technologies = [
  { name: "React", icon: icons.React },
  { name: "TypeScript", icon: icons.TypeScript },
  { name: "Next.js", icon: icons["Next.js"] },
  { name: "Node.js", icon: icons["Node.js"] },
  { name: "Tailwind CSS", icon: icons["Tailwind CSS"] },
  { name: "React Native", icon: icons["React Native"] },
  { name: "PostgreSQL", icon: icons.PostgreSQL },
  { name: "Figma", icon: icons.Figma },
  // Duplicate for infinite scroll effect
  { name: "React", icon: icons.React },
  { name: "TypeScript", icon: icons.TypeScript },
  { name: "Next.js", icon: icons["Next.js"] },
  { name: "Node.js", icon: icons["Node.js"] },
  { name: "Tailwind CSS", icon: icons["Tailwind CSS"] },
  { name: "React Native", icon: icons["React Native"] },
  { name: "PostgreSQL", icon: icons.PostgreSQL },
  { name: "Figma", icon: icons.Figma },
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
              {tech.icon}
            </span>
            <span className="font-sans tracking-tight">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

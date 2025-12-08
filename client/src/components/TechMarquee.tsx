import { motion } from "framer-motion";

// Official Brand SVGs
const icons = {
  React: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#61DAFB]" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.625c-5.306 0-9.625-4.319-9.625-9.625S6.694 2.375 12 2.375s9.625 4.319 9.625 9.625-4.319 9.625-9.625 9.625zm0-17.75c-4.475 0-8.125 3.65-8.125 8.125S7.525 20.125 12 20.125s8.125-3.65 8.125-8.125S16.475 3.875 12 3.875z"/><path d="M12 2.375c-2.31 0-4.502.83-6.22 2.35l1.06 1.06C8.26 4.606 10.06 3.875 12 3.875s3.74.731 5.16 1.91l1.06-1.06C16.502 3.205 14.31 2.375 12 2.375zM12 21.625c2.31 0 4.502-.83 6.22-2.35l-1.06-1.06c-1.42 1.179-3.22 1.91-5.16 1.91s-3.74-.731-5.16-1.91l-1.06 1.06c1.718 1.52 3.91 2.35 6.22 2.35z"/><circle cx="12" cy="12" r="2.2"/></svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#3178C6]" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM15.3 19.35c-.9 0-1.575-.278-2.025-.832l1.275-1.605c.3.353.727.525 1.282.525.42 0 .638-.158.638-.473 0-.315-.225-.51-1.058-.817-1.35-.496-2.025-1.223-2.025-2.183 0-1.155.885-1.942 2.655-1.942 1.02 0 1.763.262 2.228.787l-1.163 1.628c-.345-.3-.72-.45-1.125-.45-.375 0-.585.158-.585.472 0 .33.248.525 1.11.848 1.38.517 2.07 1.252 2.07 2.205 0 1.207-.945 1.837-2.835 1.837h-.435zM5.7 19.2h2.25V9.6h3v-2.1h-8.25v2.1h3v9.6z"/></svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-foreground" xmlns="http://www.w3.org/2000/svg"><path d="M18.665 21.978C16.865 23.255 14.565 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.194-1.25 6.104-3.335 8.361l-2.0-2.383zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c2.25 0 4.33-.746 6.02-2.02L8.204 8.24l.024-2.527L19.25 19.64A9.957 9.957 0 0022 12c0-5.523-4.477-10-10-10zm-2 12.333l.016-5.833h1.996v3.296l4.472 5.73c-.705.534-1.48.98-2.316 1.31L10 14.333z"/></svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#339933]" xmlns="http://www.w3.org/2000/svg"><path d="M12.007 0C6.12 0 1.14 4.276.2 10.02c-.173 1.056.402 1.63 1.256 1.63.53 0 .822-.244 1.088-.806.91-1.92 2.148-3.085 3.968-4.04 1.762-.924 3.737-1.185 5.706-.88 2.502.388 4.416 1.954 5.253 4.316l-3.266-1.886c-.543-.314-1.226-.314-1.77 0l-5.657 3.264c-.543.314-.885.906-.885 1.533v6.53c0 .627.342 1.22.885 1.533l5.657 3.264c.543.314 1.227.314 1.77 0l5.657-3.264c.543-.314.885-.906.885-1.533v-6.53l.002-.023c.365-.05 1.838-.13 2.155.455.195.362.195 1.05.195 1.76 0 5.48-4.945 9.773-10.995 8.61C5.36 22.82 1.48 18.262 2.394 11.96c.07-.482-.55-.747-.84-.368-1.59 2.073-1.84 5.617-.18 8.654 2.13 3.896 7.494 5.375 11.455 3.16 3.96-2.215 5.59-7.14 3.65-11.235C15.01 9.38 10.59 7.6 6.36 9.38L12.007 6v6.528l-3 1.733v-3.465l3-1.732 3 1.732 3-1.732-3-1.732z"/></svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#06B6D4]" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
  ),
  "React Native": (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#61DAFB]" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.625c-5.306 0-9.625-4.319-9.625-9.625S6.694 2.375 12 2.375s9.625 4.319 9.625 9.625-4.319 9.625-9.625 9.625zm0-17.75c-4.475 0-8.125 3.65-8.125 8.125S7.525 20.125 12 20.125s8.125-3.65 8.125-8.125S16.475 3.875 12 3.875z"/><path d="M12 2.375c-2.31 0-4.502.83-6.22 2.35l1.06 1.06C8.26 4.606 10.06 3.875 12 3.875s3.74.731 5.16 1.91l1.06-1.06C16.502 3.205 14.31 2.375 12 2.375zM12 21.625c2.31 0 4.502-.83 6.22-2.35l-1.06-1.06c-1.42 1.179-3.22 1.91-5.16 1.91s-3.74-.731-5.16-1.91l-1.06 1.06c1.718 1.52 3.91 2.35 6.22 2.35z"/><circle cx="12" cy="12" r="2.2"/></svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#336791]" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c2.07 0 3.75 1.68 3.75 3.75S14.07 12 12 12s-3.75-1.68-3.75-3.75S9.93 4.5 12 4.5zm0 15c-3.105 0-5.85-1.26-7.8-3.3 2.1-2.4 5.25-3.9 8.7-3.9s6.6 1.5 8.7 3.9c-1.95 2.04-4.695 3.3-7.8 3.3zM8.25 10.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm6 0c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z"/></svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#F24E1E]" xmlns="http://www.w3.org/2000/svg"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#F24E1E" fillOpacity="0"/><path d="M8.4 12c-1.325 0-2.4-1.075-2.4-2.4S7.075 7.2 8.4 7.2h3.6V12H8.4zm0 4.8c-1.325 0-2.4-1.075-2.4-2.4 0-1.325 1.075-2.4 2.4-2.4h3.6v4.8H8.4zm3.6 4.8c-1.325 0-2.4-1.075-2.4-2.4s1.075-2.4 2.4-2.4 2.4 1.075 2.4 2.4-1.075 2.4-2.4 2.4zm3.6-9.6c1.325 0 2.4-1.075 2.4-2.4S16.925 7.2 15.6 7.2h-3.6v4.8h3.6zm0-4.8c1.325 0 2.4-1.075 2.4-2.4S16.925 2.4 15.6 2.4H8.4c-1.325 0-2.4 1.075-2.4 2.4S7.075 7.2 8.4 7.2h7.2z" fill="#0ACF83"/><path d="M8.4 12H12v4.8H8.4c-1.325 0-2.4-1.075-2.4-2.4 0-1.325 1.075-2.4 2.4-2.4z" fill="#A259FF"/><path d="M8.4 7.2H12v4.8H8.4c-1.325 0-2.4-1.075-2.4-2.4S7.075 7.2 8.4 7.2z" fill="#F24E1E"/><path d="M15.6 7.2H12v4.8h3.6c1.325 0 2.4-1.075 2.4-2.4S16.925 7.2 15.6 7.2z" fill="#FF7262"/><path d="M15.6 2.4H8.4C7.075 2.4 6 3.475 6 4.8S7.075 7.2 8.4 7.2H12V2.4h3.6c1.325 0 2.4 1.075 2.4 2.4S16.925 7.2 15.6 7.2V2.4z" fill="#F24E1E"/><path d="M15.6 2.4H12v4.8h3.6c1.325 0 2.4-1.075 2.4-2.4S16.925 2.4 15.6 2.4z" fill="#1ABCFE"/></svg>
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

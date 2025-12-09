import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import {
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiPostgresql,
    SiFigma,
    SiDocker,
    SiExpo,
    SiAmazon,
    SiGooglecloud,
    SiFirebase,
    SiStripe,
    SiVite,
    SiGit,
    SiGithub,
    SiMongodb,
    SiSentry,
    SiVercel,
    SiTwilio
} from "react-icons/si";

const stack = [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", border: "border-[#61DAFB]/20", shadow: "shadow-[#61DAFB]/20" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10", border: "border-[#3178C6]/20", shadow: "shadow-[#3178C6]/20" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", bg: "bg-white/10", border: "border-white/20", shadow: "shadow-white/20" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", bg: "bg-[#339933]/10", border: "border-[#339933]/20", shadow: "shadow-[#339933]/20" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10", border: "border-[#06B6D4]/20", shadow: "shadow-[#06B6D4]/20" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]", bg: "bg-[#336791]/10", border: "border-[#336791]/20", shadow: "shadow-[#336791]/20" },
    { name: "Expo", icon: SiExpo, color: "text-white", bg: "bg-white/10", border: "border-white/20", shadow: "shadow-white/20" },
    { name: "AWS", icon: SiAmazon, color: "text-[#FF9900]", bg: "bg-[#FF9900]/10", border: "border-[#FF9900]/20", shadow: "shadow-[#FF9900]/20" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "text-[#4285F4]", bg: "bg-[#4285F4]/10", border: "border-[#4285F4]/20", shadow: "shadow-[#4285F4]/20" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]", bg: "bg-[#FFCA28]/10", border: "border-[#FFCA28]/20", shadow: "shadow-[#FFCA28]/20" },
    { name: "Stripe", icon: SiStripe, color: "text-[#635BFF]", bg: "bg-[#635BFF]/10", border: "border-[#635BFF]/20", shadow: "shadow-[#635BFF]/20" },
    { name: "Vite", icon: SiVite, color: "text-[#646CFF]", bg: "bg-[#646CFF]/10", border: "border-[#646CFF]/20", shadow: "shadow-[#646CFF]/20" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10", border: "border-[#2496ED]/20", shadow: "shadow-[#2496ED]/20" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]", bg: "bg-[#F05032]/10", border: "border-[#F05032]/20", shadow: "shadow-[#F05032]/20" },
    { name: "GitHub", icon: SiGithub, color: "text-white", bg: "bg-white/10", border: "border-white/20", shadow: "shadow-white/20" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", bg: "bg-[#47A248]/10", border: "border-[#47A248]/20", shadow: "shadow-[#47A248]/20" },
    { name: "Sentry", icon: SiSentry, color: "text-[#362D59]", bg: "bg-[#362D59]/10", border: "border-[#362D59]/20", shadow: "shadow-[#362D59]/20" },
    { name: "Vercel", icon: SiVercel, color: "text-white", bg: "bg-white/10", border: "border-white/20", shadow: "shadow-white/20" },
    { name: "Twilio", icon: SiTwilio, color: "text-[#F22F46]", bg: "bg-[#F22F46]/10", border: "border-[#F22F46]/20", shadow: "shadow-[#F22F46]/20" },
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]", bg: "bg-[#F24E1E]/10", border: "border-[#F24E1E]/20", shadow: "shadow-[#F24E1E]/20" },
];

// Split into two rows (10 items each)
const row1 = stack.slice(0, 10);
const row2 = stack.slice(10, 20);

export function TechStack() {
    const { t } = useLanguage();
    return (
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto max-w-7xl relative mb-16 px-6">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif mb-6 text-foreground tracking-tight"
                    >
                        {t.hero.techTitle} <span className="text-primary italic">&</span> Tools
                    </motion.h2>
                    <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                        {t.hero.techSubtitle}
                    </p>
                </div>
            </div>

            {/* Marquee Container with specific masks for 'Enterprise' feel */}
            <div className="relative flex flex-col gap-10">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                {/* ROW 1: Moving LEFT */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-6 pl-6"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Slow, elegant speed
                        }}
                        style={{ width: "max-content" }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...row1, ...row1, ...row1].map((tech, i) => (
                            <TechJewel key={`${tech.name}-${i}`} tech={tech} />
                        ))}
                    </motion.div>
                </div>

                {/* ROW 2: Moving RIGHT */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-6 pl-6"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 35, // Slightly different speed for organic feel
                        }}
                        style={{ width: "max-content" }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...row2, ...row2, ...row2].map((tech, i) => (
                            <TechJewel key={`${tech.name}-${i}`} tech={tech} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function TechJewel({ tech }: { tech: typeof stack[0] }) {
    return (
        <div className={`relative group/card flex items-center gap-4 px-6 py-4 rounded-full border bg-background/40 backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-default ${tech.border} ${tech.bg}`}>
            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-xl ${tech.bg}`} />

            <span className={`text-3xl relative z-10 ${tech.color}`}>
                <tech.icon />
            </span>
            <span className="text-sm font-medium text-gray-300 group-hover/card:text-white transition-colors relative z-10 whitespace-nowrap">
                {tech.name}
            </span>
        </div>
    );
}

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import {
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiExpo,
    SiAmazon,
    SiFigma,
    SiTailwindcss,
    SiNodedotjs,
    SiStripe,
    SiGooglecloud,
    SiFirebase,
    SiVite,
    SiGit,
    SiGithub,
    SiMongodb,
    SiSentry,
    SiVercel,
    SiTwilio,
    SiOpenai,
    SiGoogle
} from "react-icons/si";
import { Layout, Smartphone, Cloud, PenTool, Bot, Sparkles } from "lucide-react";

export function Services() {
    const { t } = useLanguage();

    // Icon mapping helper
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "web": return <Layout className="w-8 h-8" />;
            case "mobile": return <Smartphone className="w-8 h-8" />;
            case "cloud": return <Cloud className="w-8 h-8" />;
            case "design": return <PenTool className="w-8 h-8" />;
            case "ai": return <Sparkles className="w-8 h-8" />;
            default: return <Layout className="w-8 h-8" />;
        }
    };

    // Tech stack mapping with Original Brand Colors & Glows
    const getTechIcons = (iconName: string) => {
        switch (iconName) {
            case "web": return [
                { icon: <SiVite />, color: "text-[#646CFF]", glow: "shadow-[#646CFF]/20 bg-[#646CFF]/10" },
                { icon: <SiReact />, color: "text-[#61DAFB]", glow: "shadow-[#61DAFB]/20 bg-[#61DAFB]/10" },
                { icon: <SiNextdotjs />, color: "text-white", glow: "shadow-white/20 bg-white/10" },
                { icon: <SiVercel />, color: "text-white", glow: "shadow-white/20 bg-white/10" },
                { icon: <SiTailwindcss />, color: "text-[#38B2AC]", glow: "shadow-[#38B2AC]/20 bg-[#38B2AC]/10" },
                { icon: <SiGit />, color: "text-[#F05032]", glow: "shadow-[#F05032]/20 bg-[#F05032]/10" }
            ];
            case "mobile": return [
                { icon: <SiExpo />, color: "text-white", glow: "shadow-white/20 bg-white/10" },
                { icon: <SiReact />, color: "text-[#61DAFB]", glow: "shadow-[#61DAFB]/20 bg-[#61DAFB]/10" },
                { icon: <SiTypescript />, color: "text-[#3178C6]", glow: "shadow-[#3178C6]/20 bg-[#3178C6]/10" }
            ];
            case "cloud": return [
                { icon: <SiAmazon />, color: "text-[#FF9900]", glow: "shadow-[#FF9900]/20 bg-[#FF9900]/10" },
                { icon: <SiGooglecloud />, color: "text-[#4285F4]", glow: "shadow-[#4285F4]/20 bg-[#4285F4]/10" },
                { icon: <SiFirebase />, color: "text-[#FFCA28]", glow: "shadow-[#FFCA28]/20 bg-[#FFCA28]/10" },
                { icon: <SiGithub />, color: "text-white", glow: "shadow-white/20 bg-white/10" },
                { icon: <SiMongodb />, color: "text-[#47A248]", glow: "shadow-[#47A248]/20 bg-[#47A248]/10" },
                { icon: <SiSentry />, color: "text-[#362D59]", glow: "shadow-[#362D59]/20 bg-[#362D59]/10" },
                { icon: <SiTwilio />, color: "text-[#F22F46]", glow: "shadow-[#F22F46]/20 bg-[#F22F46]/10" },
                { icon: <SiNodedotjs />, color: "text-[#339933]", glow: "shadow-[#339933]/20 bg-[#339933]/10" },
                { icon: <SiStripe />, color: "text-[#635BFF]", glow: "shadow-[#635BFF]/20 bg-[#635BFF]/10" }
            ];
            case "design": return [
                { icon: <SiFigma />, color: "text-[#F24E1E]", glow: "shadow-[#F24E1E]/20 bg-[#F24E1E]/10" }
            ];
            case "ai": return [
                { icon: <SiOpenai />, color: "text-[#10A37F]", glow: "shadow-[#10A37F]/20 bg-[#10A37F]/10" },
                { icon: <SiGoogle />, color: "text-[#4285F4]", glow: "shadow-[#4285F4]/20 bg-[#4285F4]/10" }, // For Gemini
                { icon: <Bot />, color: "text-[#D97757]", glow: "shadow-[#D97757]/20 bg-[#D97757]/10" } // Metric/Claude generic if no icon
            ];
            default: return [];
        }
    };

    return (
        <section className="py-32 px-6 relative z-10">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 inline-block tracking-tight"
                    >
                        {t.services.title}
                    </motion.h2>
                    <p className="text-muted-foreground/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {t.services.items.map((service: any, index: number) => (
                        <div key={index} className={index === 4 ? "md:col-span-2" : ""}>
                            <ServiceCard
                                service={service}
                                index={index}
                                mainIcon={getIcon(service.icon)}
                                techIcons={getTechIcons(service.icon)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index, mainIcon, techIcons }: { service: any, index: number, mainIcon: any, techIcons: any[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="group relative h-full min-h-[300px] rounded-[2rem]"
        >
            {/* Ultra-premium glassmorphism container */}
            <div className="absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-2xl rounded-[2rem] border border-white/5 group-hover:border-primary/20 transition-all duration-500 overflow-hidden shadow-2xl" />

            {/* Hover Scanning Light Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out" />
            </div>

            <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-10">
                    {/* Main Category Icon (Left) - Enhanced with Gradient & Glow */}
                    <div className="relative group/icon">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover/icon:opacity-50 transition-opacity duration-500" />
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-primary shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                            {mainIcon}
                        </div>
                    </div>

                    {/* Tech Brands (Right) - "Jewel" Style */}
                    <div className="flex -space-x-3">
                        {techIcons.map((item, i) => (
                            <div
                                key={i}
                                className={`w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center text-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:z-20 hover:-translate-y-1 ${item.color} ${item.glow}`}
                                style={{ zIndex: 10 - i }}
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="text-3xl font-medium text-white mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                    {service.title}
                </h3>

                <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed">
                    {service.description}
                </p>

                {/* Features List with modern checkmarks */}
                <div className="mt-auto">
                    <ul className="space-y-3">
                        {service.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--color-primary),0.5)] mr-3" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

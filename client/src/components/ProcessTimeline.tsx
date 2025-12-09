import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Search, Code2, ShieldCheck, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
    const { t } = useLanguage();
    const process = t.process;
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = [
        { icon: Search, color: "text-pink-500", gradient: "from-pink-500/20 to-purple-500/20", border: "group-hover:border-pink-500/50" },
        { icon: Code2, color: "text-violet-500", gradient: "from-violet-500/20 to-indigo-500/20", border: "group-hover:border-violet-500/50" },
        { icon: ShieldCheck, color: "text-blue-500", gradient: "from-blue-500/20 to-cyan-500/20", border: "group-hover:border-blue-500/50" },
        { icon: Rocket, color: "text-emerald-500", gradient: "from-emerald-500/20 to-green-500/20", border: "group-hover:border-emerald-500/50" },
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 bg-background relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Primary Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/20 rounded-[100%] blur-[100px] opacity-30 pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4 block w-fit mx-auto">
                            The Methodology
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl text-foreground tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            {process.title}
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
                    >
                        {process.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                    {/* Horizontal Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent w-1/2 blur-sm animate-shimmer" />
                    </div>

                    {process.steps.map((step, index) => {
                        const style = steps[index];
                        const Icon = style.icon;

                        return (
                            <SpotlightCard key={step.number} className="h-full" delay={index * 0.1}>
                                <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
                                    {/* Icon Container */}
                                    <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <div className={cn("w-24 h-24 rounded-3xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-xl relative z-10 transition-colors duration-500", style.border)}>
                                            <Icon className={cn("w-10 h-10 transition-colors duration-500", style.color)} />
                                        </div>
                                        {/* Icon Glow */}
                                        <div className={cn("absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500", style.gradient.split(' ')[0].replace('from-', 'bg-'))} />

                                        {/* Step Number Badge */}
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/50 backdrop-blur-md">
                                            {step.number}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-white transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                                        {step.description}
                                    </p>
                                </div>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Reusable Spotlight Card Component
function SpotlightCard({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            className={cn(
                "relative rounded-3xl border border-white/10 bg-black/20 overflow-hidden group",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial - gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, .06), transparent 40 %)`,
                }}
            />
            {children}
        </motion.div>
    );
}

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Quote, User, Briefcase } from "lucide-react";

export function Testimonials() {
    const { t } = useLanguage();
    const testimonials = t.testimonials;

    // Duplicate items for infinite marquee effect
    const marqueeItems = [...testimonials.items, ...testimonials.items];

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-5xl md:text-6xl text-foreground"
                    >
                        {testimonials.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        {testimonials.subtitle}
                    </motion.p>
                </div>

                {/* Marquee Container */}
                <div
                    className="relative w-full"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                    }}
                >
                    {/* Gradient Masks (Visual Fallback) */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    {/* Marquee Track */}
                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {marqueeItems.map((item, index) => (
                            <TestimonialCard key={`${index}-${item.company}`} item={item} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ item }: { item: any }) {
    return (
        <div className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-secondary/10 border border-white/5 backdrop-blur-md relative group hover:bg-secondary/20 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 flex flex-col justify-between min-h-[300px]">
            {/* Top: Quote Icon & Metric */}
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Quote className="w-6 h-6 fill-current" />
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-wider">
                    {item.impact}
                </div>
            </div>

            {/* Middle: Text */}
            <p className="text-lg md:text-xl text-foreground/90 font-light leading-relaxed mb-8 flex-grow">
                "{item.quote}"
            </p>

            {/* Bottom: Author Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <User className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium text-foreground">{item.author}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-3 h-3" />
                        <span>{item.role}, {item.company}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

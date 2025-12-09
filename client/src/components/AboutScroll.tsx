import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Briefcase, GraduationCap, Code } from "lucide-react";

export function AboutScroll() {
    const { t } = useLanguage();
    const textContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: textContainerRef,
        offset: ["start 0.8", "end 0.5"]
    });

    const words = `${t.about.p1} ${t.about.p2} ${t.about.p3}`.split(" ");

    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="container mx-auto max-w-5xl">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium uppercase tracking-widest text-primary mb-12"
                >
                    {t.nav.about}
                </motion.h2>

                {/* Scroll Reveal Text */}
                <div ref={textContainerRef} className="mb-32">
                    <h3 className="font-serif text-3xl md:text-5xl leading-[1.4] text-muted-foreground/30 flex flex-wrap gap-x-3 gap-y-2">
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            return (
                                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                    {word}
                                </Word>
                            );
                        })}
                    </h3>
                </div>

                {/* Experience Timeline */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-serif mb-8 text-foreground">{t.about.experience}</h3>
                        <div className="space-y-6">
                            <TimelineItem
                                icon={<GraduationCap className="w-5 h-5" />}
                                title={t.about.roles.highschool.title}
                                subtitle={t.about.roles.highschool.company}
                                date={t.about.roles.highschool.date}
                            />
                            <TimelineItem
                                icon={<Briefcase className="w-5 h-5" />}
                                title={t.about.roles.freelance.title}
                                subtitle={t.about.roles.freelance.company}
                                date={t.about.roles.freelance.date}
                            />
                            <TimelineItem
                                icon={<Code className="w-5 h-5" />}
                                title={t.about.roles.projects.title}
                                subtitle={t.about.roles.projects.company}
                                date={t.about.roles.projects.date}
                            />
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden hidden md:block group">
                        {/* Abstract visual represention of 'building' since we don't have a photo yet */}
                        <div className="absolute inset-0 bg-secondary/30 backdrop-blur-sm border border-white/10 flex items-center justify-center p-8 text-center group-hover:bg-secondary/40 transition-colors">
                            <div>
                                <Code className="w-16 h-16 text-primary mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500" />
                                <p className="text-lg font-serif italic text-muted-foreground">{t.about.photoCaption}</p>
                            </div>
                        </div>
                        {/* Decorative gradient blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    );
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }} className="text-foreground">
                {children}
            </motion.span>
        </span>
    );
};

const TimelineItem = ({ icon, title, subtitle, date }: { icon: any, title: string, subtitle: string, date: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-4 p-4 rounded-xl bg-secondary/20 border border-white/5 hover:bg-secondary/40 hover:border-primary/20 transition-all duration-300 group"
        >
            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all shadow-inner">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-muted-foreground">{subtitle}</p>
                <p className="text-xs text-primary/70 mt-1 uppercase tracking-wide font-medium">{date}</p>
            </div>
        </motion.div>
    );
}

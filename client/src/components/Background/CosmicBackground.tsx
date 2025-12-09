import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export function CosmicBackground() {
    const [stars, setStars] = useState<Star[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    useEffect(() => {
        // Generate initial stars
        const generateStars = () => {
            const newStars: Star[] = [];
            const starCount = 50;

            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 1,
                    duration: Math.random() * 3 + 2, // Random twinkling duration
                    delay: Math.random() * 2
                });
            }
            return newStars;
        };

        setStars(generateStars());
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
            {/* Deep Space Gradient Base */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-background to-background" />

            {/* Aurora / Nebula Effects - Top Left */}
            <motion.div
                animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"
            />

            {/* Aurora / Nebula Effects - Bottom Right */}
            <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-accent/10 blur-[100px]"
            />

            {/* Parallax Star Field */}
            <motion.div style={{ y }} className="absolute inset-0">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut"
                        }}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
                        }}
                    />
                ))}
            </motion.div>

            {/* Shooting Stars Layer - CSS Animation or Framer Motion */}
            <ShootingStars />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" />
        </div>
    );
}

function ShootingStars() {
    const [shootingStar, setShootingStar] = useState<{ id: number, x: number, y: number, angle: number } | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly spawn a shooting star
            if (Math.random() > 0.7) {
                setShootingStar({
                    id: Date.now(),
                    x: Math.random() * 100, // start X percentage
                    y: Math.random() * 50,  // start Y percentage (mostly top half)
                    angle: 45 // Fixed angle for simplicity
                });

                // Remove it after animation
                setTimeout(() => setShootingStar(null), 1000);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    if (!shootingStar) return null;

    return (
        <motion.div
            key={shootingStar.id}
            initial={{
                left: `${shootingStar.x}%`,
                top: `${shootingStar.y}%`,
                opacity: 1,
                scale: 1
            }}
            animate={{
                left: `${shootingStar.x - 20}%`,
                top: `${shootingStar.y + 20}%`,
                opacity: 0,
                scale: 0.5
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute h-0.5 w-[100px] bg-gradient-to-l from-transparent via-white to-transparent rotate-[-45deg]"
            style={{ boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.5)" }}
        />
    );
}

import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
    style?: React.CSSProperties;
}

export function TypewriterText({
    text,
    className = "",
    delay = 0,
    speed = 0.05,
    style
}: TypewriterTextProps) {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1, // Quick snap for typewriter feel
            }
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`inline-block ${className}`}
            style={style}
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={child} className="inline-block relative">
                    {/* Use non-breaking space for spaces to preserve layout */}
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}

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
    // Split words to prevent mid-word line breaks
    const words = text.split(" ");

    // Calculate global indices for deterministic animation
    let globalCharIndex = 0;

    const charVariant = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: delay + (i * speed),
                duration: 0.1,
            }
        }),
    };

    return (
        <span // Changed to simple span/div to avoid framer contextual conflicts
            key={text} // Force re-mount when text changes to replay animation
            className={`flex flex-wrap gap-[0.25em] ${className}`}
            style={style}
        >
            {words.map((word, wordIndex) => {
                // Capture current index start for this word
                const startIndex = globalCharIndex;
                // Increment global index by word length
                globalCharIndex += word.length;

                return (
                    <span
                        key={wordIndex}
                        className="whitespace-nowrap flex-shrink-0" // prevent shrinking
                    >
                        {word.split("").map((char, charIndex) => (
                            <motion.span
                                key={charIndex}
                                custom={startIndex + charIndex} // Pass global absolute index
                                variants={charVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                );
            })}
        </span>
    );
}

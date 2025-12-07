import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-foreground">
            Product Designer crafting <br className="hidden md:block" />
            <span className="text-muted-foreground italic">thoughtful</span> digital experiences.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I specialize in simplifying complex systems into intuitive, approachable interfaces. 
            Currently building the future of fintech at Stripe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

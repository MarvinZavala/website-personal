import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import profileImage from "@assets/generated_images/professional_headshot_of_product_designer.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-[1.5fr,1fr] gap-12 md:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl mb-8">
                Design is not just what it looks like and feels like. Design is how it works.
              </h1>
              
              <div className="prose prose-lg prose-neutral text-muted-foreground">
                <p className="mb-6">
                  Hello! I'm Alex, a product designer based in San Francisco. With over 7 years of experience in digital product design, I bridge the gap between user needs and business goals through clean, functional, and aesthetic solutions.
                </p>
                <p className="mb-6">
                  My philosophy is rooted in "Swiss Design" principles—stripping away the non-essential to let the content shine. I believe that good design should be invisible, intuitive, and accessible to everyone.
                </p>
                <p className="mb-6">
                  When I'm not pushing pixels in Figma or prototyping in Framer, you can find me exploring the California coast with my film camera, brewing the perfect pour-over coffee, or reading about architectural history.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-border/50">
                <h3 className="font-serif text-xl mb-6">Experience</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-medium">Senior Product Designer</h4>
                      <span className="text-sm text-muted-foreground">2022 — Present</span>
                    </div>
                    <p className="text-muted-foreground">Stripe</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-medium">Product Designer</h4>
                      <span className="text-sm text-muted-foreground">2019 — 2022</span>
                    </div>
                    <p className="text-muted-foreground">Airbnb</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-medium">UI/UX Designer</h4>
                      <span className="text-sm text-muted-foreground">2017 — 2019</span>
                    </div>
                    <p className="text-muted-foreground">Fantasy Interactive</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-muted overflow-hidden rounded-sm">
                <img 
                  src={profileImage} 
                  alt="Alex Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Captured in my home studio, 2024.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

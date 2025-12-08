import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import profileImage from "@assets/generated_images/professional_headshot_of_product_designer.png";

export default function About() {
  const { t } = useLanguage();

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
                {t.about.title}
              </h1>
              
              <div className="prose prose-lg prose-neutral text-muted-foreground">
                <p className="mb-6">{t.about.p1}</p>
                <p className="mb-6">{t.about.p2}</p>
                <p className="mb-6">{t.about.p3}</p>
              </div>

              <div className="mt-12 pt-12 border-t border-border/50">
                <h3 className="font-serif text-xl mb-6">{t.about.experience}</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-medium">{t.about.roles.stripe.title}</h4>
                      <span className="text-sm text-muted-foreground">{t.about.roles.stripe.date}</span>
                    </div>
                    <p className="text-muted-foreground">{t.about.roles.stripe.company}</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-medium">{t.about.roles.airbnb.title}</h4>
                      <span className="text-sm text-muted-foreground">{t.about.roles.airbnb.date}</span>
                    </div>
                    <p className="text-muted-foreground">{t.about.roles.airbnb.company}</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-medium">{t.about.roles.fantasy.title}</h4>
                      <span className="text-sm text-muted-foreground">{t.about.roles.fantasy.date}</span>
                    </div>
                    <p className="text-muted-foreground">{t.about.roles.fantasy.company}</p>
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
                {t.about.photoCaption}
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

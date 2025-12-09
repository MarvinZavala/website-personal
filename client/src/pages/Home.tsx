import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { ContactSection } from "@/components/ContactSection";
import { CosmicBackground } from "@/components/Background/CosmicBackground";
import { TechStack } from "@/components/TechStack";
import { useLanguage } from "@/lib/i18n";

import { AboutScroll } from "@/components/AboutScroll";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ProcessTimeline } from "@/components/ProcessTimeline";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/20 selection:text-primary relative">
      <CosmicBackground />
      <Navigation />

      <main>
        <Hero />

        {/* About Section with Scroll Reveal */}
        <AboutScroll />

        {/* Services Section */}
        <Services />

        {/* Tech Stack Grid */}
        <div className="mb-24">
          <TechStack />
        </div>

        {/* Process Section */}
        <ProcessTimeline />

        <section className="px-6 pb-20">
          <div className="container mx-auto">

            {/* Modern Projects Header */}
            <ProjectsHeader
              title={t.hero.projectsTitle}
              subtitle={t.hero.projectsSubtitle}
            />

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
              {t.projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  index={index}
                  {...project}
                  featured={index === 0 || index === 3} // Make 1st and 4th project span 2 cols
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

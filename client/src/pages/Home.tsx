import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { TechMarquee } from "@/components/TechMarquee";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Tech Stack Marquee */}
        <div className="mb-24">
          <TechMarquee />
        </div>
        
        <section className="px-6 pb-32">
          <div className="container mx-auto">
            
            {/* Modern Projects Header */}
            <ProjectsHeader 
              title={t.hero.projectsTitle}
              subtitle={t.hero.projectsSubtitle}
            />

            {/* Featured Project */}
            <div className="mb-20">
              {t.projects.slice(0, 1).map((project, index) => (
                 <ProjectCard
                  key={project.id}
                  index={index}
                  {...project}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {t.projects.slice(1).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  index={index + 1}
                  {...project}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

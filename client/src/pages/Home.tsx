import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { TechMarquee } from "@/components/TechMarquee";
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
            
            {/* Projects Header */}
            <div className="mb-16 text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {t.hero.projectsTitle}
              </h2>
              <div className="h-1 w-20 bg-primary/20 mt-4 mx-auto md:mx-0 rounded-full" />
            </div>

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

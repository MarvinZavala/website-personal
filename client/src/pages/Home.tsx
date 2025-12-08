import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Skills Section */}
        <div className="container mx-auto px-6 mb-20 -mt-10 md:-mt-20 relative z-10">
          <div className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              {t.hero.stackTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              {t.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <section className="px-6 pb-32">
          <div className="container mx-auto">
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

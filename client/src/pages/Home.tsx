import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import fintechImage from "@assets/generated_images/fintech_mobile_app_mockup.png";
import smartHomeImage from "@assets/generated_images/smart_home_dashboard_mockup.png";
import packagingImage from "@assets/generated_images/sustainable_packaging_design.png";
import designSystemImage from "@assets/generated_images/design_system_documentation.png";

const projects = [
  {
    id: "fintech-app",
    title: "Nova Finance",
    category: "Mobile App • Fintech",
    image: fintechImage,
  },
  {
    id: "smart-home",
    title: "Luma Home",
    category: "Web Dashboard • IoT",
    image: smartHomeImage,
  },
  {
    id: "eco-packaging",
    title: "Roots Coffee",
    category: "Physical Product • Branding",
    image: packagingImage,
  },
  {
    id: "design-system",
    title: "Orbit System",
    category: "Design Operations • UI Kit",
    image: designSystemImage,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <Navigation />
      
      <main>
        <Hero />
        
        <section className="px-6 pb-32">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  index={index}
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

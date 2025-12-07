import { useEffect } from "react";
import { useRoute } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import fintechImage from "@assets/generated_images/fintech_mobile_app_mockup.png";
import smartHomeImage from "@assets/generated_images/smart_home_dashboard_mockup.png";
import packagingImage from "@assets/generated_images/sustainable_packaging_design.png";
import designSystemImage from "@assets/generated_images/design_system_documentation.png";

// Mock data store
const projects = {
  "fintech-app": {
    title: "Nova Finance",
    category: "Mobile App • Fintech",
    image: fintechImage,
    description: "Redefining personal finance management for the digital native generation. We focused on clarity, trust, and speed.",
    role: "Lead Product Designer",
    year: "2023",
    client: "Nova Inc."
  },
  "smart-home": {
    title: "Luma Home",
    category: "Web Dashboard • IoT",
    image: smartHomeImage,
    description: "A centralized dashboard for controlling your entire smart home ecosystem. Designed for tablet and desktop with a focus on dark mode accessibility.",
    role: "UI/UX Designer",
    year: "2022",
    client: "Luma"
  },
  "eco-packaging": {
    title: "Roots Coffee",
    category: "Physical Product • Branding",
    image: packagingImage,
    description: "Sustainable packaging design for a specialty coffee roaster. Using 100% biodegradable materials with minimal ink usage.",
    role: "Art Director",
    year: "2024",
    client: "Roots Coffee Roasters"
  },
  "design-system": {
    title: "Orbit System",
    category: "Design Operations • UI Kit",
    image: designSystemImage,
    description: "A comprehensive design system built for scale. Standardizing components, tokens, and patterns across 4 different product lines.",
    role: "Systems Designer",
    year: "2023",
    client: "Internal"
  }
};

export default function CaseStudy() {
  const [match, params] = useRoute("/project/:id");
  const project = params?.id ? projects[params.id as keyof typeof projects] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </a>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/40 mb-16">
              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Role</span>
                <span className="font-medium">{project.role}</span>
              </div>
              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Year</span>
                <span className="font-medium">{project.year}</span>
              </div>
              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Client</span>
                <span className="font-medium">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Deliverables</span>
                <span className="font-medium">UI, UX, Strategy</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] bg-muted mb-20"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-6 max-w-3xl prose prose-lg prose-neutral">
          <h3 className="font-serif text-3xl mb-6">The Challenge</h3>
          <p className="mb-12 text-muted-foreground">
            Every project starts with a problem. For {project.title}, the main challenge was balancing functionality with simplicity. 
            The users needed a powerful tool that didn't feel overwhelming. We conducted extensive user research to understand the core workflows.
          </p>

          <h3 className="font-serif text-3xl mb-6">The Solution</h3>
          <p className="mb-8 text-muted-foreground">
            Our approach focused on reduction. We removed every non-essential element until only the core value proposition remained. 
            The visual language was designed to be calming and trustworthy, utilizing a restrained color palette and generous whitespace.
          </p>
          
          <div className="my-16 grid grid-cols-2 gap-4 not-prose">
             <div className="aspect-square bg-muted rounded-sm"></div>
             <div className="aspect-square bg-muted rounded-sm"></div>
          </div>

          <h3 className="font-serif text-3xl mb-6">The Result</h3>
          <p className="text-muted-foreground">
            The final product was launched to critical acclaim. User retention increased by 40% in the first quarter, and the clean design language set a new standard for the industry.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

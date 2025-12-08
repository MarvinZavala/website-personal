import { useEffect } from "react";
import { useRoute } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";

export default function CaseStudy() {
  const [match, params] = useRoute("/project/:id");
  const { t } = useLanguage();
  
  const project = params?.id 
    ? t.projects.find(p => p.id === params.id)
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-serif mb-4">{t.caseStudy.notFound}</h1>
        <Link href="/">
          <a className="text-primary hover:underline">{t.caseStudy.back}</a>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t.caseStudy.back}
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
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">{t.caseStudy.role}</span>
                <span className="font-medium">{project.role}</span>
              </div>
              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">{t.caseStudy.year}</span>
                <span className="font-medium">{project.year}</span>
              </div>
              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">{t.caseStudy.client}</span>
                <span className="font-medium">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">{t.caseStudy.deliverables}</span>
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
          <h3 className="font-serif text-3xl mb-6">{t.caseStudy.challengeTitle}</h3>
          <p className="mb-12 text-muted-foreground">
            {project.challenge}
          </p>

          <h3 className="font-serif text-3xl mb-6">{t.caseStudy.solutionTitle}</h3>
          <p className="mb-8 text-muted-foreground">
            {project.solution}
          </p>
          
          <div className="my-16 grid grid-cols-2 gap-4 not-prose">
             <div className="aspect-square bg-muted rounded-sm"></div>
             <div className="aspect-square bg-muted rounded-sm"></div>
          </div>

          <h3 className="font-serif text-3xl mb-6">{t.caseStudy.resultTitle}</h3>
          <p className="text-muted-foreground">
            {project.result}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { useEffect } from "react";
import { useRoute } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { CosmicBackground } from "@/components/Background/CosmicBackground";

export default function CaseStudy() {
  const [match, params] = useRoute("/project/:id");
  const { t } = useLanguage();

  const projectIndex = t.projects.findIndex(p => p.id === params?.id);
  const project = t.projects[projectIndex];

  const nextProject = projectIndex >= 0 && projectIndex < t.projects.length - 1
    ? t.projects[projectIndex + 1]
    : t.projects[0]; // Loop back to start if at end

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!project) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <CosmicBackground />
      <div className="text-center z-10">
        <h1 className="text-2xl font-serif mb-4 text-foreground">{t.caseStudy.notFound}</h1>
        <Link href="/">
          <a className="text-primary hover:text-accent transition-colors flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> {t.caseStudy.back}
          </a>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary relative">
      <CosmicBackground />
      <Navigation />

      <main className="pb-20">
        {/* Cinematic Hero Section - Clean Version */}
        <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

          {/* Hero Content - Centered & Clean */}
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <Link href="/">
              <a className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-12 group px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </a>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] text-accent bg-accent/10 border border-accent/20 rounded-full uppercase backdrop-blur-md shadow-[0_0_15px_-3px_var(--color-accent)]">
                {project.category}
              </span>
              <h1 className="font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50 mb-8 drop-shadow-2xl leading-[0.9] tracking-tight">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Floating Browser Mockup */}
        <div className="container mx-auto px-6 max-w-7xl relative z-20 -mt-16 md:-mt-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            style={{ perspective: "1000px" }}
          >
            <div className="relative rounded-xl overflow-hidden bg-background/50 border border-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] group">
              {/* Browser Toolbar */}
              <div className="h-10 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                {/* Address Bar Simulation */}
                <div className="ml-4 flex-1 max-w-xs h-6 bg-white/5 rounded-md flex items-center px-3">
                  <span className="text-[10px] text-white/20 font-mono truncate">{project.links?.live || "localhost:3000"}</span>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:object-bottom transition-[object-position] duration-[5s] ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sticky Sidebar: Metadata */}
            <aside className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl sticky top-24"
              >
                <div className="space-y-6">
                  <div className="flex flex-col gap-1 pb-6 border-b border-white/5">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      <User className="w-3 h-3" /> Client
                    </span>
                    <span className="text-lg font-medium text-foreground">{project.client}</span>
                  </div>

                  <div className="flex flex-col gap-1 pb-6 border-b border-white/5">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      <Briefcase className="w-3 h-3" /> Role
                    </span>
                    <span className="text-lg font-medium text-foreground">{project.role}</span>
                  </div>

                  <div className="flex flex-col gap-1 pb-6 border-b border-white/5">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      <Calendar className="w-3 h-3" /> Year
                    </span>
                    <span className="text-lg font-medium text-foreground">{project.year}</span>
                  </div>

                  <div className="pt-2 flex flex-col gap-3">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                      >
                        Visit Live Site <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    {project.links?.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 bg-secondary/50 border border-white/10 text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all"
                      >
                        View Source Code <Github className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </aside>

            {/* Main Content: Narrative */}
            <article className="lg:col-span-8 space-y-20 pt-10 lg:pt-20">

              {/* Description */}
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="lead text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack IDs */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-foreground">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-secondary/40 border border-white/5 text-sm md:text-base text-foreground/80 hover:border-primary/50 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-foreground border-l-2 border-primary pl-4">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-foreground border-l-2 border-accent pl-4">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Full Width Image / Gallery Placeholder */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-muted relative group">
                <img
                  src={project.image}
                  alt="Project Detail"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-md">Project Gallery</span>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 rounded-3xl border border-primary/10">
                <h3 className="font-serif text-3xl mb-6 text-foreground">Key Results</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.result}
                </p>
              </div>

            </article>
          </div>

          {/* Next Project Navigation */}
          {nextProject && (
            <div className="mt-32 mb-10 pt-10 border-t border-white/10">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Next Project</p>
              <Link href={`/project/${nextProject.id}`}>
                <a className="group block relative h-[300px] w-full rounded-2xl overflow-hidden">
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">
                      {nextProject.title}
                    </h3>
                    <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      View Project <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

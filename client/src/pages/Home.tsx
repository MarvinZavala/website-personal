import React, { Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { CosmicBackground } from "@/components/Background/CosmicBackground";
import { useLanguage } from "@/lib/i18n";

// Lazy load heavy components
const AboutScroll = React.lazy(() => import("@/components/AboutScroll").then(module => ({ default: module.AboutScroll })));
const Services = React.lazy(() => import("@/components/Services").then(module => ({ default: module.Services })));
const TechStack = React.lazy(() => import("@/components/TechStack").then(module => ({ default: module.TechStack })));
const ProcessTimeline = React.lazy(() => import("@/components/ProcessTimeline").then(module => ({ default: module.ProcessTimeline })));
const ProjectsHeader = React.lazy(() => import("@/components/ProjectsHeader").then(module => ({ default: module.ProjectsHeader })));
const ProjectCard = React.lazy(() => import("@/components/ProjectCard").then(module => ({ default: module.ProjectCard })));
const Testimonials = React.lazy(() => import("@/components/Testimonials").then(module => ({ default: module.Testimonials })));
const ContactSection = React.lazy(() => import("@/components/ContactSection").then(module => ({ default: module.ContactSection })));

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/20 selection:text-primary relative">
      <CosmicBackground />
      <Navigation />

      <main>
        <Hero />

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          {/* About Section with Scroll Reveal */}
          <div id="about">
            <AboutScroll />
          </div>

          {/* Services Section */}
          <div id="services">
            <Services />
          </div>

          {/* Tech Stack Grid */}
          <div id="stack" className="mb-24">
            <TechStack />
          </div>

          {/* Process Section */}
          <div id="process">
            <ProcessTimeline />
          </div>

          <section id="projects" className="px-6 pb-20">
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
          <div id="testimonials">
            <Testimonials />
          </div>

          {/* Contact Section */}
          <div id="contact">
            <ContactSection />
          </div>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}


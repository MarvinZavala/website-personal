import { useLanguage } from "@/lib/i18n";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-24 px-6 border-t border-white/10 bg-background overflow-hidden">
      {/* Ambient Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          {/* Main Statement */}
          <div className="md:col-span-8 lg:col-span-9 space-y-8">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-foreground">
              Let's build <br />
              <span className="text-muted-foreground/50">something great.</span>
            </h2>
            <a
              href={`mailto:${t.contactSection.email}`}
              className="inline-block text-xl md:text-2xl text-foreground hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-1"
            >
              {t.contactSection.email}
            </a>
          </div>

          {/* Links Column */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-between h-full space-y-12 md:space-y-0">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Connect</h3>
                <div className="flex flex-col space-y-3">
                  <a href="https://github.com/MarvinZavala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-white transition-colors group">
                    <SiGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/MarvinZavala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-white transition-colors group">
                    <SiLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://twitter.com/MarvinZavala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-white transition-colors group">
                    <SiX className="w-4 h-4" />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Marvin Zavala. All rights reserved.</p>
          <p className="opacity-50 hover:opacity-100 transition-opacity">Built with React, Vite & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}

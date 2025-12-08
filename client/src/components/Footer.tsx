import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-20 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h2 className="font-serif text-3xl mb-6">{t.footer.cta}</h2>
            <a 
              href="mailto:hello@marvinzavala.dev" 
              className="text-xl border-b border-foreground/20 hover:border-foreground transition-colors pb-1"
            >
              hello@marvinzavala.dev
            </a>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          </div>
        </div>
        <div className="mt-20 text-xs text-muted-foreground/50">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="py-20 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h2 className="font-serif text-3xl mb-6">Let's build something great.</h2>
            <a 
              href="mailto:hello@alexchen.design" 
              className="text-xl border-b border-foreground/20 hover:border-foreground transition-colors pb-1"
            >
              hello@alexchen.design
            </a>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
          </div>
        </div>
        <div className="mt-20 text-xs text-muted-foreground/50">
          © 2024 Alex Chen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();
  const contact = t.contactSection;

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Left Column: Heading & Status */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6 border border-green-500/20">
                ● {contact.available}
              </span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6">
                {contact.title}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-md">
                {contact.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xl">👋</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{contact.role}</p>
                  <p className="text-sm text-muted-foreground">{contact.cta}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="space-y-12 md:pt-4">
            
            {/* Contact Methods */}
            <div className="space-y-8">
              <motion.a
                href={`mailto:${contact.email}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center group py-4 border-b border-border/50 hover:border-primary transition-colors"
              >
                <div className="h-12 w-12 bg-primary/5 rounded-full flex items-center justify-center mr-6 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="block text-sm text-muted-foreground mb-1">{contact.emailLabel}</span>
                  <span className="text-lg md:text-xl font-medium">{contact.email}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center group py-4 border-b border-border/50 hover:border-primary transition-colors"
              >
                <div className="h-12 w-12 bg-primary/5 rounded-full flex items-center justify-center mr-6 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="block text-sm text-muted-foreground mb-1">{contact.phoneLabel}</span>
                  <span className="text-lg md:text-xl font-medium">{contact.phone}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                {contact.socialLabel}
              </h3>
              <div className="flex gap-4">
                <SocialLink 
                  href={contact.socials.github} 
                  icon={<SiGithub className="w-6 h-6" />} 
                  label="GitHub" 
                  color="hover:text-white hover:bg-[#181717] hover:border-[#181717]"
                />
                <SocialLink 
                  href={contact.socials.linkedin} 
                  icon={<SiLinkedin className="w-6 h-6" />} 
                  label="LinkedIn" 
                  color="hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]"
                />
                <SocialLink 
                  href={contact.socials.instagram} 
                  icon={<SiInstagram className="w-6 h-6" />} 
                  label="Instagram" 
                  color="hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-14 w-14 border border-border rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 ${color}`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

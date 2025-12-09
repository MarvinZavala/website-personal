import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Mail, Phone, ArrowUpRight, Copy, Check } from "lucide-react";
import { Meteors } from "./Background/Meteors";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { t } = useLanguage();
  const contact = t.contactSection;

  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Meteor Background */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-background via-background/90 to-background/50 overflow-hidden">
        <Meteors number={20} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4 block w-fit mx-auto">
              {contact.available}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-foreground tracking-tight"
          >
            {contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            {contact.subtitle}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">

          {/* Email Card - Large (Span 2) */}
          <BentoCard className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border-indigo-500/20">
            <div className="h-full flex flex-col justify-between p-6 md:p-8">
              <div className="flex justify-between items-start">
                <div className="bg-indigo-500/20 p-3 rounded-2xl">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-indigo-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-indigo-300 mb-1 tracking-wider uppercase opacity-70">{contact.emailLabel}</h3>
                <a href={`mailto:${contact.email}`} className="text-2xl md:text-4xl font-serif font-medium text-foreground hover:text-indigo-400 transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Socials Card - Vertical Stack */}
          <BentoCard className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <div className="h-full flex flex-col p-6 md:p-8">
              <div className="bg-blue-500/20 p-3 rounded-2xl w-fit mb-auto">
                <span className="text-xl">🌐</span>
              </div>

              <div className="space-y-4 mt-8">
                <SocialRow href={contact.socials.github} icon={<SiGithub />} label="GitHub" color="hover:text-white" />
                <SocialRow href={contact.socials.linkedin} icon={<SiLinkedin />} label="LinkedIn" color="hover:text-[#0A66C2]" />
                <SocialRow href={contact.socials.instagram} icon={<SiInstagram />} label="Instagram" color="hover:text-[#E4405F]" />
              </div>
            </div>
          </BentoCard>

          {/* Phone Card */}
          <BentoCard className="md:col-span-2 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
            <div className="h-full flex flex-col justify-between p-6 md:p-8">
              <div className="flex justify-between items-start">
                <div className="bg-emerald-500/20 p-3 rounded-2xl">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <CopyButton value={contact.phone} />
              </div>

              <div>
                <h3 className="text-sm font-medium text-emerald-300 mb-1 tracking-wider uppercase opacity-70">{contact.phoneLabel}</h3>
                <a href={`tel:${contact.phone}`} className="text-2xl md:text-4xl font-serif font-medium text-foreground hover:text-emerald-400 transition-colors">
                  {contact.phone}
                </a>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden group relative hover:border-white/10 transition-colors",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

function SocialRow({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 text-muted-foreground transition-colors ${color} group/row p-2 rounded-xl hover:bg-white/5`}>
      <span className="text-2xl transition-transform group-hover/row:scale-110">{icon}</span>
      <span className="font-medium text-lg">{label}</span>
      <ArrowUpRight className="ml-auto w-5 h-5 opacity-0 group-hover/row:opacity-100 transition-opacity" />
    </a>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
    </button>
  );
}

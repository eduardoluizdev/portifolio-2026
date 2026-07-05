"use client";

import { motion } from "framer-motion";
import { Home, FolderKanban, Briefcase, User } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";

const mobileLinks = [
  { href: "#hero", label: "Início", icon: Home },
  { href: "#projects", label: "Projetos", icon: FolderKanban },
  { href: "#experience", label: "Experiência", icon: Briefcase },
  { href: "#about", label: "Sobre", icon: User },
];

const hrefs = navLinks.map((link) => link.href);

export default function MobileNav() {
  const activeSection = useActiveSection(hrefs);

  const whatsappHref = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(
    "Olá! Vi seu portfólio e gostaria de conversar."
  )}`;

  const leftLinks = mobileLinks.slice(0, 2);
  const rightLinks = mobileLinks.slice(2);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="md:hidden fixed bottom-0 inset-x-0 z-50"
    >
      <div className="relative h-16 bg-background/95 backdrop-blur-sm border-t border-border flex items-center justify-evenly px-4">
        {leftLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-1 w-16 text-[10px] leading-none whitespace-nowrap transition-colors ${
                isActive ? "text-jade" : "text-muted-foreground"
              }`}
            >
              <Icon size={20} />
              {link.label}
            </a>
          );
        })}

        <div className="w-14 shrink-0" aria-hidden="true" />

        {rightLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-1 w-16 text-[10px] leading-none whitespace-nowrap transition-colors ${
                isActive ? "text-jade" : "text-muted-foreground"
              }`}
            >
              <Icon size={20} />
              {link.label}
            </a>
          );
        })}

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={whatsappHref}
          aria-label="Entrar em contato pelo WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-jade text-jade-foreground rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.35)] ring-4 ring-background active:scale-95 transition-transform duration-150 absolute left-1/2 -translate-x-1/2 -top-6"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </motion.nav>
  );
}

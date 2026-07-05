"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { navLinks, personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          <div>
            <a className="text-2xl font-bold tracking-tight" href="#hero">
              Eduardo<span className="text-jade">.dev</span>
            </a>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Desenvolvedor Front-end Sênior criando experiências digitais
              elegantes e performáticas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">
              Redes sociais
            </h3>
            <div className="flex items-center gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                aria-label="GitHub"
                href={personalInfo.social.github}
              >
                <GithubIcon size={18} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                aria-label="LinkedIn"
                href={personalInfo.social.linkedin}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                aria-label="Email"
                href={`mailto:${personalInfo.email}`}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. Todos os
            direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Vamos trabalhar juntos ♥
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import RotatingText from "./RotatingText";
import { AuroraBackground } from "./ui/aurora-background";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <AuroraBackground
      id="hero"
      className="min-h-screen h-auto text-foreground justify-center pt-20"
    >
      <div className="relative mx-auto max-w-6xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-muted-foreground tracking-widest uppercase text-sm">
            {personalInfo.role}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            <span className="block">{personalInfo.name}</span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-muted-foreground mt-2 text-3xl md:text-4xl lg:text-5xl"
            >
              <RotatingText texts={personalInfo.taglines} />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6 pt-4"
          >
            <a
              className="inline-flex items-center gap-2 bg-jade text-jade-foreground px-6 py-3 text-sm font-medium hover:bg-jade/90 transition-colors"
              href="#contact"
            >
              Entre em contato
            </a>
            <a
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              href="#projects"
            >
              Ver projetos
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              href={personalInfo.resumeUrl}
              download
            >
              <Download size={16} />
              Baixar CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 pt-8"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-jade transition-colors"
              aria-label="GitHub"
              href={personalInfo.social.github}
            >
              <GithubIcon size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-jade transition-colors"
              aria-label="LinkedIn"
              href={personalInfo.social.linkedin}
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              className="p-2 text-muted-foreground hover:text-jade transition-colors"
              aria-label="Email"
              href={`mailto:${personalInfo.email}`}
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-jade" size={24} />
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}

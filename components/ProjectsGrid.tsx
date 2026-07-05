"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/github";
import { personalInfo } from "@/lib/data";
import { GithubIcon } from "./icons/BrandIcons";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
              Direto do GitHub
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Projetos
            </h2>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={personalInfo.social.github}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon size={16} />
            Ver todos no GitHub
          </a>
        </motion.div>

        {projects.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Não foi possível carregar os projetos do GitHub agora. Confira
            diretamente em{" "}
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-jade hover:underline"
            >
              github.com/eduardoluizdev
            </a>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative border border-border bg-card hover:border-foreground/20 transition-all duration-300 flex flex-col"
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span className="text-xs px-2 py-0.5 bg-foreground text-background">
                        Destaque
                      </span>
                    )}
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
                    aria-label={`Visitar projeto ${project.name}`}
                    href={project.url}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 bg-foreground w-0 group-hover:w-full transition-all duration-300" />
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

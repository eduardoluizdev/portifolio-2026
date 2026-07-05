"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { education, personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
              Um pouco sobre mim
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Sobre
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {personalInfo.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 pt-10 border-t border-border">
              <h3 className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                Especialidades
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="text-sm px-3 py-1 border border-border"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10 pt-10 border-t border-border">
              <h3 className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                Formação Acadêmica
              </h3>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li
                    key={item.institution + item.period}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.course}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                      {item.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-accent border border-border relative overflow-hidden">
              <Image
                src="/images/perfil2.png"
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold">{personalInfo.name}</p>
                <p className="text-white/70 text-sm mt-1">
                  {personalInfo.role}
                </p>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-6 -right-6 bg-jade text-jade-foreground px-6 py-4 border border-jade">
              <p className="text-3xl font-bold leading-none">
                {personalInfo.stats[0].value}
              </p>
              <p className="text-xs uppercase tracking-widest mt-1">
                {personalInfo.stats[0].label}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
            Trajetória profissional
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experiência
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 1;
              const content = (
                <>
                  <span className="text-sm text-muted-foreground font-mono">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">
                    {item.company}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.role}
                  </p>
                  <ul
                    className={`text-muted-foreground text-sm mt-4 leading-relaxed space-y-2 ${
                      isEven ? "md:text-right" : ""
                    }`}
                  >
                    {item.description.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </>
              );
              return (
                <motion.div
                  key={item.company + item.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    isEven ? "md:text-right" : ""
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-foreground rounded-full -translate-x-1/2 top-2" />

                  {isEven ? (
                    <>
                      <div className="hidden md:block" />
                      <div className="pl-8 md:pl-16 md:col-start-2">
                        {content}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pl-8 md:pl-0 md:pr-16">{content}</div>
                      <div className="hidden md:block" />
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

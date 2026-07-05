"use client";

import { motion } from "framer-motion";
import { personalInfo, technologies } from "@/lib/data";

export default function Technologies() {
  return (
    <section id="technologies" className="py-32 px-6 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
            Stack de desenvolvimento
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tecnologias
          </h2>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="inline-flex items-center px-4 py-2 border border-border bg-background text-sm font-medium hover:border-jade hover:text-white hover:bg-jade transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-4xl md:text-5xl font-bold">
                  {stat.value}
                </span>
                <p className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

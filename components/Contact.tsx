"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const whatsappHref = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de entrar em contato."
  )}`;

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-muted-foreground tracking-widest uppercase text-sm mb-4">
            Vamos conversar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Entre em contato
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Estou sempre aberto a discutir novos projetos, ideias criativas
              ou oportunidades de colaboração. Escolha a forma mais
              conveniente para você entrar em contato!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <Mail size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <MapPin size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Localização
                  </p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 border border-border bg-background">
              <h3 className="text-xl font-semibold mb-4">
                Vamos trabalhar juntos?
              </h3>
              <p className="text-muted-foreground mb-8">
                Escolha como prefere entrar em contato. Responderei o mais
                breve possível!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 font-medium hover:bg-foreground/90 transition-all group"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-3 border border-foreground text-foreground px-6 py-4 font-medium hover:bg-foreground hover:text-background transition-all group"
                >
                  <Mail size={20} />
                  Email
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="p-6 border border-border/50 bg-secondary/50">
              <p className="text-sm text-muted-foreground text-center">
                Tempo médio de resposta:{" "}
                <span className="text-foreground font-medium">
                  menos de 24 horas
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

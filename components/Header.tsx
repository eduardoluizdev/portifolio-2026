"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";

const hrefs = navLinks.map((link) => link.href);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(hrefs);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 transition-all duration-500 bg-background ${
            isScrolled ? "opacity-95 backdrop-blur-sm" : "opacity-0"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-border transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <nav className="relative mx-auto max-w-6xl py-4">
        <div className="flex items-center justify-between lg:px-0 px-6">
          <a href="#hero" className="text-xl font-bold tracking-tight text-foreground">
            Eduardo<span className="text-jade">.dev</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative"
              >
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    activeSection === link.href
                      ? "text-jade"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-jade"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}

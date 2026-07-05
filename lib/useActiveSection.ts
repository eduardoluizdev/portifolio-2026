"use client";

import { useEffect, useState } from "react";

export function useActiveSection(hrefs: string[]) {
  const [activeSection, setActiveSection] = useState(hrefs[0] ?? "");

  useEffect(() => {
    const sections = hrefs
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [hrefs]);

  return activeSection;
}

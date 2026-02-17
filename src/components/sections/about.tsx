"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT } from "@/lib/constants";

export function About() {
  const statRef = useRef(null);
  const statInView = useInView(statRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          label="// About"
          title={ABOUT.heading}
          subtitle={ABOUT.subheading}
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Text content */}
          <div className="space-y-6">
            {ABOUT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-text-secondary leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Stat callout */}
          <motion.div
            ref={statRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={statInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col items-center justify-center rounded-2xl border border-danger/20 bg-danger/5 p-10"
          >
            <span className="font-mono text-7xl font-black text-danger md:text-8xl">
              {ABOUT.stat.value}
            </span>
            <span className="mt-4 max-w-xs text-center text-sm text-text-secondary">
              {ABOUT.stat.label}
            </span>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-danger animate-pulse" />
              <span className="font-mono text-xs text-danger">THREAT LEVEL: CRITICAL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

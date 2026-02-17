"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              // Case Studies
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Our Latest Projects
            </h2>
            <p className="leading-relaxed text-text-secondary">
              For over a decade, Quantum has been forging lasting partnerships and delivering critical cryptographic migrations. As a trusted PQC consultancy, we are renowned for our expertise in providing comprehensive quantum-safe solutions.
            </p>
          </motion.div>

          {/* Right: project cards */}
          <div ref={ref} className="space-y-4 md:col-span-3">
            {PROJECTS.map((project, i) => (
              <GlassCard key={project.title} delay={i * 0.15}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/10 font-mono text-sm font-bold text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="mb-1 font-mono text-base font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {project.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

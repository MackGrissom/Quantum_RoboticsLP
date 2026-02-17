"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PRINCIPLES } from "@/lib/constants";

export function Principles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="principles" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              // Our Values
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Foundational Principles
            </h2>
            <p className="leading-relaxed text-text-secondary">
              For over a decade, Quantum has been cultivating lasting partnerships and spearheading impactful cryptographic projects. As a leading post-quantum encryption consultancy, we have established ourselves as a trusted authority in the transition to quantum-safe infrastructure.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              With a roster of enduring enterprise clientele, Quantum stands as a team of seasoned cryptographic professionals possessing deep expertise spanning government, finance, healthcare, and critical infrastructure sectors.
            </p>
          </motion.div>

          {/* Right: numbered principle cards - matching old template masonry grid */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {PRINCIPLES.map((principle, i) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-scan-effect group relative rounded-xl border border-glass-border bg-glass p-5 backdrop-blur-xl transition-all duration-500 hover:border-cyan/30"
              >
                {/* Decorative top/left shapes like old template */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan/40 to-transparent" />
                <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-cyan/40 to-transparent" />

                <h3 className="mb-2 font-mono text-sm font-bold tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {principle.description}
                </p>
                <span className="mt-3 block font-mono text-3xl font-black text-cyan/10 transition-colors group-hover:text-cyan/20">
                  {principle.number}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

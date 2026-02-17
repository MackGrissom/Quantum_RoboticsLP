"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT } from "@/lib/constants";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Left: text content (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              {ABOUT.topTitle}
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {ABOUT.heading}
            </h2>

            <div className="space-y-4">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-text-secondary">
                  {p}
                </p>
              ))}
            </div>

            {/* Badge - styled like old template */}
            <div className="mt-8 inline-block rounded-lg border border-cyan/20 bg-cyan/5 px-5 py-3">
              <p className="text-sm font-medium text-cyan">{ABOUT.badge}</p>
            </div>
          </motion.div>

          {/* Right: experience callout (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center md:col-span-2"
          >
            <div className="w-full rounded-2xl border border-glass-border bg-glass p-10 text-center backdrop-blur-xl">
              <div className="mb-2 border-b border-glass-border pb-4">
                <p className="text-sm text-text-secondary">{ABOUT.badge}</p>
              </div>
              <div className="pt-4">
                <span className="font-mono text-6xl font-black text-cyan md:text-7xl">
                  {ABOUT.experience.number}
                </span>
                <p className="mt-2 text-sm text-text-secondary">
                  {ABOUT.experience.label}
                </p>
              </div>
            </div>

            {/* 2030 threat stat */}
            <div className="mt-6 w-full rounded-xl border border-danger/20 bg-danger/5 p-6 text-center">
              <span className="font-mono text-4xl font-black text-danger">2030</span>
              <p className="mt-2 text-xs text-text-secondary">
                Estimated year quantum computers break RSA-2048
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-danger animate-pulse" />
                <span className="font-mono text-xs text-danger">THREAT LEVEL: CRITICAL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

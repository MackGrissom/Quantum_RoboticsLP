"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/glow-button";
import { CTA as CTA_CONTENT } from "@/lib/constants";

export function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            // Get Started
          </span>

          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {CTA_CONTENT.heading}
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg text-text-secondary">
            {CTA_CONTENT.subheading}
          </p>

          <GlowButton href="#">{CTA_CONTENT.buttonLabel}</GlowButton>

          <p className="mt-8 font-mono text-xs text-text-tertiary">
            No commitment required. Free initial assessment.
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
    </section>
  );
}

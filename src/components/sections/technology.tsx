"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ALGORITHMS } from "@/lib/constants";

function SecurityBar({ level, inView }: { level: number; inView: boolean }) {
  return (
    <div className="mt-4">
      <div className="mb-1 flex justify-between">
        <span className="font-mono text-xs text-text-tertiary">Security Level</span>
        <span className="font-mono text-xs text-cyan">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-glass-border">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan to-purple"
        />
      </div>
    </div>
  );
}

export function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technology" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// Technology"
          title="NIST-Standardized Algorithms"
          subtitle="The cryptographic primitives securing the post-quantum era"
        />

        <div ref={ref} className="grid gap-6 sm:grid-cols-2">
          {ALGORITHMS.map((algo, i) => (
            <GlassCard key={algo.name} delay={i * 0.1}>
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded border border-cyan/20 bg-cyan/10 px-2 py-0.5 font-mono text-xs text-cyan">
                  {algo.standard}
                </span>
                <span className="font-mono text-xs text-text-tertiary">{algo.type}</span>
              </div>
              <h3 className="mb-2 font-mono text-xl font-bold tracking-tight">
                {algo.name}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {algo.description}
              </p>
              <SecurityBar level={algo.securityLevel} inView={isInView} />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

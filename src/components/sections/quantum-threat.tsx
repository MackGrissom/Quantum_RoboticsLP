"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { THREAT_TIMELINE, THREAT_INFO } from "@/lib/constants";

export function QuantumThreat() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="threat"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Red ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-danger/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// Threat Assessment"
          title={THREAT_INFO.heading}
          subtitle={THREAT_INFO.subheading}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center text-text-secondary leading-relaxed"
        >
          {THREAT_INFO.description}
        </motion.p>

        {/* Timeline */}
        <div ref={ref} className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-danger md:left-1/2" />

          {THREAT_TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-8 flex items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`ml-16 flex-1 rounded-lg border p-4 backdrop-blur-sm md:ml-0 ${
                  item.status === "critical"
                    ? "border-danger/30 bg-danger/10"
                    : item.status === "active"
                    ? "border-cyan/30 bg-cyan/5"
                    : "border-glass-border bg-glass"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold tracking-wider ${
                    item.status === "critical"
                      ? "text-danger"
                      : item.status === "active"
                      ? "text-cyan"
                      : "text-text-tertiary"
                  }`}
                >
                  {item.year}
                </span>
                <p className="mt-1 text-sm text-text-secondary">{item.event}</p>
              </div>

              {/* Dot */}
              <div
                className={`absolute left-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2 ${
                  item.status === "critical"
                    ? "bg-danger shadow-[0_0_12px_rgba(239,68,68,0.6)]"
                    : item.status === "active"
                    ? "bg-cyan shadow-[0_0_12px_rgba(0,240,255,0.6)]"
                    : item.status === "complete"
                    ? "bg-purple"
                    : "bg-text-tertiary"
                }`}
              />

              {/* Spacer for desktop layout */}
              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-12 max-w-xl rounded-lg border border-danger/30 bg-danger/10 p-6 text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-danger animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest text-danger">
              WARNING
            </span>
          </div>
          <p className="text-sm text-text-secondary">{THREAT_INFO.warning}</p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RESPONSIBILITY } from "@/lib/constants";

export function Responsibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Parallax-style background (replaces old react-parallax) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{
          backgroundImage:
            "url('data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="#030712" width="100" height="100"/><circle fill="#00f0ff" cx="50" cy="50" r="1" opacity="0.3"/></svg>'
            ) +
            "')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div ref={ref} className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: stat box + badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl border border-glass-border bg-glass p-8 backdrop-blur-xl">
              <div className="border-b border-glass-border pb-4">
                <p className="text-sm text-text-secondary">{RESPONSIBILITY.badge}</p>
              </div>
              <div className="flex items-end gap-4 pt-4">
                <span className="font-mono text-6xl font-black text-cyan">
                  {RESPONSIBILITY.stat.number}
                </span>
                <span className="mb-2 text-sm text-text-secondary">
                  {RESPONSIBILITY.stat.label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: capabilities grid - matching old template list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {RESPONSIBILITY.capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2 rounded-lg border border-glass-border bg-glass/50 px-3 py-2.5 text-sm text-text-secondary transition-colors hover:border-cyan/30 hover:text-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {cap}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

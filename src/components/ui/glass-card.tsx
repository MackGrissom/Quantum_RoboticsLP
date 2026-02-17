"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`card-scan-effect rounded-xl border border-glass-border bg-glass p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] ${
        isInView ? "animate-scan" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

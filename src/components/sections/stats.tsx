"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          label="// Metrics"
          title="By the Numbers"
          subtitle="Key specifications of post-quantum cryptographic standards"
        />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={"prefix" in stat ? (stat as { prefix: string }).prefix : ""}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

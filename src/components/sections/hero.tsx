"use client";

import { LatticeGrid } from "@/components/canvas/lattice-grid";
import { TerminalText } from "@/components/ui/terminal-text";
import { GlowButton } from "@/components/ui/glow-button";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <LatticeGrid />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[1]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Glitch heading */}
        <div className="glitch-hover relative mb-6 cursor-default">
          <h1 className="text-6xl font-black tracking-tighter md:text-8xl lg:text-9xl">
            <span className="bg-gradient-to-r from-cyan via-foreground to-purple bg-clip-text text-transparent">
              {HERO.headline}
            </span>
          </h1>
          {/* Glitch layers */}
          <h1
            className="glitch-layer-1 pointer-events-none absolute inset-0 text-6xl font-black tracking-tighter text-cyan opacity-0 md:text-8xl lg:text-9xl"
            aria-hidden="true"
          >
            {HERO.headline}
          </h1>
          <h1
            className="glitch-layer-2 pointer-events-none absolute inset-0 text-6xl font-black tracking-tighter text-purple opacity-0 md:text-8xl lg:text-9xl"
            aria-hidden="true"
          >
            {HERO.headline}
          </h1>
        </div>

        {/* Corporate tagline from old template */}
        <p className="mb-6 text-xl text-text-secondary md:text-2xl">
          {HERO.tagline}
        </p>

        {/* Subtitle pill */}
        <div className="mx-auto mb-8 inline-block rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5">
          <span className="font-mono text-xs tracking-widest text-cyan">
            POST-QUANTUM ENCRYPTION
          </span>
        </div>

        {/* Terminal text */}
        <div className="mx-auto mb-12 max-w-xl text-left">
          <TerminalText lines={HERO.sublines} />
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <GlowButton href={HERO.cta1.href}>{HERO.cta1.label}</GlowButton>
          <GlowButton href={HERO.cta2.href} variant="secondary">
            {HERO.cta2.label}
          </GlowButton>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-text-tertiary">SCROLL</span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-text-tertiary"
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="8" cy="8" r="2" fill="currentColor">
              <animate
                attributeName="cy"
                values="8;16;8"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}

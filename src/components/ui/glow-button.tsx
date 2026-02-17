interface GlowButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}

export function GlowButton({ children, href, variant = "primary" }: GlowButtonProps) {
  if (variant === "secondary") {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-glass px-6 py-3 font-mono text-sm font-medium tracking-wider text-foreground backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:text-cyan"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 font-mono text-sm font-bold tracking-wider text-background transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105"
    >
      {children}
    </a>
  );
}

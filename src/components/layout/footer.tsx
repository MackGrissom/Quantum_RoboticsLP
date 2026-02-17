export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded border border-cyan/30 bg-cyan/10 flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-cyan">Q</span>
          </div>
          <span className="font-mono text-xs tracking-widest text-text-secondary">
            QUANTUM
          </span>
        </div>

        <p className="font-mono text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Quantum PQC. All systems encrypted.
        </p>

        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-mono text-xs text-cyan">SYSTEMS ONLINE</span>
        </div>
      </div>
    </footer>
  );
}

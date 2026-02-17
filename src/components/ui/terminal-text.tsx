"use client";

import { useEffect, useState } from "react";

interface TerminalTextProps {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
}

export function TerminalText({
  lines,
  typingSpeed = 30,
  lineDelay = 800,
}: TerminalTextProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Line complete, add to displayed and move to next
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, typingSpeed, lineDelay]);

  const activeLine =
    currentLine < lines.length
      ? lines[currentLine].slice(0, currentChar)
      : null;

  return (
    <div className="font-mono text-sm text-text-secondary md:text-base">
      {displayedLines.map((line, i) => (
        <div key={i} className="opacity-60">
          {line}
        </div>
      ))}
      {activeLine !== null && (
        <div className="typing-cursor text-cyan">{activeLine}</div>
      )}
    </div>
  );
}

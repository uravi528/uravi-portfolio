"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { TerminalLine } from "@/data/content";

const statusColor: Record<NonNullable<TerminalLine["type"]>, string> = {
  cmd: "text-cream",
  ok: "text-green-400",
  warn: "text-yellow-400",
  info: "text-cream/40",
};

const statusPrefix: Record<NonNullable<TerminalLine["type"]>, string> = {
  cmd: "$",
  ok: "✓",
  warn: "⚠",
  info: "·",
};

export function ProcessTerminal({
  lines,
  fileLabel,
}: {
  lines: TerminalLine[];
  fileLabel: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [visibleLines, setVisibleLines] = useState(0);
  const [charsOnCurrent, setCharsOnCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => setVisibleLines(lines.length), 0);
      return () => clearTimeout(id);
    }

    let cancelled = false;
    let lineIndex = 0;

    function typeLine() {
      if (cancelled || lineIndex >= lines.length) return;
      const text = lines[lineIndex].text;
      let charIndex = 0;
      const typeSpeed = lines[lineIndex].type === "cmd" ? 22 : 8;

      const interval = setInterval(() => {
        if (cancelled) return clearInterval(interval);
        charIndex++;
        setCharsOnCurrent(charIndex);
        if (charIndex >= text.length) {
          clearInterval(interval);
          setTimeout(() => {
            if (cancelled) return;
            lineIndex++;
            setVisibleLines(lineIndex);
            setCharsOnCurrent(0);
            setTimeout(typeLine, 180);
          }, 220);
        }
      }, typeSpeed);
    }

    typeLine();
    return () => {
      cancelled = true;
    };
  }, [inView, lines]);

  return (
    <div ref={ref} className="w-full rounded-xl overflow-hidden border border-line/60 shadow-[0_1px_2px_rgba(26,24,22,0.05)]">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-ink/95 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[11px] text-cream/40 ml-1">{fileLabel}</span>
      </div>
      <div className="bg-ink px-4 py-4 sm:px-5 sm:py-5 font-mono text-[13px] leading-relaxed min-h-[140px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={statusColor[line.type ?? "cmd"]}>
            <span className="text-cream/30 mr-2">{statusPrefix[line.type ?? "cmd"]}</span>
            {line.text}
          </div>
        ))}
        {visibleLines < lines.length && (
          <div className={statusColor[lines[visibleLines]?.type ?? "cmd"]}>
            <span className="text-cream/30 mr-2">{statusPrefix[lines[visibleLines]?.type ?? "cmd"]}</span>
            {lines[visibleLines]?.text.slice(0, charsOnCurrent)}
            <span className="inline-block w-[7px] h-[13px] bg-cream/70 ml-0.5 align-middle animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

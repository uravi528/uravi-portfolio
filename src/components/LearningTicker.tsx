"use client";

import { currentlyLearning } from "@/data/content";

const typeColors: Record<string, string> = {
  cert: "bg-rust/15 text-rust",
  reading: "bg-blue/60 text-ink",
  course: "bg-sage text-ink",
  building: "bg-cream-warm text-ink-soft border border-line",
};

export function LearningTicker() {
  const doubled = [...currentlyLearning, ...currentlyLearning];

  return (
    <div className="w-full overflow-hidden border-t border-b border-line py-3 bg-cream-warm/40">
      <div className="flex animate-ticker gap-6 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-body text-xs shrink-0 ${typeColors[item.type]}`}
          >
            <span className="font-medium">{item.label}</span>
            <span className="opacity-60">· {item.note}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

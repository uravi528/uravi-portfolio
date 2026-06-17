"use client";

import { useState } from "react";
import {
  Bug,
  Camera,
  Users,
  Video,
  ShieldCheck,
  Code,
  ChevronRight,
} from "lucide-react";
import { DetailModal } from "./DetailModal";
import type { HistoryEntry } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Bug: Bug,
  Camera: Camera,
  Users: Users,
  Video: Video,
  ShieldCheck: ShieldCheck,
  Code: Code,
};

export function HistoryItem({ entry }: { entry: HistoryEntry }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[entry.icon] ?? Users;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex w-full items-center gap-4 sm:gap-6 py-5 sm:py-6 border-b border-line text-left cursor-pointer transition-colors hover:bg-cream-warm/60 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-lg"
      >
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-cream-warm text-ink-soft group-hover:bg-rust/10 group-hover:text-rust transition-colors">
          <Icon size={16} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg sm:text-xl text-ink leading-snug">
            {entry.role}
          </h3>
        </div>

        <div className="hidden sm:block font-body text-sm text-ink-soft shrink-0">
          {entry.org}
        </div>

        <div className="font-mono text-xs sm:text-sm text-ink-soft/70 shrink-0 w-20 sm:w-28 text-right">
          {entry.period}
        </div>

        <ChevronRight
          size={16}
          className="shrink-0 text-ink-soft/40 group-hover:text-rust group-hover:translate-x-0.5 transition-all"
        />
      </button>

      <DetailModal
        isOpen={open}
        onClose={() => setOpen(false)}
        icon={<Icon size={20} className="text-rust" />}
        title={entry.role}
        subtitle={`${entry.org} · ${entry.period}`}
        body={entry.blurb}
        accentClass="bg-rust/10"
      />
    </>
  );
}

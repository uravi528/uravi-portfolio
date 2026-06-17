"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  Bot,
  ShieldAlert,
  ScanSearch,
  Radar,
  Network,
  ArrowUpRight,
} from "lucide-react";
import { DetailModal } from "./DetailModal";
import type { Project } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Image: ImageIcon,
  Bot: Bot,
  ShieldAlert: ShieldAlert,
  ScanSearch: ScanSearch,
  Radar: Radar,
  Network: Network,
};

const accentStyles: Record<
  Project["accent"],
  { card: string; chip: string; text: string }
> = {
  cream: {
    card: "bg-cream-warm border-line",
    chip: "bg-rust/10 text-rust",
    text: "text-ink",
  },
  sage: {
    card: "bg-sage border-sage-deep/30",
    chip: "bg-sage-deep/25 text-ink",
    text: "text-ink",
  },
  dark: {
    card: "bg-ink border-ink",
    chip: "bg-white/10 text-cream",
    text: "text-cream",
  },
  blue: {
    card: "bg-blue border-blue-deep/30",
    chip: "bg-blue-deep/25 text-ink",
    text: "text-ink",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[project.icon] ?? ImageIcon;
  const styles = accentStyles[project.accent];
  const isDark = project.accent === "dark";

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`group relative flex flex-col justify-between rounded-2xl border p-6 text-left h-64 sm:h-72 cursor-pointer ${styles.card}`}
      >
        <div className="flex items-start justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${styles.chip}`}
          >
            <Icon size={18} />
          </div>
          <ArrowUpRight
            size={18}
            className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
              isDark ? "text-cream/50" : "text-ink-soft/60"
            }`}
          />
        </div>

        <div>
          {project.status === "building" && (
            <span
              className={`inline-block font-mono text-[11px] uppercase tracking-wide mb-2 ${
                isDark ? "text-cream/50" : "text-ink-soft/70"
              }`}
            >
              in progress
            </span>
          )}
          <h3
            className={`font-display text-xl sm:text-2xl leading-snug mb-1.5 ${styles.text}`}
          >
            {project.title}
          </h3>
          <p
            className={`font-body text-sm ${
              isDark ? "text-cream/70" : "text-ink-soft"
            }`}
          >
            {project.category} · {project.summary}
          </p>
        </div>
      </motion.button>

      <DetailModal
        isOpen={open}
        onClose={() => setOpen(false)}
        icon={<Icon size={20} className="text-rust" />}
        title={project.title}
        subtitle={project.category}
        body={project.blurb}
        link={project.link}
        accentClass="bg-rust/10"
      />
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Image as ImageIcon, Bot, ShieldAlert, ScanSearch, Radar, Network, ArrowUpRight, Clock,
} from "lucide-react";
import type { Project } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Image: ImageIcon, Bot, ShieldAlert, ScanSearch, Radar, Network,
};

const accentStyles: Record<Project["accent"], { card: string; chip: string; text: string; sub: string }> = {
  cream: { card: "bg-cream-warm border-line", chip: "bg-rust/10 text-rust", text: "text-ink", sub: "text-ink-soft" },
  sage:  { card: "bg-sage border-sage-deep/30", chip: "bg-sage-deep/25 text-ink", text: "text-ink", sub: "text-ink-soft" },
  dark:  { card: "bg-ink border-ink", chip: "bg-white/10 text-cream", text: "text-cream", sub: "text-cream/60" },
  blue:  { card: "bg-blue border-blue-deep/30", chip: "bg-blue-deep/25 text-ink", text: "text-ink", sub: "text-ink-soft" },
};

function CardInner({ project, clickable }: { project: Project; clickable: boolean }) {
  const Icon = iconMap[project.icon] ?? ImageIcon;
  const s = accentStyles[project.accent];
  const isDark = project.accent === "dark";

  return (
    <motion.div
      whileHover={clickable ? { y: -4 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`group relative flex flex-col justify-between rounded-2xl border p-6 h-60 sm:h-64 ${clickable ? "cursor-pointer" : "cursor-default"} ${s.card}`}
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.chip}`}>
          <Icon size={18} />
        </div>
        {clickable ? (
          <ArrowUpRight size={18} className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isDark ? "text-cream/40" : "text-ink-soft/50"}`} />
        ) : (
          <Clock size={15} className={isDark ? "text-cream/25" : "text-ink-soft/35"} />
        )}
      </div>

      <div>
        {!clickable && (
          <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest mb-2 px-2 py-0.5 rounded-full border ${isDark ? "border-cream/15 text-cream/40" : "border-ink/10 text-ink-soft/50"}`}>
            pending
          </span>
        )}
        <h3 className={`font-display text-xl leading-snug mb-1 ${s.text}`}>{project.title}</h3>
        <p className={`font-body text-sm ${s.sub}`}>{project.summary}</p>
      </div>
    </motion.div>
  );
}

export function WorkProjectCard({ project }: { project: Project }) {
  if (project.status === "live") {
    return (
      <Link href={`/projects/${project.id}`}>
        <CardInner project={project} clickable={true} />
      </Link>
    );
  }
  // Building projects: no link, no 404, just the card with "pending"
  return <CardInner project={project} clickable={false} />;
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Image as ImageIcon, Bot, ShieldAlert, ScanSearch, Radar, Network, ArrowUpRight,
} from "lucide-react";
import type { Project } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Image: ImageIcon, Bot, ShieldAlert, ScanSearch, Radar, Network,
};

function CardInner({ project }: { project: Project }) {
  const Icon = iconMap[project.icon] ?? ImageIcon;
  const isBuilding = project.status === "building";

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 14px 30px -14px rgba(26,24,22,0.20)" }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-between rounded-xl border border-line bg-cream p-6 h-56 sm:h-60 cursor-pointer shadow-[0_1px_2px_rgba(26,24,22,0.05)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft/70">
          <Icon size={13} className="shrink-0" />
          <span>{project.category}</span>
        </div>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-rust opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
        />
      </div>

      <div>
        {isBuilding && (
          <span className="inline-block font-mono text-[10px] uppercase tracking-widest mb-2 text-ink-soft/50">
            in progress
          </span>
        )}
        <h3 className="font-display text-xl sm:text-2xl leading-snug mb-1.5 text-ink">
          {project.title}
        </h3>
        <p className="font-body text-sm text-ink-soft">{project.summary}</p>
      </div>
    </motion.div>
  );
}

export function WorkProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <CardInner project={project} />
    </Link>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, ExternalLink,
  Image as ImageIcon, Bot, ShieldAlert, ScanSearch, Radar, Network,
} from "lucide-react";
import type { Project } from "@/data/content";
import { ProcessTerminal } from "@/components/ProcessTerminal";

const iconMap: Record<string, React.ElementType> = {
  Image: ImageIcon, Bot, ShieldAlert, ScanSearch, Radar, Network,
};

const accentBg: Record<string, string> = {
  cream: "#EFE8DC",
  sage: "#D6E0C7",
  dark: "#232320",
  blue: "#D3DFF0",
};

const accentText: Record<string, string> = {
  cream: "#1A1816",
  sage: "#1A1816",
  dark: "#F7F4EE",
  blue: "#1A1816",
};

// Small signature pointer glyph — cybersecurity nod: reads as a scan/target
// tick as much as a cursor. Used sparingly, next to key headlines only.
function Marker({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4v7M4 4h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 20v-7M20 20h-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export function ProjectDetail({ project }: { project: Project }) {
  const Icon = iconMap[project.icon] ?? ImageIcon;
  const bg = accentBg[project.accent];
  const textColor = accentText[project.accent];
  const stack = project.category.split("·").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 font-body text-sm text-ink-soft hover:text-ink transition-colors mb-12"
      >
        <ArrowLeft size={16} />
        Back to work
      </Link>

      {/* Eyebrow */}
      <div className="flex items-center gap-2 text-rust mb-4">
        <Marker />
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft/60">
          Case study
        </span>
      </div>

      {/* Title */}
      <h1 className="font-display italic text-4xl sm:text-5xl text-ink leading-tight mb-3">
        {project.title}
      </h1>
      <p className="font-body text-lg text-ink-soft mb-10 max-w-xl">{project.summary}</p>

      {/* Metadata row */}
      <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-b border-line py-6 mb-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/50 mb-1.5">Year</p>
          <p className="font-body text-sm text-ink">{project.year}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/50 mb-1.5">Stack</p>
          <p className="font-body text-sm text-ink">{stack.join(", ")}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/50 mb-1.5">Status</p>
          <p className="font-body text-sm text-ink">{project.status === "live" ? "Live" : "In progress"}</p>
        </div>
      </div>

      {/* Preview */}
      <motion.div {...fadeUp(0)} className="mb-16">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/50 mb-4">Preview</p>
        <div
          className="w-full rounded-2xl flex items-center justify-center overflow-hidden"
          style={{ background: bg, height: "260px" }}
        >
          <Icon size={56} style={{ color: textColor, opacity: 0.35 }} strokeWidth={1.25} />
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-4 py-2 font-body text-sm hover:bg-ink-soft transition-colors"
            >
              <ExternalLink size={14} />
              View live
            </a>
          )}
          {project.instagram && (
            <a
              href={project.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-body text-sm text-ink hover:bg-cream-warm transition-colors"
            >
              @hueman.story
            </a>
          )}
        </div>
      </motion.div>

      {/* The problem / why */}
      <motion.section {...fadeUp(0)} className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Marker className="text-ink-soft/40" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/50">Why I built it</p>
        </div>
        <p className="font-display text-2xl sm:text-3xl text-ink leading-snug mb-4 max-w-xl">
          {project.why.split(".")[0]}.
        </p>
        <p className="font-body text-base text-ink-soft leading-relaxed max-w-xl">{project.why}</p>
      </motion.section>

      {/* Process — animated terminal log */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Marker className="text-ink-soft/40" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/50">How it came together</p>
        </div>
        <p className="font-body text-base text-ink-soft leading-relaxed max-w-xl mb-6">
          {project.process}
        </p>
        <div className="max-w-xl">
          <ProcessTerminal lines={project.terminalLines} fileLabel={`${project.id}.sh`} />
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Results */}
      <motion.section {...fadeUp(0)} className="border-t border-line pt-10">
        <div className="flex items-center gap-2 mb-4">
          <Marker className="text-ink-soft/40" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/50">
            {project.status === "live" ? "What difference it made" : "Where it stands"}
          </p>
        </div>
        <p className="font-body text-base text-ink-soft leading-relaxed max-w-xl">{project.results}</p>
      </motion.section>
    </div>
  );
}

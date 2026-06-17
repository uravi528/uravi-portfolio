import { projects } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

const accentBg: Record<string, string> = {
  cream: "#E8DDD0",
  sage: "#C5D4B8",
  dark: "#1A1A1A",
  blue: "#C0CFEA",
};

const accentText: Record<string, string> = {
  cream: "#1A1816",
  sage: "#1A1816",
  dark: "#F7F4EE",
  blue: "#1A1816",
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const bg = accentBg[project.accent];
  const textColor = accentText[project.accent];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 font-body text-sm text-ink-soft hover:text-ink transition-colors mb-10"
      >
        <ArrowLeft size={16} />
        Back to work
      </Link>

      {/* Visual hero block */}
      <div
        className="w-full rounded-2xl mb-10 flex items-center justify-center"
        style={{ background: bg, height: "280px" }}
      >
        <p className="font-display text-5xl sm:text-7xl italic" style={{ color: textColor, opacity: 0.15 }}>
          {project.title}
        </p>
      </div>

      <div className="space-y-2 mb-8">
        {project.status === "building" && (
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-ink-soft/60 mb-1">
            In progress
          </span>
        )}
        <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
          {project.title}
        </h1>
        <p className="font-mono text-sm text-ink-soft/70">{project.category}</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Instagram
          </a>
        )}
      </div>

      <div className="grid sm:grid-cols-[1fr_1px_1fr] gap-8 sm:gap-12 border-t border-line pt-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/60 mb-4">
            What it is
          </p>
          <p className="font-body text-base text-ink-soft leading-relaxed">
            {project.blurb}
          </p>
        </div>

        <div className="hidden sm:block bg-line w-px" />

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/60 mb-4">
            Why I built it
          </p>
          <p className="font-body text-base text-ink-soft leading-relaxed">
            {project.why}
          </p>
        </div>
      </div>

      <div className="border-t border-line mt-10 pt-10">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/60 mb-4">
          How it came together
        </p>
        <p className="font-body text-base text-ink-soft leading-relaxed max-w-2xl">
          {project.process}
        </p>
      </div>
    </div>
  );
}

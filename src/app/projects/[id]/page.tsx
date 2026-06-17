import { projects } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

const accentBg: Record<string, string> = {
  cream: "#E8DDD0",
  sage:  "#C5D4B8",
  dark:  "#1A1A1A",
  blue:  "#C0CFEA",
};

const accentText: Record<string, string> = {
  cream: "#1A1816",
  sage:  "#1A1816",
  dark:  "#F7F4EE",
  blue:  "#1A1816",
};

// Decorative SVG visuals per project — no external images needed
function ProjectVisual({ id, bg, textColor }: { id: string; bg: string; textColor: string }) {
  if (id === "nyikm-bot") {
    return (
      <div className="w-full rounded-2xl mb-10 flex items-center justify-center" style={{ background: bg, height: "280px" }}>
        {/* Telegram bot icon */}
        <svg width="80" height="80" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.4 }}>
          <circle cx="120" cy="120" r="120" fill={textColor} fillOpacity="0.15"/>
          <path d="M179.4 60.3L23.1 117.7c-10.5 4.2-10.4 10-1.9 12.6l40.3 12.6 15.6 47.2c1.9 5.3 3.8 7.3 8.1 7.3 3.3 0 4.8-1.6 6.7-3.4l19.9-19.3 41.4 30.5c7.6 4.2 13.1 2 15-7l27.2-128.2c2.8-11.1-4.2-16.1-13.9-12.7z" fill={textColor} fillOpacity="0.5"/>
        </svg>
      </div>
    );
  }

  if (id === "hueman-gallery") {
    return (
      <div className="w-full rounded-2xl mb-10 overflow-hidden" style={{ background: bg, height: "280px" }}>
        <div className="w-full h-full grid grid-cols-3 gap-1 p-4">
          {["#D4C4B0","#C8B8A0","#E0D4C4","#B8C8A8","#C4D0E0","#D8C8B8"].map((c, i) => (
            <div key={i} className="rounded-lg" style={{ background: c }} />
          ))}
        </div>
      </div>
    );
  }

  // Default for everything else
  return (
    <div className="w-full rounded-2xl mb-10 flex items-center justify-center" style={{ background: bg, height: "280px" }}>
      <p className="font-display text-5xl sm:text-7xl italic" style={{ color: textColor, opacity: 0.12 }}>
        {id.replace(/-/g, " ")}
      </p>
    </div>
  );
}

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

      <ProjectVisual id={project.id} bg={bg} textColor={textColor} />

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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            @hueman.story
          </a>
        )}
      </div>

      <div className="grid sm:grid-cols-[1fr_1px_1fr] gap-8 sm:gap-12 border-t border-line pt-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/60 mb-4">What it is</p>
          <p className="font-body text-base text-ink-soft leading-relaxed">{project.blurb}</p>
        </div>
        <div className="hidden sm:block bg-line w-px" />
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/60 mb-4">Why I built it</p>
          <p className="font-body text-base text-ink-soft leading-relaxed">{project.why}</p>
        </div>
      </div>

      <div className="border-t border-line mt-10 pt-10">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/60 mb-4">How it came together</p>
        <p className="font-body text-base text-ink-soft leading-relaxed max-w-2xl">{project.process}</p>
      </div>
    </div>
  );
}

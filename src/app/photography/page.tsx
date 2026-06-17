import { Eyebrow } from "@/components/Eyebrow";
import { ExternalLink } from "lucide-react";

export default function PhotographyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-16">
      <section>
        <Eyebrow>Photography</Eyebrow>
        <div className="mt-8 grid sm:grid-cols-[1.4fr_1fr] gap-10 sm:gap-16">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-5">
              Hueman Story
            </h1>
            <p className="font-body text-base text-ink-soft leading-relaxed mb-4">
              A photography and video business I co-run with my partner Hetu. We tell stories. We want to show the aspect of color within our human eye — the way a moment actually looks and feels, not how it was posed to look.
            </p>
            <p className="font-body text-base text-ink-soft leading-relaxed mb-4">
              We both handle the creative side — photos, video, direction. I also handle the web and technical side, including the client gallery built in React that clients use to browse and download their work.
            </p>
            <p className="font-body text-base text-ink-soft leading-relaxed mb-8">
              It started as something we cared about and grew into something real clients trust us with.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://hueman-gallery.vercel.app/showcase"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 font-body text-sm hover:bg-ink-soft transition-colors"
              >
                <ExternalLink size={14} />
                View gallery
              </a>
              <a
                href="https://instagram.com/hueman.story"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-body text-sm text-ink hover:bg-cream-warm transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                @hueman.story
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-cream-warm border border-line p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/60 mb-3">What we do</p>
              <ul className="font-body text-sm text-ink-soft space-y-2">
                <li>Candid event photography and video</li>
                <li>Large-scale community events</li>
                <li>Portraits and real moments</li>
                <li>Color-forward visual storytelling</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-cream-warm border border-line p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/60 mb-3">Tools</p>
              <ul className="font-body text-sm text-ink-soft space-y-2">
                <li>Darktable + Lightroom for photo editing</li>
                <li>DaVinci Resolve for video</li>
                <li>Custom gallery built in React + Supabase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Eyebrow>From the gallery</Eyebrow>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["#D4C4B0", "#C8B8A0", "#E0D4C4", "#B8C8A8", "#C4D0E0", "#D8C8B8"].map((color, i) => (
            <a
              key={i}
              href="https://hueman-gallery.vercel.app/showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl aspect-square"
              style={{ background: color }}
            >
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all flex items-center justify-center">
                <ExternalLink size={20} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
        <p className="font-body text-xs text-ink-soft/50 mt-3 text-center">
          Replace these placeholders with real photos in src/app/photography/page.tsx
        </p>
      </section>
    </div>
  );
}

import { LearningTicker } from "@/components/LearningTicker";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="px-4 sm:px-8 pt-16 sm:pt-24 pb-12 max-w-5xl mx-auto w-full">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-ink-soft/70 mb-6">
          Uravi Patel
        </p>

        <h1 className="font-display italic text-4xl sm:text-6xl leading-[1.2] text-ink max-w-3xl mb-8">
          Cybersecurity student. I build things{" "}
          <span className="text-rust">sometimes for security</span>,
          sometimes for my community, sometimes just because.
        </h1>

        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="mailto:uravi528@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 font-body text-sm font-medium hover:bg-ink-soft transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            uravi528@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/uravi-patel-6b5b74246"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-5 py-2.5 font-body text-sm font-medium text-ink hover:bg-cream-warm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
          <a href="/work" className="group rounded-xl border border-line bg-cream-warm/50 p-4 hover:border-rust/40 hover:bg-cream-warm transition-all">
            <p className="font-display text-lg text-ink mb-1 group-hover:text-rust transition-colors">Work</p>
            <p className="font-body text-xs text-ink-soft">Projects, resume, skills</p>
          </a>
          <a href="/about" className="group rounded-xl border border-line bg-cream-warm/50 p-4 hover:border-rust/40 hover:bg-cream-warm transition-all">
            <p className="font-display text-lg text-ink mb-1 group-hover:text-rust transition-colors">About</p>
            <p className="font-body text-xs text-ink-soft">Background, history</p>
          </a>
          <a href="/photography" className="group rounded-xl border border-line bg-cream-warm/50 p-4 hover:border-rust/40 hover:bg-cream-warm transition-all">
            <p className="font-display text-lg text-ink mb-1 group-hover:text-rust transition-colors">Photography</p>
            <p className="font-body text-xs text-ink-soft">Hueman Story</p>
          </a>
        </div>
      </section>

      <LearningTicker />
    </div>
  );
}

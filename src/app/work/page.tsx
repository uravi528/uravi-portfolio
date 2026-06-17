import { projects, skills } from "@/data/content";
import { WorkProjectCard } from "@/components/WorkProjectCard";
import { Eyebrow } from "@/components/Eyebrow";

export default function WorkPage() {
  const live = projects.filter((p) => p.status === "live");
  const building = projects.filter((p) => p.status === "building");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-20">

      {/* Resume — opens in new tab, no download */}
      <section>
        <Eyebrow>Resume</Eyebrow>
        <a
          href="/UraviPatel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex items-center justify-between rounded-2xl border border-line bg-cream-warm/50 p-6 sm:p-8 hover:border-rust/40 hover:bg-cream-warm transition-all"
        >
          <div>
            <p className="font-display text-2xl text-ink group-hover:text-rust transition-colors">
              Uravi Patel — Resume
            </p>
            <p className="font-body text-sm text-ink-soft mt-1">
              Cybersecurity · AI Model Testing · Photography
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line group-hover:border-rust group-hover:text-rust text-ink-soft transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10"/>
            </svg>
          </div>
        </a>
      </section>

      {/* Built & Live */}
      <section>
        <Eyebrow>Built and live</Eyebrow>
        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          {live.map((p) => <WorkProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      {/* Building */}
      <section>
        <Eyebrow>Building right now</Eyebrow>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {building.map((p) => <WorkProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      {/* Skills */}
      <section>
        <Eyebrow>Skills</Eyebrow>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {skills.map((group) => (
            <div key={group.category} className="rounded-xl border border-line p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-soft/70 mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-cream-warm border border-line px-3 py-1 font-body text-xs text-ink">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

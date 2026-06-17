import { Mail, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { ProjectCard } from "@/components/ProjectCard";
import { HistoryItem } from "@/components/HistoryItem";
import { projects, history, stats } from "@/data/content";

export default function Home() {
  const liveProjects = projects.filter((p) => p.status === "live");
  const buildingProjects = projects.filter((p) => p.status === "building");

  return (
    <main className="flex flex-col">
      {/* ===================== HERO ===================== */}
      <section className="px-4 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24 max-w-5xl mx-auto w-full">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-ink-soft/70 mb-6">
          Uravi Patel
        </p>
        <h1 className="font-display text-4xl sm:text-6xl leading-[1.15] text-ink max-w-3xl">
          Cybersecurity student. I build things —{" "}
          <span className="italic text-rust">sometimes for security</span>,
          sometimes for my community, sometimes just because.
        </h1>

        <div className="flex flex-wrap gap-3 mt-10">
          <a
            href="mailto:uravi528@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 font-body text-sm font-medium hover:bg-ink-soft transition-colors"
          >
            <Mail size={16} />
            uravi528@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/uravipatel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-5 py-2.5 font-body text-sm font-medium text-ink hover:bg-cream-warm transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto w-full">
        <Eyebrow>About</Eyebrow>

        <div className="grid sm:grid-cols-[1.4fr_1fr] gap-10 sm:gap-16 mt-8">
          <p className="font-display text-2xl sm:text-3xl leading-snug text-ink">
            I&apos;m Uravi, an early cybersecurity junior at SUNY Canton.
            Right now I&apos;m interning at{" "}
            <span className="text-rust">Handshake</span> testing AI models,
            and I spend a lot of time building tools — some for security
            practice, some for my mandir community, some for a photography
            business I co-run.
          </p>

          <div className="font-body text-base text-ink-soft space-y-4 sm:pt-2">
            <p>
              I like projects that are actually used by real people, not just
              sitting in a repo. That&apos;s true whether it&apos;s a Telegram
              bot or a gallery app for a client.
            </p>
            <p>
              I made these tools because there&apos;s so much you can build
              yourself for free — and using tech in creative ways just makes
              sense to me.{" "}
              <span className="italic text-ink">
                My motto: why not give your best?
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== AI MODEL TESTING ===================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto w-full">
        <Eyebrow>At Handshake</Eyebrow>

        <div className="mt-8 rounded-2xl bg-ink p-7 sm:p-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 mb-5">
            <ShieldCheck size={18} className="text-cream" />
          </div>
          <p className="font-display text-xl sm:text-2xl leading-relaxed text-cream max-w-3xl">
            I work across multiple AI evaluation projects — writing prompts
            and rubrics, reviewing model outputs across text, image, and
            audio, and specifically designing prompts meant to make models{" "}
            <span className="italic text-rust-soft">fail</span> so we can
            find and fix the gaps.
          </p>
          <p className="font-body text-sm sm:text-base text-cream/60 mt-4 max-w-2xl">
            It&apos;s less &ldquo;using AI&rdquo; and more stress-testing it —
            figuring out where it breaks so it gets safer and more reliable.
          </p>
        </div>
      </section>

      {/* ===================== PROJECTS: BUILT & LIVE ===================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto w-full">
        <Eyebrow>Built &amp; live</Eyebrow>

        <div className="grid sm:grid-cols-2 gap-5 mt-8">
          {liveProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ===================== PROJECTS: IN PROGRESS ===================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto w-full">
        <Eyebrow>Building right now</Eyebrow>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {buildingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ===================== SHORT HISTORY ===================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto w-full">
        <Eyebrow>A short history</Eyebrow>

        <div className="mt-8">
          {history.map((entry) => (
            <HistoryItem key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto w-full">
        <div className="grid sm:grid-cols-2 gap-10 sm:gap-16 border-t border-line pt-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl sm:text-6xl text-ink">
                {stat.value}
              </p>
              <p className="font-body text-sm sm:text-base text-ink-soft mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="px-4 sm:px-8 py-10 max-w-5xl mx-auto w-full border-t border-line">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-body text-sm text-ink-soft">
          <p>Uravi Patel · Cybersecurity Student — SUNY Canton</p>
          <p>&copy; 2026</p>
        </div>
      </footer>
    </main>
  );
}

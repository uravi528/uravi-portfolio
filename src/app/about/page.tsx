import { history, stats, currentlyLearning } from "@/data/content";
import { HistoryItem } from "@/components/HistoryItem";
import { Eyebrow } from "@/components/Eyebrow";

const typeLabel: Record<string, string> = {
  cert: "Cert",
  reading: "Reading",
  course: "Course",
  building: "Building",
};

const typeStyle: Record<string, string> = {
  cert: "bg-rust/10 text-rust border-rust/20",
  reading: "bg-blue/60 text-ink border-blue-deep/20",
  course: "bg-sage text-ink border-sage-deep/20",
  building: "bg-cream-warm text-ink-soft border-line",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-20">

      {/* About */}
      <section>
        <Eyebrow>About</Eyebrow>
        <div className="grid sm:grid-cols-[1.4fr_1fr] gap-10 sm:gap-16 mt-8">
          <p className="font-display text-2xl sm:text-3xl leading-snug text-ink">
            I&apos;m Uravi, an early cybersecurity junior at{" "}
            <span className="text-rust">SUNY Canton</span>. Right now I&apos;m
            interning at Handshake testing AI models, and I spend a lot of time
            building tools: some for security practice, some for my community,
            some for a photography business I co-run.
          </p>
          <div className="font-body text-base text-ink-soft space-y-4 sm:pt-2">
            <p>
              I like projects that are actually used by real people, not just
              sitting in a repo.
            </p>
            <p>
              I made these tools because there&apos;s so much you can build
              yourself for free, and using tech in creative ways just makes
              sense to me.{" "}
              <span className="italic text-ink">
                My motto: why not give your best?
              </span>
            </p>
            <p>
              My thing is that I want my work to serve a passion, and my
              passion to have work in growing it.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid sm:grid-cols-2 gap-10 border-t border-line pt-10">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-5xl sm:text-6xl text-ink">{s.value}</p>
            <p className="font-body text-sm text-ink-soft mt-2">{s.label}</p>
          </div>
        ))}
      </section>

      {/* History */}
      <section>
        <Eyebrow>A short history</Eyebrow>
        <div className="mt-6">
          {history.map((entry) => (
            <HistoryItem key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      {/* Currently learning */}
      <section>
        <Eyebrow>Currently</Eyebrow>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {currentlyLearning.map((item) => (
            <div
              key={item.label}
              className={`rounded-xl border p-4 ${typeStyle[item.type]}`}
            >
              <span className="font-mono text-[10px] uppercase tracking-wider opacity-60">
                {typeLabel[item.type]}
              </span>
              <p className="font-display text-lg mt-1">{item.label}</p>
              <p className="font-body text-xs mt-1 opacity-70">{item.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

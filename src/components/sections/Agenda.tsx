import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { agendaData } from "@/data/agenda";

/** キーワードの配置。ランダムを使わず固定値にして表示のブレを防ぐ。 */
const positions = [
  { left: "4%", top: "6%", size: "text-sm md:text-xl", delay: "0s" },
  { left: "62%", top: "2%", size: "text-xs md:text-lg", delay: "1.5s" },
  { left: "28%", top: "18%", size: "text-base md:text-2xl", delay: "3s" },
  { left: "72%", top: "26%", size: "text-sm md:text-xl", delay: "0.8s" },
  { left: "8%", top: "38%", size: "text-xs md:text-lg", delay: "2.2s" },
  { left: "48%", top: "44%", size: "text-sm md:text-xl", delay: "4s" },
  { left: "18%", top: "58%", size: "text-base md:text-2xl", delay: "1.1s" },
  { left: "66%", top: "62%", size: "text-xs md:text-lg", delay: "2.8s" },
  { left: "36%", top: "76%", size: "text-sm md:text-xl", delay: "3.6s" },
  { left: "78%", top: "82%", size: "text-xs md:text-base", delay: "0.4s" },
  { left: "6%", top: "86%", size: "text-sm md:text-lg", delay: "5s" },
  { left: "52%", top: "90%", size: "text-xs md:text-base", delay: "1.9s" },
];

export default function Agenda() {
  const announced = agendaData.status === "announced";

  return (
    <Section id="agenda" eyebrow="AGENDA" index="04">
      <div className="relative isolate min-h-[26rem] md:min-h-[32rem]">
        {/* 背景のキーワード */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {agendaData.keywords.map((keyword, i) => {
            const pos = positions[i % positions.length];
            const isEn = /^[A-Z\s]+$/.test(keyword);
            return (
              <span
                key={keyword}
                className={`absolute animate-driftY whitespace-nowrap ${pos.size} ${
                  isEn ? "font-display tracking-[0.26em] text-violet-soft/[0.16]" : "font-jp text-white/[0.09]"
                }`}
                style={{ left: pos.left, top: pos.top, animationDelay: pos.delay }}
              >
                {keyword}
              </span>
            );
          })}
        </div>

        {announced ? (
          <div className="max-w-3xl">
            <Reveal>
              <p className="label">THE FIRST AGENDA</p>
              <h3 className="mt-4 font-jp text-2xl font-bold leading-relaxed text-white md:text-4xl">
                {agendaData.title}
              </h3>
              {agendaData.titleEn && (
                <p className="mt-3 font-display text-sm tracking-[0.16em] text-violet-soft/80">{agendaData.titleEn}</p>
              )}
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { label: "BACKGROUND", body: agendaData.background },
                { label: "ISSUE", body: agendaData.issue },
                { label: "MISSION", body: agendaData.mission },
              ]
                .filter((block) => Boolean(block.body))
                .map((block, i) => (
                  <Reveal key={block.label} delay={i * 0.08} className="glass p-6">
                    <p className="font-display text-[0.62rem] tracking-[0.24em] text-violet-soft/70">{block.label}</p>
                    <p className="mt-3 text-sm leading-jp text-halo/70">{block.body}</p>
                  </Reveal>
                ))}
            </div>
            {agendaData.backgroundGuideUrl && (
              <Reveal delay={0.2}>
                <a
                  href={agendaData.backgroundGuideUrl}
                  className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-display text-[0.7rem] tracking-[0.2em] text-white/85 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  BACKGROUND GUIDE
                  <span aria-hidden>PDF</span>
                </a>
              </Reveal>
            )}
          </div>
        ) : (
          <div className="flex min-h-[26rem] flex-col justify-center md:min-h-[32rem]">
            <Reveal>
              <p className="font-display text-2xl font-extralight leading-tight tracking-[0.14em] text-white sm:text-4xl md:text-6xl">
                THE FIRST AGENDA
              </p>
              <p className="mt-3 font-display text-2xl font-extralight tracking-[0.28em] text-gold/80 sm:text-4xl md:mt-5 md:text-6xl">
                COMING SOON
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-md text-sm leading-jp text-halo/60 md:mt-10">
                議題は現在検討中です。決定後、背景資料（Background Guide）とあわせてこのページで公開します。
              </p>
            </Reveal>
          </div>
        )}
      </div>
    </Section>
  );
}

import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { conferenceData } from "@/data/conference";
import { COMING_SOON, siteConfig } from "@/data/site";

export default function Conference() {
  return (
    <Section id="conference" eyebrow="1ST CONFERENCE" index="03" tone="lifted">
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end md:gap-16">
        <Reveal>
          <p className="font-display text-5xl font-extralight leading-none tracking-[0.06em] text-white sm:text-6xl md:text-7xl">
            2027
            <span className="text-violet-soft/60">.03</span>
          </p>
          <p className="mt-4 font-display text-sm tracking-[0.28em] text-violet-soft/80">
            {siteConfig.city} — {siteConfig.hostCoordinates.label}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[0.95rem] leading-jp text-halo/70">
            第1回大会は、2027年3月に東京で開催予定です。会場や参加費などの詳細は、決まり次第このページで公開します。最新情報は Instagram でもお知らせします。
          </p>
        </Reveal>
      </div>

      <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {conferenceData.map((item, i) => {
          const pending = item.value === COMING_SOON;
          return (
            <Reveal key={item.labelEn} delay={i * 0.05} y={10} className="bg-abyss/80 p-6 backdrop-blur-sm md:p-7">
              <dt className="font-display text-[0.62rem] font-medium tracking-[0.24em] text-violet-soft/60">
                {item.labelEn}
                <span className="ml-2 font-sans tracking-normal text-white/30">{item.label}</span>
              </dt>
              <dd
                className={
                  pending
                    ? "mt-3 font-display text-[0.72rem] tracking-[0.18em] text-gold/70"
                    : "mt-3 text-[0.95rem] leading-relaxed text-white"
                }
              >
                {item.value}
              </dd>
            </Reveal>
          );
        })}
      </dl>
    </Section>
  );
}

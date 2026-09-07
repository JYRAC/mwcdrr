import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { aboutPoints } from "@/data/about";

export default function About() {
  return (
    <Section id="about" eyebrow="WHAT IS MWCDRR?" index="01" tone="lifted">
      <div className="grid gap-10 border-l border-white/10 pl-6 md:grid-cols-2 md:gap-16 md:pl-10">
        <Reveal>
          <div>
            <h3 className="font-display text-sm font-medium tracking-[0.22em] text-violet-soft">MODEL UN</h3>
            <p className="mt-4 text-[0.95rem] leading-jp text-halo/75">
              模擬国連は、参加者がそれぞれ一国の大使となり、本物の国際会議と同じ手順で議論する教育プログラムです。世界中の学生が取り組んでいます。
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <h3 className="font-display text-sm font-medium tracking-[0.22em] text-gold">MWCDRR</h3>
            <p className="mt-4 text-[0.95rem] leading-jp text-halo/75">
              模擬防災国連は、その舞台を「国連防災世界会議」に移した会議です。議題は、世界が抱える災害リスクと、私たちがどう備えるか。
            </p>
          </div>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 md:gap-5">
        {aboutPoints.map((point, i) => (
          <Reveal as="li" key={point.titleEn} delay={i * 0.07} className="glass glass-hover p-6 md:p-8">
            <p className="font-display text-[0.65rem] font-medium tracking-[0.24em] text-violet-soft/70">
              {point.titleEn}
            </p>
            <h3 className="mt-3 font-jp text-lg font-bold tracking-[0.02em] text-white md:text-xl">{point.title}</h3>
            <p className="mt-3 text-sm leading-jp text-halo/65">{point.body}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="mt-16 font-jp text-2xl font-bold leading-relaxed text-white md:mt-24 md:text-4xl">
          防災を、
          <span className="text-gold">交渉する。</span>
        </p>
      </Reveal>
    </Section>
  );
}

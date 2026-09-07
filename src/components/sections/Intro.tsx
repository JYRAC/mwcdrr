import Reveal from "@/components/ui/Reveal";

const lines = ["もし、あなたが", "一国の防災政策を", "任されたら。"];

export default function Intro() {
  return (
    <section id="intro" className="relative scroll-mt-20 py-24 md:py-40">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <h2 className="font-jp text-[2rem] font-bold leading-[1.5] tracking-[0.02em] text-white sm:text-[2.6rem] md:text-[3.6rem] md:leading-[1.45]">
          {lines.map((line, i) => (
            <Reveal as="span" key={line} delay={i * 0.12} y={18} className="block">
              {line}
            </Reveal>
          ))}
        </h2>

        <Reveal delay={0.2} y={0}>
          <div className="hairline my-12 md:my-16" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <p className="font-display text-base font-light leading-loose tracking-[0.05em] text-violet-soft/80 md:text-lg">
              A disaster crosses borders.
              <br />
              So must our solutions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-[0.95rem] leading-jp text-halo/75 md:text-base">
              <p>
                模擬防災国連は、各国の代表として災害リスク、防災政策、国際協力について議論し、世界の防災のあり方を考えるシミュレーション型国際会議です。
              </p>
              <p className="font-jp text-lg font-medium leading-relaxed text-white md:text-xl">
                「模擬国連」の仕組みを、
                <br className="sm:hidden" />
                国連防災世界会議の世界へ。
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

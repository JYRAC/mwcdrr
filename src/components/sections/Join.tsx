import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { joinData } from "@/data/join";

export default function Join() {
  const featured = joinData.filter((t) => t.featured);
  const rest = joinData.filter((t) => !t.featured);

  return (
    <Section id="join" eyebrow="JOIN THE CONFERENCE" index="06" tone="lifted">
      {featured.map((track) => (
        <Reveal key={track.id}>
          <article className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-royal/40 via-deep/60 to-abyss/80 p-8 md:p-14">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative grid gap-8 md:grid-cols-[1fr_1fr] md:items-center md:gap-14">
              <div>
                <p className="font-display text-[0.68rem] font-medium tracking-[0.28em] text-gold">
                  {track.titleEn}
                  <span className="ml-3 font-sans tracking-normal text-white/40">{track.title}</span>
                </p>
                <h3 className="mt-5 whitespace-pre-line font-jp text-3xl font-bold leading-[1.55] text-white md:text-5xl md:leading-[1.5]">
                  {track.lead}
                </h3>
              </div>
              <div>
                <p className="text-[0.95rem] leading-jp text-halo/80">{track.body}</p>
                <ul className="mt-6 space-y-2">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-white/65">
                      <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={track.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full justify-center rounded-full bg-gold px-8 py-4 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-ink transition-all duration-300 hover:bg-white hover:shadow-[0_0_45px_rgba(242,203,106,0.35)] sm:w-auto"
                >
                  {track.ctaLabel}
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      ))}

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((track, i) => (
          <Reveal key={track.id} delay={0.08 * (i + 1)}>
            <article className="glass glass-hover flex h-full flex-col p-7 md:p-9">
              <p className="font-display text-[0.68rem] font-medium tracking-[0.28em] text-violet-soft">
                {track.titleEn}
                <span className="ml-3 font-sans tracking-normal text-white/35">{track.title}</span>
              </p>
              <h3 className="mt-4 whitespace-pre-line font-jp text-xl font-bold leading-relaxed text-white md:text-2xl">
                {track.lead}
              </h3>
              <p className="mt-4 text-sm leading-jp text-halo/65">{track.body}</p>
              <ul className="mt-5 space-y-1.5">
                {track.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[0.8rem] text-white/50">
                    <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-violet-soft/70" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                {track.open && track.ctaUrl ? (
                  <a
                    href={track.ctaUrl}
                    target={track.ctaUrl.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-white/20 px-6 py-3 font-display text-[0.68rem] tracking-[0.2em] text-white/85 transition-colors duration-300 hover:border-violet-soft/60 hover:bg-white/5 hover:text-white"
                  >
                    {track.ctaLabel}
                  </a>
                ) : (
                  <span className="inline-flex rounded-full border border-dashed border-white/15 px-6 py-3 font-display text-[0.68rem] tracking-[0.2em] text-white/35">
                    {track.ctaLabel}
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

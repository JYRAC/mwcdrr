import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { peopleApplyUrl, peopleData } from "@/data/people";

export default function People() {
  return (
    <Section id="people" eyebrow="SECRETARIAT" index="07">
      <Reveal>
        <p className="max-w-xl font-jp text-xl font-bold leading-[1.8] text-white md:text-3xl md:leading-[1.7]">
          世界の防災会議を、
          <br />
          若者自身の手でつくる。
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
        {peopleData.map((person, i) => (
          <Reveal as="li" key={person.roleEn} delay={i * 0.05} className="glass glass-hover flex gap-5 p-6">
            {person.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={person.photo}
                alt={`${person.name}（${person.role}）`}
                width={64}
                height={64}
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
              >
                <svg viewBox="0 0 32 32" className="h-8 w-8 text-violet-soft/40">
                  <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="0.7" />
                  <ellipse cx="16" cy="16" rx="5" ry="12" fill="none" stroke="currentColor" strokeWidth="0.7" />
                  <path d="M4.4 12h23.2M4.4 20h23.2" stroke="currentColor" strokeWidth="0.7" />
                </svg>
              </span>
            )}
            <div className="min-w-0">
              <p className="font-display text-[0.6rem] tracking-[0.22em] text-violet-soft/70">{person.roleEn}</p>
              <h3 className="mt-1.5 font-jp text-base font-bold text-white">{person.role}</h3>
              <p className={person.name ? "mt-1 text-sm text-halo/80" : "mt-1 font-display text-[0.66rem] tracking-[0.18em] text-white/30"}>
                {person.name || "TO BE ANNOUNCED"}
              </p>
              {person.bio && <p className="mt-2 text-xs leading-relaxed text-halo/50">{person.bio}</p>}
              {person.recruiting && (
                <a
                  href={peopleApplyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-display text-[0.62rem] tracking-[0.18em] text-gold transition-opacity hover:opacity-70"
                >
                  MEMBERS WANTED
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

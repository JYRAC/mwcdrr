import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { partnerData } from "@/data/partners";

export default function Partners() {
  return (
    <Section id="partners" eyebrow="PARTNERS" index="08" tone="lifted">
      <div className="space-y-10 md:space-y-12">
        {partnerData.map((group, i) => (
          <Reveal key={group.titleEn} delay={i * 0.06}>
            <div className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-[14rem_1fr] md:gap-8">
              <div>
                <p className="font-display text-[0.66rem] font-medium tracking-[0.24em] text-violet-soft/80">
                  {group.titleEn}
                </p>
                <p className="mt-1 text-xs text-white/35">{group.title}</p>
              </div>
              {group.partners.length > 0 ? (
                <ul className="flex flex-wrap items-center gap-4">
                  {group.partners.map((partner) => (
                    <li key={partner.name}>
                      {partner.url ? (
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 pr-6 text-sm text-white/85 transition-colors hover:border-violet-soft/40 hover:bg-white/[0.06] hover:text-white"
                        >
                          {partner.logo && (
                            <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-white p-2">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={partner.logo}
                                alt=""
                                width={480}
                                height={332}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-contain"
                              />
                            </span>
                          )}
                          {partner.name}
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/85">
                          {partner.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-display text-[0.7rem] tracking-[0.2em] text-white/25">{group.placeholder}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

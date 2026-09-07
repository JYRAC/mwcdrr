import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

const channels = [
  { labelEn: "INSTAGRAM", value: siteConfig.instagram, href: siteConfig.instagramUrl, external: true, logo: null },
  { labelEn: "MAIL", value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false, logo: null },
  {
    labelEn: "ORGANIZER",
    value: siteConfig.organizer,
    href: siteConfig.organizerUrl,
    external: true,
    logo: "/logo/jyrac-logo-white.png",
  },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="CONTACT" index="12">
      <Reveal>
        <p className="font-display text-3xl font-extralight leading-tight tracking-[0.08em] text-white md:text-5xl">
          Think globally.
          <br />
          Prepare together.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
        {channels.map((channel, i) => (
          <Reveal as="li" key={channel.labelEn} delay={i * 0.07}>
            <a
              href={channel.href}
              {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass glass-hover flex h-full flex-col justify-between gap-6 p-7"
            >
              <span className="font-display text-[0.62rem] tracking-[0.24em] text-violet-soft/70">
                {channel.labelEn}
              </span>
              <span className="flex items-center gap-4">
                {channel.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={channel.logo}
                    alt=""
                    width={420}
                    height={290}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto shrink-0 opacity-85"
                  />
                )}
                <span className="text-sm leading-relaxed text-white">{channel.value}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="mt-10 text-xs leading-jp text-white/35">
          取材・後援・協賛・共催のご相談も、上記メールアドレスまでお問い合わせください。
        </p>
      </Reveal>
    </Section>
  );
}

import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { resourcesData } from "@/data/resources";

export default function Resources() {
  return (
    <Section id="resources" eyebrow="RESOURCES" index="10">
      <Reveal>
        <p className="max-w-xl text-sm leading-jp text-halo/60">
          大会要項、会議規則、議題解説書などの資料は、準備ができ次第ここで公開します。
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
        {resourcesData.map((resource, i) => {
          const available = Boolean(resource.href);
          const Wrapper = available ? "a" : "div";
          return (
            <Reveal as="li" key={resource.titleEn} delay={i * 0.05} y={10}>
              <Wrapper
                {...(available
                  ? { href: resource.href, target: "_blank", rel: "noopener noreferrer" }
                  : { "aria-disabled": true })}
                className={`glass flex h-full flex-col p-6 md:p-7 ${
                  available ? "glass-hover" : "opacity-70"
                }`}
              >
                <h3 className="font-display text-[0.78rem] font-medium tracking-[0.18em] text-white">
                  {resource.titleEn}
                </h3>
                <p className="mt-1.5 font-jp text-sm text-violet-soft/75">{resource.title}</p>
                <p className="mt-3 text-xs leading-jp text-halo/50">{resource.description}</p>
                <p
                  className={`mt-auto pt-6 font-display text-[0.62rem] tracking-[0.2em] ${
                    available ? "text-gold" : "text-white/25"
                  }`}
                >
                  {available ? resource.meta ?? "OPEN PDF" : "COMING SOON"}
                </p>
              </Wrapper>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

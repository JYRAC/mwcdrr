import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { newsData } from "@/data/news";

export default function News() {
  const items = [...newsData].sort((a, b) => b.datetime.localeCompare(a.datetime));

  return (
    <Section id="news" eyebrow="LATEST NEWS" index="09">
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {items.map((item, i) => {
          const Wrapper = item.href ? "a" : "div";
          return (
            <Reveal as="li" key={`${item.datetime}-${item.title}`} delay={i * 0.06} y={10}>
              <Wrapper
                {...(item.href ? { href: item.href } : {})}
                className={`grid gap-2 py-7 md:grid-cols-[8rem_1fr] md:gap-8 ${
                  item.href ? "group transition-colors hover:bg-white/[0.03]" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <time dateTime={item.datetime} className="font-display text-sm tracking-[0.16em] text-violet-soft/80">
                    {item.date}
                  </time>
                  <span className="rounded-full border border-white/15 px-2.5 py-0.5 font-display text-[0.58rem] tracking-[0.16em] text-white/45">
                    {item.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-base text-white transition-colors group-hover:text-gold md:text-lg">
                    {item.title}
                  </h3>
                  {item.body && <p className="mt-2 text-sm leading-jp text-halo/60">{item.body}</p>}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

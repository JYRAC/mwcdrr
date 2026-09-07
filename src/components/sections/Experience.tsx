"use client";

import { m, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { experienceSteps } from "@/data/experience";
import { viewportOnce } from "@/lib/motion";

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section id="experience" eyebrow="THE EXPERIENCE" index="02">
      <Reveal>
        <p className="max-w-2xl font-jp text-2xl font-bold leading-[1.7] text-white md:text-4xl md:leading-[1.6]">
          調べる。話す。交渉する。
          <br />
          世界の防災をつくる。
        </p>
      </Reveal>

      {/* 5ステップ：順序そのものが情報なので番号を残す */}
      <div className="relative mt-14 md:mt-20">
        {/* 進行を示す線（PCは横、モバイルは縦） */}
        <m.span
          aria-hidden
          className="absolute left-[0.32rem] top-2 block h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-violet-soft/50 via-violet-soft/20 to-transparent md:hidden"
          initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <m.span
          aria-hidden
          className="absolute left-0 top-[0.32rem] hidden h-px w-full origin-left bg-gradient-to-r from-violet-soft/50 via-violet-soft/20 to-transparent md:block"
          initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        <ol className="grid gap-10 pl-8 md:grid-cols-5 md:gap-6 md:pl-0 md:pt-10">
          {experienceSteps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 0.08} className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-1 block h-2.5 w-2.5 rounded-full border border-violet-soft/60 bg-abyss md:-top-[2.46rem] md:left-0"
              />
              <p className="font-display text-[0.7rem] font-medium tracking-[0.28em] text-gold/80">{step.no}</p>
              <h3 className="mt-2 font-display text-lg font-light tracking-[0.16em] text-white">{step.titleEn}</h3>
              <p className="mt-1 font-jp text-sm font-medium text-violet-soft/85">{step.title}</p>
              <p className="mt-3 text-sm leading-jp text-halo/60">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

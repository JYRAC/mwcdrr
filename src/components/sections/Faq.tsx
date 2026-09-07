"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { faqData } from "@/data/faq";
import { siteConfig } from "@/data/site";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" eyebrow="FAQ" index="11" tone="lifted">
      {faqData.length === 0 ? (
        <Reveal>
          <div className="glass flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="font-display text-lg font-light tracking-[0.22em] text-white/70 md:text-2xl">COMING SOON</p>
            <p className="text-sm leading-jp text-halo/60">
              よくある質問は準備中です。お急ぎの場合は
              <a href={`mailto:${siteConfig.email}`} className="mx-1 text-gold underline underline-offset-4">
                メール
              </a>
              でお問い合わせください。
            </p>
          </div>
        </Reveal>
      ) : (
        <ul className="border-t border-white/10">
          {faqData.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={item.question} className="border-b border-white/10">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-base text-white transition-colors hover:text-gold md:text-lg"
                  >
                    {item.question}
                    <span
                      aria-hidden
                      className={`relative h-3 w-3 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    >
                      <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-violet-soft" />
                      <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-violet-soft" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <m.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-10 text-sm leading-jp text-halo/70">{item.answer}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}

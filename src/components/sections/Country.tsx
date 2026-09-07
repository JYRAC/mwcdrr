"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import WorldMap from "@/components/ui/WorldMap";
import { countryData } from "@/data/country";

export default function Country() {
  const [activeCode, setActiveCode] = useState(countryData[0].code);
  const active = countryData.find((c) => c.code === activeCode) ?? countryData[0];

  const pins = countryData.map((c) => ({ code: c.code, label: c.nameEn, lat: c.lat, lng: c.lng }));

  const fields = [
    { label: "DISASTER RISK", labelJa: "災害リスク", value: active.disasterRisk },
    { label: "KEY POLICY", labelJa: "防災政策", value: active.keyPolicy },
    { label: "INTERNATIONAL POSITION", labelJa: "国際的な立場", value: active.internationalPosition },
  ];

  return (
    <Section id="country" eyebrow="REPRESENT THE WORLD" index="05">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <Reveal y={0}>
          <div className="relative">
            <WorldMap
              pins={pins}
              activeCode={activeCode}
              onSelect={setActiveCode}
              showLabels
              dotClassName="text-violet-soft/20"
            />
          </div>

          {/* 地図のピンと同じ操作を、キーボードでもタップでも */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {countryData.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => setActiveCode(c.code)}
                  aria-pressed={c.code === activeCode}
                  className={`rounded-full border px-4 py-2 font-display text-[0.66rem] tracking-[0.16em] transition-colors duration-300 ${
                    c.code === activeCode
                      ? "border-gold/60 bg-gold/10 text-gold"
                      : "border-white/15 text-white/60 hover:border-violet-soft/50 hover:text-white"
                  }`}
                >
                  {c.nameEn}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass h-full p-7 md:p-9">
            <AnimatePresence mode="wait">
              <m.div
                key={active.code}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-[0.62rem] tracking-[0.28em] text-violet-soft/70">COUNTRY PROFILE</p>
                <h3 className="mt-3 font-display text-3xl font-light tracking-[0.1em] text-white md:text-4xl">
                  {active.nameEn}
                </h3>
                <p className="mt-1 font-jp text-sm text-white/45">{active.nameJa}</p>

                <dl className="mt-8 space-y-6">
                  {fields.map((field) => (
                    <div key={field.label} className="border-t border-white/10 pt-4">
                      <dt className="font-display text-[0.6rem] tracking-[0.22em] text-gold/70">
                        {field.label}
                        <span className="ml-2 font-sans tracking-normal text-white/30">{field.labelJa}</span>
                      </dt>
                      <dd className="mt-2 text-sm leading-jp text-halo/75">{field.value}</dd>
                    </div>
                  ))}
                </dl>
              </m.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <p className="mt-8 text-xs leading-relaxed text-white/35">
          ※ 表示している国と内容は、サイト構築用のサンプルです。第1回大会で扱う国は決定後に公開します。
        </p>
      </Reveal>
    </Section>
  );
}

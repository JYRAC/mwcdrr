"use client";

import { m, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import WorldMap from "@/components/ui/WorldMap";
import { countryData } from "@/data/country";
import { siteConfig } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

/** 東京から各国へ伸びる線。担当国データをそのまま使う。 */
const networkPins = countryData
  .filter((c) => c.code !== "JPN")
  .map((c) => ({ code: c.code, label: c.nameEn, lat: c.lat, lng: c.lng }));

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  // スクロールによる視差
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // マウスによるごく浅い視差
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const parallaxX = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const parallaxY = useTransform(sy, [-0.5, 0.5], [8, -8]);

  useEffect(() => {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-24 pt-28 md:pb-28 md:pt-32"
    >
      {/* 背景：世界地図と国際ネットワークの線 */}
      <m.div
        aria-hidden
        style={{ y: reduce ? 0 : mapY, opacity: mapOpacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <m.div
          style={{ x: reduce ? 0 : parallaxX, y: reduce ? 0 : parallaxY }}
          className="w-[190%] max-w-none translate-y-[6%] sm:w-[150%] lg:w-[115%]"
        >
          <m.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.4, ease: EASE }}
          >
            <WorldMap
              pins={networkPins}
              connectFrom={siteConfig.hostCoordinates}
              dotClassName="text-violet-soft/20"
            />
          </m.div>
        </m.div>
      </m.div>

      {/* 中央の光 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background: "radial-gradient(closest-side, rgba(76,29,149,0.55), rgba(5,3,12,0) 100%)",
        }}
      />

      {/* 本文 */}
      <m.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 w-full max-w-3xl text-center">
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="label mb-7 md:mb-10"
        >
          1ST CONFERENCE
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
          className="mx-auto w-full max-w-[38rem]"
        >
          {/* 公式ロゴ。差し替えは public/logo/mwcdrr-logo.png */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/mwcdrr-logo.png"
            alt="MWCDRR 模擬国連防災世界会議 Model World Conference on Disaster Risk Reduction"
            width={1100}
            height={413}
            fetchPriority="high"
            decoding="async"
            className="mx-auto h-auto w-[86%] max-w-[34rem] drop-shadow-[0_0_60px_rgba(139,92,246,0.35)] sm:w-full sm:max-w-[38rem]"
          />
        </m.h1>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="mt-8 flex items-center justify-center gap-4 font-display text-[0.7rem] tracking-[0.28em] text-violet-soft/85 md:mt-9 md:text-xs"
        >
          <span>{siteConfig.period}</span>
          <span aria-hidden className="h-3 w-px bg-white/25" />
          <span>{siteConfig.city}</span>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.9, ease: EASE }}
          className="mt-10 font-display text-lg font-extralight leading-relaxed tracking-[0.06em] text-halo md:mt-14 md:text-2xl"
        >
          Hope for the best,
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          prepare for the worst.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: EASE }}
          className="mx-auto mt-10 flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 md:mt-14"
        >
          <a
            href="#conference"
            className="rounded-full border border-white/20 px-7 py-3.5 font-display text-[0.7rem] font-medium tracking-[0.2em] text-white/85 transition-colors duration-300 hover:border-violet-soft/60 hover:bg-white/5 hover:text-white"
          >
            EXPLORE CONFERENCE
          </a>
          <a
            href="#join"
            className="rounded-full bg-gold px-7 py-3.5 font-display text-[0.7rem] font-semibold tracking-[0.2em] text-ink transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(242,203,106,0.3)]"
          >
            JOIN US
          </a>
        </m.div>
      </m.div>

      {/* スクロール導線 */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        aria-hidden
      >
        <span className="font-display text-[0.6rem] tracking-[0.3em] text-white/35">SCROLL</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/15">
          <m.span
            className="absolute inset-x-0 top-0 block h-4 bg-gradient-to-b from-transparent to-violet-soft"
            animate={reduce ? {} : { y: ["-100%", "300%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </m.div>
    </section>
  );
}

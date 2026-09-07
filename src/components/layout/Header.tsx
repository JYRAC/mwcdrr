"use client";

import { AnimatePresence, m, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { navItems, siteConfig } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="transition-opacity hover:opacity-75" aria-label="MWCDRR トップへ">
          <Logo className="h-6 w-auto md:h-7" />
        </a>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-display text-[0.7rem] font-medium tracking-[0.2em] text-white/65 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-violet-soft transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#join"
            className="rounded-full bg-gold px-5 py-2.5 font-display text-[0.7rem] font-semibold tracking-[0.2em] text-ink transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(242,203,106,0.35)]"
          >
            JOIN US
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="sr-only">メニュー</span>
          <span aria-hidden className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-white transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-white transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <m.div
        aria-hidden
        style={{ scaleX: progress }}
        className="h-px origin-left bg-gradient-to-r from-gold via-violet-soft to-transparent"
      />

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="モバイルナビゲーション" className="flex flex-col gap-1 px-6 pb-12 pt-8">
              {navItems.map((item, i) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  className="border-b border-white/[0.07] py-4 font-display text-2xl font-light tracking-[0.14em] text-white/90"
                >
                  {item.label}
                </m.a>
              ))}
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full bg-gold px-6 py-4 text-center font-display text-sm font-semibold tracking-[0.2em] text-ink"
              >
                JOIN US
              </a>
              <div className="mt-8 space-y-1 text-sm text-white/45">
                <p className="font-display tracking-[0.1em]">{siteConfig.instagram}</p>
                <p className="font-display tracking-[0.1em]">{siteConfig.email}</p>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}

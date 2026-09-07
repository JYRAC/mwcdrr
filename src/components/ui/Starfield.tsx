"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  phase: number;
  speed: number;
  drift: number;
};

/**
 * 画面全体に敷く星空。
 * ・canvas 1枚だけを固定配置し、ページ全体で使い回す（DOM負荷を増やさない）
 * ・prefers-reduced-motion のときは静止画として1度だけ描画する
 * ・タブが非表示のあいだは描画を止める
 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(190, Math.max(70, (width * height) / 9000)));
      stars = Array.from({ length: count }, () => {
        const big = Math.random() > 0.93;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: big ? 1.3 + Math.random() * 0.9 : 0.4 + Math.random() * 0.7,
          alpha: big ? 0.7 : 0.18 + Math.random() * 0.45,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.7,
          drift: 0.006 + Math.random() * 0.016,
        };
      });
    };

    const paint = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(t * 0.0006 * s.speed + s.phase);
        ctx.globalAlpha = Math.min(1, s.alpha * twinkle);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.r > 1.2 ? "#cbb6ff" : "#ffffff";
        ctx.fill();
        if (s.r > 1.2) {
          ctx.globalAlpha = Math.min(0.22, 0.22 * twinkle);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = "#8b5cf6";
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    let last = 0;
    const loop = (t: number) => {
      // 約30fpsに間引く（モバイルのバッテリー対策）
      if (t - last > 33) {
        last = t;
        for (const s of stars) {
          s.y -= s.drift;
          if (s.y < -2) s.y = height + 2;
        }
        paint(t);
      }
      raf = window.requestAnimationFrame(loop);
    };

    const start = () => {
      if (reduceMotion) {
        paint(0);
        return;
      }
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(loop);
    };

    const onResize = () => {
      build();
      paint(performance.now());
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        start();
      }
    };

    build();
    start();
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-80"
    />
  );
}

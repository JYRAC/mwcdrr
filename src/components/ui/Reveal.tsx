"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  /** 表示までの遅延（秒） */
  delay?: number;
  /** 動き出す距離（px）。0 にするとフェードのみ */
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header" | "span" | "p";
};

/** スクロールで一度だけフェードインさせる汎用ラッパー */
export default function Reveal({ children, delay = 0, y = 14, className, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const MotionTag = m[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

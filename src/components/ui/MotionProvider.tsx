"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Framer Motion の機能を必要な分だけ読み込むためのラッパー。
 * すべてのアニメーションは <m.div> 系を使い、ここで機能を注入する。
 * （フル機能の <motion.div> を直接使うより、初回読み込みが約30KB軽くなる）
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

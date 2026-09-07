import type { Variants } from "framer-motion";

/** 画面内に入ったときの控えめなフェード。距離は小さく、時間はゆっくり。 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

/** 子要素を少しずつ遅らせて出す */
export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

/** 線を引くアニメーション */
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.6, ease: "easeInOut" },
  },
};

export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;

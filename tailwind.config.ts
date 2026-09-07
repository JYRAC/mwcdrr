import type { Config } from "tailwindcss";

/**
 * MWCDRR デザイントークン
 * 色を変えたい場合はここを編集すれば、サイト全体に反映されます。
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    // xs を先頭に置くため screens は extend ではなくここで定義する
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: "#05030C", // 最も暗い背景（宇宙の闇）
        abyss: "#0A0619", // ベース背景
        deep: "#150A31", // 深い紫の面
        royal: "#4C1D95", // メインカラー：深い紫
        violet: {
          DEFAULT: "#8B5CF6",
          soft: "#B79CFF", // アクセント：明るい紫
        },
        halo: "#E9E2FF", // 本文の白（わずかに紫）
        gold: "#F2CB6A", // アクセント：黄色
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
        sans: ["var(--font-jp)", "Noto Sans JP", "system-ui", "sans-serif"],
        jp: ["var(--font-jp-display)", "Zen Kaku Gothic New", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        hero: "0.28em",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.9" },
        },
        driftY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sweep: {
          "0%": { transform: "translateX(-40%)", opacity: "0" },
          "20%, 80%": { opacity: "1" },
          "100%": { transform: "translateX(140%)", opacity: "0" },
        },
      },
      animation: {
        twinkle: "twinkle 6s ease-in-out infinite",
        driftY: "driftY 12s ease-in-out infinite",
        sweep: "sweep 7s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

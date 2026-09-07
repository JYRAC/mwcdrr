import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  /** 英字のセクション見出し（ヘッダー右上に細く出る） */
  eyebrow: string;
  /** 通し番号。順序そのものが情報なので数字を残す */
  index: string;
  children: ReactNode;
  className?: string;
  /** 背景に薄いグラデーションを敷く */
  tone?: "plain" | "lifted";
};

export default function Section({ id, eyebrow, index, children, className = "", tone = "plain" }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-eyebrow`}
      className={`relative scroll-mt-20 py-20 md:py-32 ${
        tone === "lifted" ? "bg-gradient-to-b from-white/[0.02] to-transparent" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <Reveal y={0}>
          <div className="mb-10 flex items-center gap-4 md:mb-14">
            <h2 id={`${id}-eyebrow`} className="label whitespace-nowrap">
              {eyebrow}
            </h2>
            <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-violet-soft/25 to-transparent" />
            <span aria-hidden className="font-display text-[0.68rem] tracking-[0.28em] text-white/25">
              {index}
            </span>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

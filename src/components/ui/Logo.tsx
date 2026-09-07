type Variant = "lockup" | "mark" | "full";

type Props = {
  /** lockup: 星座マーク＋MWCDRR / mark: 星座のみ / full: 正式ロゴ一式 */
  variant?: Variant;
  /** 高さの指定など。例: "h-7 w-auto md:h-8" */
  className?: string;
  alt?: string;
};

const sources: Record<Variant, { src: string; width: number; height: number }> = {
  lockup: { src: "/logo/mwcdrr-lockup.png", width: 520, height: 154 },
  mark: { src: "/logo/mwcdrr-mark.png", width: 240, height: 291 },
  full: { src: "/logo/mwcdrr-logo.png", width: 1100, height: 413 },
};

/** MWCDRR の公式ロゴ。差し替える場合は public/logo/ の画像を入れ替えてください。 */
export default function Logo({ variant = "lockup", className = "h-7 w-auto md:h-8", alt = "MWCDRR" }: Props) {
  const { src, width, height } = sources[variant];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} className={className} decoding="async" />
  );
}

import { worldDots } from "@/data/worldDots";

/**
 * 1224個のドットを <circle> ではなく1本の path にまとめる。
 * DOMノードを1つに抑えられるため、モバイルでも軽く描画できる。
 */
export const worldDotPath = worldDots
  .map(([x, y]) => `M${x} ${y}m-.4 0a.4.4 0 1 0 .8 0a.4.4 0 1 0-.8 0`)
  .join("");

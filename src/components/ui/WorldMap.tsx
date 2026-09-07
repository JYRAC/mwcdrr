"use client";

import { m, useReducedMotion } from "framer-motion";
import { projectToMap, WORLD_VIEWBOX } from "@/data/country";

export type MapPin = {
  code: string;
  label: string;
  lat: number;
  lng: number;
};

type Props = {
  pins?: MapPin[];
  activeCode?: string;
  onSelect?: (code: string) => void;
  /** 東京と各ピンを結ぶ光の線を描く */
  connectFrom?: { lat: number; lng: number };
  /** ドットの色の濃さ */
  dotClassName?: string;
  className?: string;
  /** ピンのラベルを表示する */
  showLabels?: boolean;
};

/** 経緯線（赤道・回帰線・主要経線）。国際会議らしい座標の骨格。 */
function Graticule() {
  const lats = [-40, -20, 0, 23.4, 45, 66];
  const lngs = [-120, -60, 0, 60, 120];
  return (
    <g stroke="currentColor" strokeWidth="0.08" className="text-white/10">
      {lats.map((lat) => {
        const { y } = projectToMap(0, lat);
        return <line key={lat} x1="0" x2="100" y1={y} y2={y} />;
      })}
      {lngs.map((lng) => {
        const { x } = projectToMap(lng, 0);
        return <line key={lng} x1={x} x2={x} y1="0" y2="74.44" />;
      })}
    </g>
  );
}

export default function WorldMap({
  pins = [],
  activeCode,
  onSelect,
  connectFrom,
  dotClassName = "text-violet-soft/25",
  className = "",
  showLabels = false,
}: Props) {
  const reduce = useReducedMotion();
  const origin = connectFrom ? projectToMap(connectFrom.lng, connectFrom.lat) : null;

  return (
    <svg
      viewBox={WORLD_VIEWBOX}
      className={`h-auto w-full overflow-visible ${className}`}
      role={onSelect ? "group" : "presentation"}
      aria-label={onSelect ? "参加国の世界地図" : undefined}
      focusable="false"
    >
      <Graticule />
      <use href="#mwc-world-dots" fill="currentColor" className={dotClassName} />

      {origin &&
        pins.map((pin, i) => {
          const p = projectToMap(pin.lng, pin.lat);
          const mx = (origin.x + p.x) / 2;
          const my = (origin.y + p.y) / 2 - Math.abs(p.x - origin.x) * 0.16 - 3;
          return (
            <m.path
              key={`arc-${pin.code}`}
              d={`M${origin.x} ${origin.y} Q${mx} ${my} ${p.x} ${p.y}`}
              fill="none"
              stroke="url(#mwc-arc-gradient)"
              strokeWidth="0.16"
              initial={reduce ? { opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
              animate={reduce ? { opacity: 0.5 } : { pathLength: 1, opacity: 0.65 }}
              transition={{ duration: 2.2, delay: 0.6 + i * 0.25, ease: "easeInOut" }}
            />
          );
        })}

      <defs>
        <linearGradient id="mwc-arc-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F2CB6A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B79CFF" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {pins.map((pin) => {
        const { x, y } = projectToMap(pin.lng, pin.lat);
        const active = pin.code === activeCode;
        const interactive = Boolean(onSelect);
        return (
          <g
            key={pin.code}
            transform={`translate(${x} ${y})`}
            className={interactive ? "cursor-pointer" : undefined}
            role={interactive ? "button" : undefined}
            tabIndex={interactive ? 0 : undefined}
            aria-label={interactive ? `${pin.label} の情報を表示` : undefined}
            aria-pressed={interactive ? active : undefined}
            onClick={() => onSelect?.(pin.code)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect?.(pin.code);
              }
            }}
          >
            <circle r="2.6" fill="transparent" />
            <circle
              r={active ? 1.5 : 1.1}
              fill="none"
              stroke={active ? "#F2CB6A" : "#B79CFF"}
              strokeWidth="0.14"
              opacity={active ? 0.9 : 0.5}
            />
            <circle r={active ? 0.6 : 0.45} fill={active ? "#F2CB6A" : "#E9E2FF"} />
            {showLabels && (
              <text
                x="2.4"
                y="0.6"
                className="hidden font-display md:inline"
                fontSize="1.9"
                letterSpacing="0.12"
                fill={active ? "#F2CB6A" : "#E9E2FF"}
                opacity={active ? 1 : 0.55}
              >
                {pin.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

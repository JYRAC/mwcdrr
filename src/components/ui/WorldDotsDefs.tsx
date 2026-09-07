import { worldDotPath } from "./worldPath";

/**
 * 世界地図のドットを <defs> として1度だけ出力する。
 * 各セクションからは <use href="#mwc-world-dots" /> で参照するため、
 * 地図を何度使ってもHTMLは増えない。
 */
export default function WorldDotsDefs() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" className="absolute">
      <defs>
        <path id="mwc-world-dots" d={worldDotPath} />
      </defs>
    </svg>
  );
}

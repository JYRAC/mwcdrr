import { COMING_SOON, siteConfig } from "./site";

export type ConferenceItem = {
  /** 英語ラベル（カード上部の小さい文字） */
  labelEn: string;
  /** 日本語ラベル */
  label: string;
  /** 内容。未定の場合は COMING_SOON を入れてください */
  value: string;
  /** 補足（任意） */
  note?: string;
};

/** 1ST CONFERENCE セクションの内容 */
export const conferenceData: ConferenceItem[] = [
  { labelEn: "DATE", label: "開催", value: siteConfig.dateJa },
  { labelEn: "CITY", label: "場所", value: siteConfig.cityJa },
  { labelEn: "VENUE", label: "会場", value: COMING_SOON },
  { labelEn: "ORGANIZER", label: "主催", value: siteConfig.organizer },
  { labelEn: "PARTICIPANTS", label: "対象", value: "中学生・高校生・大学生等" },
  { labelEn: "LANGUAGE", label: "使用言語", value: "日本語中心予定" },
  { labelEn: "FEE", label: "参加費", value: COMING_SOON },
  { labelEn: "CAPACITY", label: "定員", value: COMING_SOON },
];

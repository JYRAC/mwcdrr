import { siteConfig } from "./site";

export type Person = {
  /** 役職（日本語） */
  role: string;
  /** 役職（英語） */
  roleEn: string;
  /** 氏名。空文字にすると「TO BE ANNOUNCED」と表示されます */
  name: string;
  /** ローマ字表記（任意） */
  nameEn?: string;
  /** 一言プロフィール（任意） */
  bio?: string;
  /** public/people/ に画像を置いて "/people/xxx.jpg" と指定（任意・なくても崩れません） */
  photo?: string;
  /** 募集中の役職は true にすると応募ボタンが表示されます */
  recruiting?: boolean;
};

/** SECRETARIAT セクション。氏名が決まったら name を埋めてください。 */
export const peopleData: Person[] = [
  { role: "実行委員長", roleEn: "SECRETARY-GENERAL", name: "", bio: "第1回大会の全体統括。" },
  { role: "副実行委員長", roleEn: "DEPUTY SECRETARY-GENERAL", name: "", bio: "会議運営と各部の調整。" },
  { role: "総務部", roleEn: "GENERAL AFFAIRS", name: "", bio: "会場・当日運営・会計。", recruiting: true },
  { role: "広報部", roleEn: "PUBLIC RELATIONS", name: "", bio: "SNS・Web・デザイン。", recruiting: true },
  { role: "渉外部", roleEn: "EXTERNAL RELATIONS", name: "", bio: "後援・協賛・専門家との連携。", recruiting: true },
  { role: "アドバイザー", roleEn: "ADVISOR", name: "", bio: "防災・国際協力分野からの助言。" },
];

export const peopleApplyUrl = siteConfig.applyUrl;

export type Resource = {
  titleEn: string;
  title: string;
  description: string;
  /** PDF や外部リンクを設定すると、自動でダウンロードリンクになります */
  href?: string;
  /** 表示用のファイル情報（任意・例: "PDF / 1.2MB"） */
  meta?: string;
};

/**
 * RESOURCES セクション。
 * public/docs/ に PDF を置き、href に "/docs/ファイル名.pdf" と書けば公開されます。
 */
export const resourcesData: Resource[] = [
  { titleEn: "CONFERENCE GUIDE", title: "大会要項", description: "日程、会場、参加方法、当日の流れ。" },
  { titleEn: "RULES OF PROCEDURE", title: "会議規則", description: "発言、動議、採決など会議進行のルール。" },
  { titleEn: "BACKGROUND GUIDE", title: "議題解説書", description: "議題の背景と論点を、初参加でも読める形で。" },
  { titleEn: "COUNTRY GUIDE", title: "担当国ガイド", description: "担当国の調べ方と、調査すべき項目。" },
  { titleEn: "POSITION PAPER GUIDE", title: "ポジションペーパー", description: "自国の立場を文書にまとめるための手引き。" },
  { titleEn: "OUTCOME DOCUMENT", title: "成果文書", description: "会議で採択された文書。大会終了後に公開します。" },
];

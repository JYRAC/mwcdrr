export type NewsItem = {
  /** 表示用の日付（例: 2026.09） */
  date: string;
  /** 並び替え用（新しい順に自動で並びます） */
  datetime: string;
  category: string;
  title: string;
  body?: string;
  /** 詳細ページや外部リンク（任意） */
  href?: string;
};

/** LATEST NEWS。上に足していくだけで新着として表示されます。 */
export const newsData: NewsItem[] = [
  {
    date: "2026.09",
    datetime: "2026-09-01",
    category: "STAFF",
    title: "第1回大会の実行委員を募集開始",
    body: "会議をゼロからつくる実行委員（STAFF）を、全国の中高生・大学生から募集します。",
    href: "#join",
  },
  {
    date: "2026.09",
    datetime: "2026-09-01",
    category: "WEBSITE",
    title: "Official Website Open",
    body: "第1回 模擬防災国連の公式Webサイトを公開しました。",
  },
];

/**
 * サイト全体の基本情報。
 * 大会名・日程・連絡先などを変更したい場合は、まずこのファイルを編集してください。
 */
export const siteConfig = {
  abbr: "MWCDRR",
  nameJa: "第1回 模擬防災国連",
  nameEn: "Model World Conference on Disaster Risk Reduction",
  editionEn: "1st Model World Conference on Disaster Risk Reduction",
  tagline: "Hope for the best, prepare for the worst.",
  period: "2027 SPRING",
  city: "TOKYO",
  cityJa: "東京都",
  dateJa: "2027年3月予定",
  organizer: "NPO法人日本若者防災復興協会（JYRAC）",
  organizerShort: "JYRAC",
  organizerUrl: "https://jyrac.stki.org/",
  instagram: "@mwcdrr_jyrac",
  instagramUrl: "https://www.instagram.com/mwcdrr_jyrac/",
  email: "jyrac.pr@gmail.com",
  applyUrl: "https://forms.gle/hkSQi2uSmfhiGKni7",
  /** 本番ドメインが決まったら書き換えてください（OGP・sitemap に使用） */
  url: "https://mwcdrr.jyrac.stki.org",
  /** 開催都市の座標。ヒーローや地図の演出に使用 */
  hostCoordinates: { lat: 35.6812, lng: 139.7671, label: "35.68°N 139.77°E" },
} as const;

/** ヘッダーのナビゲーション。並び替え・追加はここだけで完結します。 */
export const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "CONFERENCE", href: "#conference" },
  { label: "AGENDA", href: "#agenda" },
  { label: "JOIN", href: "#join" },
  { label: "NEWS", href: "#news" },
  { label: "RESOURCES", href: "#resources" },
  { label: "CONTACT", href: "#contact" },
] as const;

/** 未確定項目の共通表記 */
export const COMING_SOON = "DETAILS COMING SOON";

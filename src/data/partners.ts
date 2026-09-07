import { siteConfig } from "./site";

export type Partner = {
  name: string;
  url?: string;
  /** public/partners/ にロゴを置いて "/partners/xxx.svg" と指定（任意） */
  logo?: string;
};

export type PartnerGroup = {
  titleEn: string;
  title: string;
  partners: Partner[];
  /** 空の場合に表示する文言 */
  placeholder?: string;
};

/** PARTNERS セクション。決まり次第 partners 配列に追加してください。 */
export const partnerData: PartnerGroup[] = [
  {
    titleEn: "ORGANIZER",
    title: "主催",
    partners: [{ name: siteConfig.organizer, url: siteConfig.organizerUrl, logo: "/logo/jyrac-logo.png" }],
  },
  { titleEn: "CO-ORGANIZER", title: "共催", partners: [], placeholder: "COMING SOON" },
  { titleEn: "SUPPORTED BY", title: "後援", partners: [], placeholder: "COMING SOON" },
  { titleEn: "PARTNERS", title: "協力", partners: [], placeholder: "COMING SOON" },
];

import { siteConfig } from "./site";

export type JoinTrack = {
  id: string;
  titleEn: string;
  title: string;
  lead: string;
  body: string;
  points: string[];
  ctaLabel: string;
  ctaUrl?: string;
  /** true にしたトラックが大きく強調表示されます */
  featured: boolean;
  /** 募集開始前は false にすると「COMING SOON」表示になります */
  open: boolean;
};

/** JOIN THE CONFERENCE の3トラック */
export const joinData: JoinTrack[] = [
  {
    id: "staff",
    titleEn: "STAFF",
    title: "実行委員",
    lead: "第1回大会を、\n一緒につくる。",
    body: "会議の設計、議題の研究、広報、渉外。前例がないぶん、決めることはすべて自分たちの手の中にあります。防災の知識も、模擬国連の経験も、入口では問いません。",
    points: ["中高生・大学生歓迎", "オンライン中心の活動", "経験不問・全国から参加可"],
    ctaLabel: "APPLY NOW",
    ctaUrl: siteConfig.applyUrl,
    featured: true,
    open: true,
  },
  {
    id: "delegate",
    titleEn: "DELEGATE",
    title: "参加者",
    lead: "一国の代表として、\n議場に立つ。",
    body: "担当国の代表として調査し、交渉し、成果文書をつくる。会議当日の主役です。募集要項は決まり次第このページで公開します。",
    points: ["中学生・高校生・大学生等", "2027年3月・東京", "募集開始は追ってお知らせします"],
    ctaLabel: "COMING SOON",
    featured: false,
    open: false,
  },
  {
    id: "partner",
    titleEn: "PARTNER",
    title: "協力団体",
    lead: "若者の会議を、\n社会につなぐ。",
    body: "企業・行政・大学・団体として、会場提供、専門知の提供、広報、資金面などでご協力いただけるパートナーを探しています。",
    points: ["後援・協賛", "会場・専門家のご紹介", "共催のご相談"],
    ctaLabel: "CONTACT US",
    ctaUrl: "mailto:" + siteConfig.email,
    featured: false,
    open: true,
  },
];

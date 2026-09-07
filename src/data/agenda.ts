export type AgendaData = {
  /** 議題が確定したら status を "announced" に変更してください */
  status: "coming-soon" | "announced";
  titleEn?: string;
  title?: string;
  background?: string;
  issue?: string;
  mission?: string;
  /** Background Guide の PDF リンク（public/ に置いたファイル or 外部URL） */
  backgroundGuideUrl?: string;
  /** 背景演出として表示するキーワード */
  keywords: string[];
};

export const agendaData: AgendaData = {
  status: "coming-soon",
  keywords: [
    "DISASTER RISK REDUCTION",
    "災害リスク削減",
    "INTERNATIONAL COOPERATION",
    "国際協力",
    "RECOVERY",
    "復興",
    "RESILIENCE",
    "レジリエンス",
    "PREPAREDNESS",
    "防災政策",
    "EARLY WARNING",
    "気候変動",
  ],
  // 議題が決まったら、以下のコメントを外して内容を書き換えてください。
  // titleEn: "Strengthening Early Warning Systems for All",
  // title: "すべての人に届く早期警戒システムの構築",
  // background: "議題の背景をここに書きます。",
  // issue: "論点をここに書きます。",
  // mission: "各国代表に求められることをここに書きます。",
  // backgroundGuideUrl: "/docs/background-guide.pdf",
};

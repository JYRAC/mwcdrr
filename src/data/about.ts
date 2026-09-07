export type AboutPoint = {
  titleEn: string;
  title: string;
  body: string;
};

/** WHAT IS MWCDRR? のカード */
export const aboutPoints: AboutPoint[] = [
  {
    titleEn: "BE A DELEGATE",
    title: "一国の代表になる",
    body: "参加者はひとつの国の代表として席に着く。自分の意見ではなく、国の立場で発言する。",
  },
  {
    titleEn: "KNOW THE RISK",
    title: "災害リスクを調べる",
    body: "地震、洪水、干ばつ、気候変動。担当国が抱えるリスクと防災政策を調査する。",
  },
  {
    titleEn: "NEGOTIATE",
    title: "他国と交渉する",
    body: "被災国、支援国、島嶼国。立場の違う国々と、合意点を探して交渉する。",
  },
  {
    titleEn: "MAKE A DOCUMENT",
    title: "成果文書をつくる",
    body: "議論の結論を国際的な成果文書としてまとめ、会議で採択する。",
  },
];

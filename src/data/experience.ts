export type ExperienceStep = {
  no: string;
  titleEn: string;
  title: string;
  body: string;
};

/** THE EXPERIENCE の5ステップ */
export const experienceSteps: ExperienceStep[] = [
  {
    no: "01",
    titleEn: "COUNTRY",
    title: "担当国決定",
    body: "あなたが代表する国が決まる。その日から、世界の見え方が変わる。",
  },
  {
    no: "02",
    titleEn: "RESEARCH",
    title: "調査",
    body: "担当国の災害リスク、防災政策、国際社会での立場を読み解く。",
  },
  {
    no: "03",
    titleEn: "NEGOTIATE",
    title: "交渉",
    body: "利害の異なる各国代表と対話し、合意できる線を探る。",
  },
  {
    no: "04",
    titleEn: "DRAFT",
    title: "成果文書作成",
    body: "議論を一本の文書にまとめる。言葉ひとつが各国の立場を左右する。",
  },
  {
    no: "05",
    titleEn: "ADOPT",
    title: "採択",
    body: "会議の総意として文書を採択し、世界に示す。",
  },
];

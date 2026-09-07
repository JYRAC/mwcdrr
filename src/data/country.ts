/**
 * REPRESENT THE WORLD セクションで使う国データ。
 * ※ 現在の内容はサイト構築用のサンプルです。担当国が確定したら差し替えてください。
 * lat / lng を入れるだけで、世界地図上のピン位置は自動計算されます。
 */
export type Country = {
  code: string;
  nameEn: string;
  nameJa: string;
  lat: number;
  lng: number;
  /** 主な災害リスク */
  disasterRisk: string;
  /** 代表的な防災政策 */
  keyPolicy: string;
  /** 国際的な立場 */
  internationalPosition: string;
};

export const countryData: Country[] = [
  {
    code: "JPN",
    nameEn: "JAPAN",
    nameJa: "日本",
    lat: 36.2,
    lng: 138.3,
    disasterRisk: "地震、津波、台風、豪雨、火山噴火",
    keyPolicy: "災害対策基本法にもとづく事前防災と国土強靱化",
    internationalPosition: "仙台防災枠組の採択国として、防災の国際協力を主導する立場",
  },
  {
    code: "IDN",
    nameEn: "INDONESIA",
    nameJa: "インドネシア",
    lat: -2.5,
    lng: 118.0,
    disasterRisk: "地震、津波、火山噴火、洪水",
    keyPolicy: "国家防災庁（BNPB）を中心とした全国的な災害管理体制",
    internationalPosition: "ASEAN域内の防災協力を支える多島国家",
  },
  {
    code: "PHL",
    nameEn: "PHILIPPINES",
    nameJa: "フィリピン",
    lat: 12.5,
    lng: 122.0,
    disasterRisk: "台風、高潮、洪水、地震",
    keyPolicy: "DRRM法にもとづく地方自治体主導の防災",
    internationalPosition: "気候変動と災害の関係を国際交渉で強く訴える国のひとつ",
  },
  {
    code: "ITA",
    nameEn: "ITALY",
    nameJa: "イタリア",
    lat: 42.8,
    lng: 12.5,
    disasterRisk: "地震、火山噴火、地滑り、洪水",
    keyPolicy: "市民保護局（Protezione Civile）とボランティアの連携体制",
    internationalPosition: "EUの市民保護メカニズムを通じた域内の相互支援",
  },
  {
    code: "CHL",
    nameEn: "CHILE",
    nameJa: "チリ",
    lat: -35.0,
    lng: -71.0,
    disasterRisk: "巨大地震、津波、山火事",
    keyPolicy: "厳格な耐震基準と、全国規模の避難訓練",
    internationalPosition: "中南米における地震・津波防災の知見の共有役",
  },
  {
    code: "NZL",
    nameEn: "NEW ZEALAND",
    nameJa: "ニュージーランド",
    lat: -41.0,
    lng: 174.0,
    disasterRisk: "地震、火山噴火、津波",
    keyPolicy: "CDEM法にもとづくコミュニティ主体の備え",
    internationalPosition: "太平洋島嶼国との地域協力を重視",
  },
];

/**
 * 緯度経度 → 世界地図（正距円筒図法）上の座標に変換する。
 * worldDots.ts と同じ基準で計算しているため、ピンとドットの位置が一致します。
 */
export const MAP_HEIGHT = 74.44;

/** 世界地図SVGの表示領域 */
export const WORLD_VIEWBOX = `0 0 100 ${MAP_HEIGHT}`;
const MAP_Y_OFFSET = 6.667;

export function projectToMap(lng: number, lat: number) {
  return {
    x: ((lng + 180) / 360) * 100,
    y: ((90 - lat) / 180) * 100 - MAP_Y_OFFSET,
  };
}

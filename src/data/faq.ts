export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * FAQ。以下の形式で追加すると、アコーディオンとして表示されます。
 * 空の配列のあいだは「COMING SOON」表示になります。
 *
 * 例:
 * { question: "防災の知識がなくても参加できますか？", answer: "はい。事前に配布する資料で準備できます。" },
 */
export const faqData: FaqItem[] = [];

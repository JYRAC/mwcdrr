import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "第1回模擬防災国連（MWCDRR）公式サイトにおける個人情報の取り扱いについて。",
  robots: { index: false, follow: true },
};

/**
 * ひな形です。実際の運用にあわせて JYRAC で内容を確認・修正してください。
 */
const sections = [
  {
    title: "1. 取得する情報",
    body: "本サイトでは、実行委員・参加者・協力団体の応募フォーム（Google フォーム）を通じて、氏名、メールアドレス、学校名・学年、応募動機等をご提供いただく場合があります。また、アクセス状況の把握のため、閲覧されたページ、ブラウザの種類等の情報を取得する場合があります。",
  },
  {
    title: "2. 利用目的",
    body: "取得した情報は、大会運営に関するご連絡、選考、当日の運営、統計的な分析および今後の大会運営の改善のために利用します。それ以外の目的には利用しません。",
  },
  {
    title: "3. 第三者への提供",
    body: "法令にもとづく場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。共催・後援団体等と情報を共有する必要がある場合は、事前にその範囲をお知らせします。",
  },
  {
    title: "4. 未成年の方の応募について",
    body: "中学生・高校生の方が応募される場合は、保護者の方の同意を得たうえでお申し込みください。必要に応じて保護者の方へご連絡することがあります。",
  },
  {
    title: "5. 情報の管理",
    body: "取得した個人情報は、漏えい・滅失・毀損の防止に努め、利用目的の達成に必要な期間に限り保管します。",
  },
  {
    title: "6. 開示・訂正・削除のご請求",
    body: "ご自身の情報の開示、訂正、削除をご希望の場合は、下記の連絡先までご連絡ください。ご本人であることを確認のうえ、速やかに対応します。",
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <p className="label">PRIVACY POLICY</p>
      <h1 className="mt-4 font-jp text-3xl font-bold text-white md:text-4xl">プライバシーポリシー</h1>
      <p className="mt-6 text-sm leading-jp text-halo/70">
        {siteConfig.organizer}（以下「当協会」）は、第1回模擬防災国連（MWCDRR）の運営にあたり、以下のとおり個人情報を取り扱います。
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-jp text-lg font-bold text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-jp text-halo/65">{section.body}</p>
          </section>
        ))}
        <section>
          <h2 className="font-jp text-lg font-bold text-white">7. お問い合わせ先</h2>
          <p className="mt-3 text-sm leading-jp text-halo/65">
            {siteConfig.organizer}
            <br />
            <a href={`mailto:${siteConfig.email}`} className="text-gold underline underline-offset-4">
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>

      <a
        href="/"
        className="mt-16 inline-flex rounded-full border border-white/20 px-6 py-3 font-display text-[0.68rem] tracking-[0.2em] text-white/80 transition-colors hover:border-violet-soft/60 hover:text-white"
      >
        BACK TO TOP
      </a>
    </div>
  );
}

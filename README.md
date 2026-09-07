# MWCDRR 公式サイト

第1回 模擬防災国連（1st Model World Conference on Disaster Risk Reduction）の公式Webサイトです。
主催：NPO法人日本若者防災復興協会（JYRAC）

- 開催：2027年3月予定 / 東京都
- Instagram：[@mwcdrr_jyrac](https://www.instagram.com/mwcdrr_jyrac/)
- Mail：jyrac.pr@gmail.com

---

## 1. まず動かす

必要なもの：Node.js 20 以上（[nodejs.org](https://nodejs.org/) からインストール）

```bash
npm install     # 最初の1回だけ
npm run dev     # 開発サーバー起動 → http://localhost:3000
```

`Ctrl + C` で停止します。ファイルを保存すると、ブラウザが自動で更新されます。

```bash
npm run build   # 本番用ビルド（公開前の確認）
npm start       # ビルドしたものを表示
```

## 2. 公開する（Vercel）

1. このフォルダを GitHub にアップロードする
2. [vercel.com](https://vercel.com/) に GitHub アカウントでログイン
3. 「Add New → Project」から該当リポジトリを選び、そのまま Deploy
4. 独自ドメインを設定したら、`src/data/site.ts` の `url` を実際のドメインに書き換える（OGP と sitemap で使用）

設定を変更する必要はありません。Next.js を自動で認識します。

---

## 3. 「どこを直せばいいか」早見表

**文言・情報の変更は、原則 `src/data/` の中だけで完結します。**
コンポーネント（`src/components/`）を触る必要はありません。

| 変えたいもの | 編集するファイル |
| --- | --- |
| 大会名、日程、メール、Instagram、応募フォームURL、ドメイン | `src/data/site.ts` |
| ヘッダーのメニュー項目 | `src/data/site.ts` の `navItems` |
| 開催・会場・参加費・定員などの大会情報 | `src/data/conference.ts` |
| 議題（AGENDA） | `src/data/agenda.ts` |
| 担当国と国プロフィール | `src/data/country.ts` |
| 参加導線（DELEGATE / STAFF / PARTNER） | `src/data/join.ts` |
| 実行委員（SECRETARIAT） | `src/data/people.ts` |
| 主催・共催・後援・協力 | `src/data/partners.ts` |
| ニュース | `src/data/news.ts` |
| 配布資料（PDF） | `src/data/resources.ts` |
| よくある質問 | `src/data/faq.ts` |
| MWCDRR とは／体験の5ステップ | `src/data/about.ts` / `src/data/experience.ts` |
| ロゴ画像 | `public/logo/`（下記参照） |
| 色・フォント | `tailwind.config.ts` |
| ページのタイトル・説明文（SEO） | `src/app/layout.tsx` の先頭 |
| プライバシーポリシー本文 | `src/app/privacy/page.tsx` |

### よくある更新の手順

**ニュースを追加する** — `src/data/news.ts` の配列の先頭に1件足すだけです。日付順に自動で並びます。

```ts
{
  date: "2026.11",
  datetime: "2026-11-15",
  category: "AGENDA",
  title: "第1回大会の議題を発表しました",
  body: "議題と Background Guide を公開しました。",
  href: "#agenda",   // 不要なら削除
},
```

**未定の項目が決まった** — `src/data/conference.ts` の `value` を書き換えます。
`COMING_SOON` と書いてある間は「DETAILS COMING SOON」と表示されます。

**議題を公開する** — `src/data/agenda.ts` の `status` を `"announced"` に変え、コメントアウトされている `title` 以下の行を有効にします。`backgroundGuideUrl` を書くとボタンが出ます。

**PDF資料を公開する** — PDFを `public/docs/` に置き（フォルダがなければ作成）、`src/data/resources.ts` の該当項目に `href: "/docs/ファイル名.pdf"` を追加します。href があるカードだけが自動でリンクになり、表示が「COMING SOON」から「OPEN PDF」に変わります。

**実行委員の名前を載せる** — `src/data/people.ts` の `name` を埋めます。空のままだと「TO BE ANNOUNCED」と表示されます。
顔写真を載せる場合は `public/people/` に画像を置き、`photo: "/people/ファイル名.jpg"` を追加します（写真なしでもレイアウトは崩れません）。
募集中の役職は `recruiting: true` にすると、応募フォームへのリンクが出ます。

**FAQを追加する** — `src/data/faq.ts` の配列に `{ question, answer }` を足します。1件でも入れるとアコーディオンに切り替わり、空のあいだは「COMING SOON」表示のままです。

**協力団体を追加する** — `src/data/partners.ts` の該当グループの `partners` に `{ name, url, logo }` を足します。ロゴは `public/partners/` に置いてください。

**担当国を差し替える** — `src/data/country.ts` を編集します。**緯度 `lat` と経度 `lng` を入れるだけで、世界地図上のピン位置は自動計算されます。**
※ 現在入っている6か国と内容は、サイト構築用のサンプルです。実際の担当国が決まったら差し替えてください（サイト上にもその旨を注記しています）。

### ロゴ画像について

`public/logo/` に、いただいた公式ロゴから用途別に4種類を用意しています（背景は透過処理済み）。
差し替える場合は、同じファイル名・同じ縦横比の画像を上書きしてください。

| ファイル | 使用箇所 |
| --- | --- |
| `mwcdrr-logo.png` | ヒーロー（トップの大きなロゴ）、フッター |
| `mwcdrr-lockup.png` | ヘッダー（星座マーク＋MWCDRR の横組み） |
| `mwcdrr-mark.png` | ファビコン・アプリアイコンの生成元 |
| `jyrac-logo.png` | PARTNERS の主催欄（白いタイルの上にフルカラーで表示） |
| `jyrac-logo-white.png` | フッター・CONTACT（暗い背景用の白一色版） |

`public/og.png`（SNSシェア画像）、`public/icon.png`、`public/apple-icon.png` も
このロゴから作成しています。ロゴを変更した場合はこれらも作り直してください。

---

## 4. 構成

```
src/
├── app/
│   ├── layout.tsx        全ページ共通（SEO・OGP・フォント読み込み・背景）
│   ├── page.tsx          トップページ（各セクションを並べているだけ）
│   ├── privacy/page.tsx  プライバシーポリシー
│   ├── sitemap.ts        sitemap.xml
│   └── globals.css       共通スタイル
├── components/
│   ├── layout/           Header / Footer
│   ├── sections/         Hero, Intro, About, Experience, Conference, Agenda,
│   │                     Country, Join, People, Partners, News, Resources,
│   │                     Faq, Contact
│   └── ui/               Section, Reveal, Starfield, WorldMap, Logo など
├── data/                 ★ 情報はすべてここ
└── lib/motion.ts         アニメーションの共通設定
public/                   og.png, icon.svg, apple-icon.png, robots.txt
```

セクションの並び順を変えたい場合は、`src/app/page.tsx` のコンポーネントの順序を入れ替えてください。

### 技術構成

Next.js 16（App Router）/ TypeScript / Tailwind CSS 3 / Framer Motion 13

---

## 5. デザインについて

- **色**：深い紫 `#4C1D95` を基調に、明るい紫 `#B79CFF`、白 `#E9E2FF`、黄色 `#F2CB6A`。背景はほぼ黒に近い濃紺〜紫のグラデーション。`tailwind.config.ts` の `colors` を変えると全体に反映されます
- **フォント**：英字 Outfit、日本語見出し Zen Kaku Gothic New、本文 Noto Sans JP
- **世界地図**：Natural Earth（パブリックドメイン）の陸地データを1,224個のドットに変換したものです（`src/data/worldDots.ts`）。SVGの定義を1か所にまとめ、ヒーローと COUNTRY セクションで共有しているので、地図を何度使ってもページは重くなりません
- **黄色（ゴールド）は「行動」の色**として、JOIN US や APPLY NOW などのボタンにだけ使っています。乱用すると効かなくなるのでご注意ください

## 6. パフォーマンス・アクセシビリティ

- 動画背景や大きな画像は使わず、背景はグラデーションとCanvasの星空のみ
- 星空は約30fpsに間引き、タブが非表示のあいだは描画を止めます
- `prefers-reduced-motion`（動きを減らす設定）をON にしている端末では、アニメーションを停止します
- キーボード操作に対応し、フォーカス位置が見えるようにしています。「本文へスキップ」リンクもあります
- 世界地図のピンは、下のボタン一覧からも同じ操作ができます（タップ・キーボード両対応）
- 画像には alt、アイコンには aria-label / aria-hidden を設定しています

## 7. 公開前チェックリスト

- [ ] `src/data/site.ts` の `url` を本番ドメインに変更
- [ ] `public/robots.txt` の Sitemap URL を本番ドメインに変更
- [ ] `src/data/country.ts` のサンプル国データを差し替え（または COUNTRY セクションを非表示に）
- [ ] `src/app/privacy/page.tsx` のプライバシーポリシー本文を JYRAC で確認
- [ ] 応募フォームのURLが最新か確認
- [ ] SNSでシェアして OGP 画像（`public/og.png`）の表示を確認
- [ ] 名称の統一：ロゴの日本語表記は「模擬国連防災世界会議」、サイト本文は「模擬防災国連」です。どちらを正式名称にするか決めて揃えてください（本文側は `src/data/site.ts` と各セクションの文言で変更できます）

---

© 2026-2027 JYRAC

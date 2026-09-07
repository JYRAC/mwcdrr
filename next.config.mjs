/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 画像を最適化サーバーなしで配信したい場合（静的書き出し）に使う設定。
  // Vercel 等にそのままデプロイする場合は変更不要です。
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

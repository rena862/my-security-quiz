/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← これで静的HTMLを出力
  images: {
    unoptimized: true, // GitHub Pagesで画像を使うなら必要
  },
  basePath: process.env.GITHUB_PAGES ? '/my-security-quiz' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/my-security-quiz/' : '',
}

module.exports = nextConfig

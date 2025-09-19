/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← 静的サイト用
  images: {
    unoptimized: true, // GitHub Pages対応
  },
  basePath: '/my-security-quiz', // ← リポジトリ名に合わせる
  assetPrefix: '/my-security-quiz/', // ← リポジトリ名に合わせる
}

module.exports = nextConfig

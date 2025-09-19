/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // 静的HTML生成
  images: { unoptimized: true },
  basePath: '/my-security-quiz',
  assetPrefix: '/my-security-quiz/',
};

module.exports = nextConfig;

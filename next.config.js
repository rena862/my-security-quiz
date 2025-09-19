/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-security-quiz', // ← リポジトリ名
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

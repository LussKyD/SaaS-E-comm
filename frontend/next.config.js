// frontend/next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ensures static HTML export
  images: { unoptimized: true },
  assetPrefix: isProd ? '/SaaS-E-comm/' : '',
  basePath: isProd ? '/SaaS-E-comm' : '',
};

module.exports = nextConfig;

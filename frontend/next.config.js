// frontend/next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // ✅ required for static builds
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/SaaS-E-comm/' : '',
  basePath: isProd ? '/SaaS-E-comm' : '',
  trailingSlash: true, // ✅ ensures correct relative paths for GitHub Pages
};

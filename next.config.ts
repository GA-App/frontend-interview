import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  // images: {
  //   unoptimized: true,
  // },
  assetPrefix: isProd ? '/frontend-interview/' : '',
  basePath: isProd ? '/frontend-interview' : '',
  output: 'export',
  distDir: "dist"
};

export default nextConfig;

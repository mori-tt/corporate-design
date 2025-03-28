import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// 静的生成用の設定
const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/corporate-design" : "",
  assetPrefix: isProd ? "/corporate-design/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

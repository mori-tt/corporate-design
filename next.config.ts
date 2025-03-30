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
  // RSCリクエストを無効化し、静的ファイルのみを使用
  experimental: {
    // App Routerでの静的エクスポート最適化
    serverComponentsExternalPackages: [],
  },
  // 404エラーを修正するためのカスタム設定
  trailingSlash: true,
};

export default nextConfig;

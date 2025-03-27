import type { NextConfig } from "next";

// 静的生成用の設定
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

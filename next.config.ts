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
  // 静的アセットのキャッシュポリシーを設定
  headers: async () => {
    return [
      {
        source: "/(.*\\.(?:jpg|jpeg|png|gif|svg|ico|css|js)$)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

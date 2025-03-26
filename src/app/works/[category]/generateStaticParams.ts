const categoryMapping: { [key: string]: string } = {
  web: "Webデザイン",
  branding: "ブランディング",
  ui: "UI/UXデザイン",
  graphic: "グラフィックデザイン",
  motion: "モーションデザイン",
  "natural-food-branding": "ナチュラルフードブランディング",
  "green-app-ui": "グリーンアプリUI",
  "able-corp-website": "エイブルコーポレーションウェブサイト",
  "urban-style-branding": "アーバンスタイルブランディング",
  "tech-innovation-website": "テックイノベーションウェブサイト",
  "health-app-ux": "ヘルスアプリUX",
};

export function generateStaticParams() {
  return Object.keys(categoryMapping).map((category) => ({
    category,
  }));
}

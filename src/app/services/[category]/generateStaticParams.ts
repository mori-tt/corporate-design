const categoryMapping: { [key: string]: string } = {
  web: "Webデザイン",
  branding: "ブランディング",
  ui: "UI/UXデザイン",
  graphic: "グラフィックデザイン",
  motion: "モーションデザイン",
};

export function generateStaticParams() {
  return Object.keys(categoryMapping).map((category) => ({
    category,
  }));
}

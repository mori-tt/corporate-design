"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const workCategories = [
  { id: "all", name: "すべて" },
  { id: "web", name: "Webデザイン" },
  { id: "ui", name: "UIデザイン" },
  { id: "branding", name: "ブランディング" },
  { id: "marketing", name: "マーケティング" },
];

const categoryMapping: Record<string, string> = {
  Webデザイン: "web",
  UIデザイン: "ui",
  ブランディング: "branding",
  マーケティング: "marketing",
};

const works = [
  {
    id: "able-corp-website",
    title: "ABLE Corp. ウェブサイトリニューアル",
    category: "Webデザイン",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description:
      "企業イメージの刷新に合わせたウェブサイトの全面リニューアル。モダンでユーザーフレンドリーなデザインにより、ユーザーエンゲージメントとコンバージョン率が向上。",
    year: "2023",
  },
  {
    id: "green-app-ui",
    title: "GREEN アプリUIデザイン",
    category: "UIデザイン",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
    description:
      "サステナビリティに特化したライフスタイルアプリのUIデザイン。直感的な操作性と美しいビジュアルで、アプリの使用継続率が大幅に向上。",
    year: "2023",
  },
  {
    id: "natural-food-branding",
    title: "Natural Food ブランディング",
    category: "ブランディング",
    image: "https://images.unsplash.com/photo-1475750632132-0e91befbefed",
    description:
      "オーガニック食品ブランドの統合的なブランディング。ロゴ、パッケージデザイン、ウェブサイトなど一貫したビジュアルアイデンティティを構築し、ブランド認知度を高めた。",
    year: "2022",
  },
  {
    id: "tech-innovation-website",
    title: "Tech Innovation ウェブデザイン",
    category: "Webデザイン",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description:
      "テクノロジースタートアップ企業の革新的なウェブサイトデザイン。最新のデザイントレンドを取り入れながら、製品の特徴を効果的に伝えるサイト構成を実現。",
    year: "2022",
  },
  {
    id: "urban-style-branding",
    title: "Urban Style ブランドアイデンティティ",
    category: "ブランディング",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    description:
      "都市型ライフスタイルブランドのアイデンティティ開発。若年層をターゲットにした現代的でエッジの効いたデザインで、SNSでの話題性を高めた。",
    year: "2022",
  },
  {
    id: "health-app-ux",
    title: "Health+ アプリUX改善",
    category: "UIデザイン",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description:
      "ヘルスケアアプリのユーザーエクスペリエンス改善プロジェクト。ユーザーテストに基づき、インターフェースを最適化し、使いやすさを向上させた。",
    year: "2021",
  },
];

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredWorks =
    selectedCategory === "all"
      ? works
      : works.filter(
          (work) => categoryMapping[work.category] === selectedCategory
        );

  return (
    <>
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">実績</h1>
            <p className="text-lg text-neutral-600">
              DESIGN STUDIOが手がけたプロジェクトの一部をご紹介します。
              様々な業種・業界のクライアント様と協力し、ビジネスの成長と成功を支援してきた実績です。
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {workCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${
                  category.id === selectedCategory
                    ? "bg-black text-white"
                    : "bg-neutral-200 hover:bg-neutral-300 text-neutral-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredWorks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-neutral-600">
                選択したカテゴリの実績はまだありません。
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((work) => (
                <div key={work.id} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="absolute w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm text-black">
                          {work.category}
                        </div>
                        <div className="text-sm text-neutral-500">
                          {work.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4">
                        {work.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link href={`/works/${work.id}`}>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-black hover:text-neutral-700"
                          >
                            詳細を見る
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            あなたのプロジェクトも成功させませんか？
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            お客様のビジネス目標を達成するための最適なデザインソリューションを提供します。
            プロジェクトについてのご相談やお見積もりは、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button className="bg-black hover:bg-neutral-800">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  works as worksData,
  WorkCategory,
  validCategories,
  categoryTitles,
} from "@/data/works";

// カテゴリボタン用のオプション
const workCategories = [
  { id: "all", name: "すべて" },
  ...validCategories.map((category) => ({
    id: category,
    name: categoryTitles[category as WorkCategory],
  })),
];

export default function WorksPage() {
  const worksArray = Object.values(worksData);
  const [selectedCategory, setSelectedCategory] = useState<
    WorkCategory | "all"
  >("all");

  // selectedCategoryに基づいてワークをフィルタリング
  const filteredWorks =
    selectedCategory === "all"
      ? worksArray
      : worksArray.filter((work) => work.category === selectedCategory);

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
                onClick={() =>
                  setSelectedCategory(category.id as WorkCategory | "all")
                }
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
                <div key={work.title} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="absolute w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm text-black">
                          {work.categoryjp}
                        </div>
                        <div className="text-sm text-neutral-500">
                          {work.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4 flex-grow">
                        {work.description}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <Link href={`/works/${work.slug}`}>
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

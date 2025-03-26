"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type CategoryPageProps = {
  category: string;
};

const categoryMapping: Record<string, string> = {
  web: "Webデザイン",
  branding: "ブランディング",
  ui: "UI/UXデザイン",
  graphic: "グラフィックデザイン",
  motion: "モーションデザイン",
};

// Category-specific theme colors
const categoryThemes: Record<
  string,
  { bgColor: string; accentColor: string; lightBg: string }
> = {
  web: {
    bgColor: "bg-slate-900",
    accentColor: "bg-blue-500",
    lightBg: "bg-slate-50",
  },
  branding: {
    bgColor: "bg-violet-900",
    accentColor: "bg-violet-500",
    lightBg: "bg-violet-50",
  },
  ui: {
    bgColor: "bg-indigo-900",
    accentColor: "bg-indigo-500",
    lightBg: "bg-indigo-50",
  },
  graphic: {
    bgColor: "bg-emerald-900",
    accentColor: "bg-emerald-500",
    lightBg: "bg-emerald-50",
  },
  motion: {
    bgColor: "bg-amber-900",
    accentColor: "bg-amber-500",
    lightBg: "bg-amber-50",
  },
};

type Service = {
  title: string;
  description: string;
  features: string[];
  image: string;
};

const categoryServices: Record<string, Service[]> = {
  web: [
    {
      title: "コーポレートサイト制作",
      description: "企業のブランド価値を高めるコーポレートサイトの制作",
      features: [
        "レスポンシブデザイン",
        "SEO対策",
        "高速な読み込み速度",
        "セキュリティ対策",
      ],
      image: "/services/web-design-1.jpg",
    },
    {
      title: "ECサイト制作",
      description: "売上を最大化するECサイトの制作",
      features: [
        "ユーザー体験の最適化",
        "決済システム連携",
        "在庫管理システム",
        "分析ツール連携",
      ],
      image: "/services/web-design-2.jpg",
    },
  ],
  branding: [
    {
      title: "ブランドアイデンティティ設計",
      description: "新規ブランドのアイデンティティ設計と展開",
      features: [
        "ロゴデザイン",
        "ブランドカラー設定",
        "タイポグラフィ設計",
        "ブランドガイドライン作成",
      ],
      image: "/services/branding-1.jpg",
    },
    {
      title: "ブランド戦略立案",
      description: "企業のブランド戦略の策定と実行",
      features: [
        "市場分析",
        "ターゲット設定",
        "ブランドポジショニング",
        "コミュニケーション戦略",
      ],
      image: "/services/branding-2.jpg",
    },
  ],
  ui: [
    {
      title: "アプリUIデザイン",
      description: "モバイルアプリケーションのUI/UXデザイン",
      features: [
        "ユーザーリサーチ",
        "ワイヤーフレーム作成",
        "プロトタイプ制作",
        "ユーザビリティテスト",
      ],
      image: "/services/ui-ux-1.jpg",
    },
    {
      title: "ダッシュボード設計",
      description: "データ可視化を重視したダッシュボードのUI設計",
      features: [
        "データ分析",
        "インタラクション設計",
        "情報アーキテクチャ",
        "アクセシビリティ対応",
      ],
      image: "/services/ui-ux-2.jpg",
    },
  ],
  graphic: [
    {
      title: "パンフレットデザイン",
      description: "企業のサービスを紹介するパンフレットのデザイン",
      features: ["レイアウトデザイン", "写真撮影", "印刷管理", "品質管理"],
      image: "/services/graphic-1.jpg",
    },
    {
      title: "ポスター制作",
      description: "イベント告知用ポスターのデザインと制作",
      features: [
        "コンセプト立案",
        "ビジュアルデザイン",
        "印刷データ作成",
        "制作管理",
      ],
      image: "/services/graphic-2.jpg",
    },
  ],
  motion: [
    {
      title: "プロモーションビデオ",
      description: "ブランドプロモーション用のモーショングラフィックス",
      features: [
        "ストーリーボード作成",
        "アニメーション制作",
        "音声編集",
        "エフェクト制作",
      ],
      image: "/services/motion-1.jpg",
    },
    {
      title: "アニメーション制作",
      description: "Webサイト用のインタラクティブアニメーション",
      features: [
        "インタラクション設計",
        "アニメーション制作",
        "パフォーマンス最適化",
        "クロスブラウザ対応",
      ],
      image: "/services/motion-2.jpg",
    },
  ],
};

export default function CategoryPage({ category }: CategoryPageProps) {
  const services = categoryServices[category] || [];
  const theme = categoryThemes[category] || {
    bgColor: "bg-black",
    accentColor: "bg-gray-500",
    lightBg: "bg-gray-50",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`${theme.bgColor} text-white pt-28 pb-20 md:pt-40 md:pb-32 relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="currentColor"
              d="M39.9,-65.7C53.3,-58.4,67,-50.9,74.3,-39.1C81.7,-27.3,82.7,-11.2,81.2,4.3C79.8,19.8,75.9,34.6,67.6,46.6C59.3,58.6,46.5,67.7,32.3,74.3C18,80.9,2.3,85,-12.2,82.2C-26.8,79.3,-40.2,69.5,-51.4,58.1C-62.6,46.7,-71.6,33.6,-76.1,18.6C-80.7,3.6,-80.8,-13.4,-75.3,-28.3C-69.8,-43.2,-58.7,-56,-45.4,-63.3C-32.1,-70.6,-16,-72.4,-1.4,-70.3C13.3,-68.2,26.6,-62.2,39.9,-65.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className={`${theme.accentColor} h-1 w-24 mb-8`}></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {categoryMapping[category]}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              クリエイティブなデザインで、ビジネスの可能性を広げます
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-neutral-700"
                      >
                        <span
                          className={`${theme.accentColor} w-2 h-2 rounded-full mr-3`}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full ${theme.bgColor} text-white hover:opacity-90`}
                    >
                      お問い合わせ
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`${theme.lightBg} py-20`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">制作プロセス</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              効率的かつ透明性のあるプロセスで、お客様の理想を形にします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "要件定義",
                description:
                  "クライアント様のニーズを明確にし、プロジェクトの目標と範囲を定義します。",
                icon: "🎯",
              },
              {
                title: "デザイン制作",
                description: "ブランドに合わせた魅力的なデザインを制作します。",
                icon: "🎨",
              },
              {
                title: "制作・実装",
                description: "デザインを忠実に実装し、機能を開発します。",
                icon: "💻",
              },
              {
                title: "テスト・リリース",
                description: "品質を確保し、スムーズにリリースします。",
                icon: "🚀",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            プロジェクトについてご相談ください
          </h2>
          <p className="text-lg mb-8 text-neutral-600 max-w-3xl mx-auto">
            お客様のビジネス目標を達成するための最適なデザインソリューションを提供します。
            お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button
              className={`${theme.bgColor} text-white hover:opacity-90 px-8 py-6 text-lg`}
            >
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

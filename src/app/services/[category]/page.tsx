import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = {
  web: {
    title: "Webデザイン",
    description: "企業のブランド価値を高めるWebサイトの企画から制作まで",
    image: "/services/web-design.jpg",
    features: ["レスポンシブデザイン", "SEO対策", "高速な読み込み速度"],
    process: [
      {
        title: "要件定義",
        description:
          "クライアント様のニーズをヒアリングし、最適なWebサイトの要件を定義します。",
        icon: "📋",
      },
      {
        title: "デザイン制作",
        description: "ブランドに合わせた魅力的なデザインを制作します。",
        icon: "🎨",
      },
      {
        title: "開発",
        description: "最新の技術を使用して、高品質なWebサイトを開発します。",
        icon: "💻",
      },
      {
        title: "テスト・リリース",
        description:
          "徹底的なテストを行い、問題なくリリースできることを確認します。",
        icon: "🚀",
      },
    ],
    benefits: [
      {
        title: "ブランド価値の向上",
        description: "魅力的なWebサイトで、企業のブランド価値を高めます。",
      },
      {
        title: "ユーザー体験の改善",
        description: "使いやすく、直感的なインターフェースを提供します。",
      },
      {
        title: "ビジネス成長の促進",
        description:
          "効果的なWebマーケティングで、ビジネスの成長をサポートします。",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  branding: {
    title: "ブランディング",
    description: "企業のブランド価値を高める戦略立案と実行",
    image: "/services/branding.jpg",
    features: ["ブランドアイデンティティ設計", "ブランドガイドライン作成"],
    process: [
      {
        title: "ブランド分析",
        description: "現状のブランド価値と課題を分析します。",
        icon: "🔍",
      },
      {
        title: "戦略立案",
        description: "目標達成のための具体的な戦略を立案します。",
        icon: "📊",
      },
      {
        title: "デザイン制作",
        description: "ブランドの視覚的要素を制作します。",
        icon: "🎨",
      },
      {
        title: "ガイドライン作成",
        description: "ブランドの一貫性を保つためのガイドラインを作成します。",
        icon: "📑",
      },
    ],
    benefits: [
      {
        title: "ブランド認知度の向上",
        description: "効果的なブランド戦略で、認知度を高めます。",
      },
      {
        title: "顧客ロイヤリティの向上",
        description: "強力なブランドで、顧客との関係を強化します。",
      },
      {
        title: "市場競争力の強化",
        description: "差別化されたブランドで、競争優位性を確立します。",
      },
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Miro", "Brand Guidelines"],
  },
  ui: {
    title: "UI/UXデザイン",
    description: "ユーザー体験を重視したインターフェースデザイン",
    image: "/services/ui-ux.jpg",
    features: [
      "ワイヤーフレーム作成",
      "プロトタイプ制作",
      "ユーザビリティテスト",
    ],
    process: [
      {
        title: "ユーザー調査",
        description: "ターゲットユーザーの行動やニーズを調査します。",
        icon: "👥",
      },
      {
        title: "ワイヤーフレーム",
        description: "情報構造を整理し、基本的なレイアウトを設計します。",
        icon: "📐",
      },
      {
        title: "プロトタイプ",
        description: "インタラクションを含むプロトタイプを制作します。",
        icon: "🔄",
      },
      {
        title: "テスト・改善",
        description: "ユーザビリティテストを行い、改善を重ねます。",
        icon: "✨",
      },
    ],
    benefits: [
      {
        title: "ユーザー満足度の向上",
        description: "使いやすく、魅力的なインターフェースを提供します。",
      },
      {
        title: "コンバージョン率の改善",
        description: "効果的なUI/UXで、目標達成率を高めます。",
      },
      {
        title: "開発効率の向上",
        description: "明確な設計で、開発プロセスを効率化します。",
      },
    ],
    technologies: ["Figma", "Adobe XD", "InVision", "Maze", "Hotjar"],
  },
  graphic: {
    title: "グラフィックデザイン",
    description: "ブランドの視覚的表現を制作",
    image: "/services/graphic.jpg",
    features: ["パンフレットデザイン", "ポスター制作", "パッケージデザイン"],
    process: [
      {
        title: "コンセプト立案",
        description: "デザインの方向性とコンセプトを決定します。",
        icon: "💡",
      },
      {
        title: "デザイン制作",
        description: "ブランドに合わせた魅力的なデザインを制作します。",
        icon: "🎨",
      },
      {
        title: "フィードバック",
        description: "クライアント様からのフィードバックを反映します。",
        icon: "💬",
      },
      {
        title: "最終調整",
        description: "細部まで調整し、完成度を高めます。",
        icon: "✨",
      },
    ],
    benefits: [
      {
        title: "ブランドの視覚的強化",
        description: "魅力的なデザインで、ブランドの印象を高めます。",
      },
      {
        title: "マーケティング効果の向上",
        description: "効果的なデザインで、マーケティングの成果を高めます。",
      },
      {
        title: "商品価値の向上",
        description: "魅力的なパッケージデザインで、商品価値を高めます。",
      },
    ],
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
    ],
  },
  motion: {
    title: "モーションデザイン",
    description: "動きのある魅力的なコンテンツ制作",
    image: "/services/motion.jpg",
    features: [
      "プロモーションビデオ",
      "アニメーション制作",
      "モーショングラフィックス",
    ],
    process: [
      {
        title: "企画",
        description: "コンテンツの企画とストーリーボードを作成します。",
        icon: "📝",
      },
      {
        title: "制作",
        description: "最新のツールを使用して動画を制作します。",
        icon: "🎬",
      },
      {
        title: "編集",
        description: "映像の編集と効果の追加を行います。",
        icon: "✂️",
      },
      {
        title: "フィードバック",
        description: "クライアント様からのフィードバックを反映します。",
        icon: "💬",
      },
    ],
    benefits: [
      {
        title: "エンゲージメントの向上",
        description: "魅力的な動画コンテンツで、ユーザーの興味を引きます。",
      },
      {
        title: "ブランドストーリーの伝達",
        description: "効果的な動画で、ブランドのストーリーを伝えます。",
      },
      {
        title: "SNSでの拡散性",
        description: "魅力的な動画で、SNSでの拡散を促進します。",
      },
    ],
    technologies: [
      "After Effects",
      "Premiere Pro",
      "Cinema 4D",
      "DaVinci Resolve",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((category) => ({
    category,
  }));
}

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services[params.category as keyof typeof services];
  if (!service) {
    return {
      title: "サービスが見つかりません | DESIGN STUDIO",
      description: "お探しのサービスは存在しません。",
    };
  }

  return {
    title: `${service.title} | DESIGN STUDIO`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = services[params.category as keyof typeof services];
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-50 to-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#f0f0f0,transparent)]"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#e0e0e0,transparent)]"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-neutral-700 mb-8">
                {service.description}
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-black hover:bg-neutral-800">
                  お問い合わせ
                </Button>
              </Link>
            </div>

            {/* サービスに合わせた画像を表示 */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                <img
                  src={`/services/${params.category}-hero.jpg`}
                  alt={service.title}
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="p-6 bg-neutral-50 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-4">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">メリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">制作プロセス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="relative p-6 bg-neutral-50 rounded-lg"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">使用技術</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech) => (
              <div
                key={tech}
                className="px-6 py-2 bg-white rounded-full shadow-md"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お問い合わせはこちら
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談やお見積りは、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-100"
            >
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

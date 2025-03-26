"use client";

import { Button } from "@/components/ui/button";
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
  "natural-food-branding": "ナチュラルフードブランディング",
  "green-app-ui": "グリーンアプリUI",
  "able-corp-website": "エイブルコーポレーションウェブサイト",
  "urban-style-branding": "アーバンスタイルブランディング",
  "tech-innovation-website": "テックイノベーションウェブサイト",
  "health-app-ux": "ヘルスアプリUX",
};

type ProjectDetail = {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  clientFeedback?: string;
  technologies: string[];
  projectImages: {
    url: string;
    caption: string;
  }[];
};

type Work = {
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  client: string;
  details: ProjectDetail;
};

const works: Record<string, Work> = {
  "natural-food-branding": {
    title: "ナチュラルフードブランディング",
    description: "オーガニック食品ブランドのブランディングとパッケージデザイン",
    image: "/works/natural-food-branding.jpg",
    category: "natural-food-branding",
    year: "2022",
    client: "Natural Foods, Inc.",
    details: {
      overview:
        "新しいオーガニック食品ブランドの立ち上げに伴い、ブランドアイデンティティとパッケージデザインを一貫して開発しました。健康と環境に配慮したブランド価値を視覚的に表現し、競合他社との差別化を図りました。",
      challenge:
        "競合が多いオーガニック食品市場で、独自性を持ちながらも消費者に親しみやすいブランドイメージを構築する必要がありました。また、環境への配慮を重視する企業理念を、パッケージデザインにも反映させることが課題でした。",
      solution:
        "自然由来の色調と手描き風のイラストを組み合わせた、温かみのあるビジュアルアイデンティティを創出しました。パッケージには再生可能素材を使用し、ミニマルでありながらも製品の鮮度と品質を伝えるデザインを採用しました。",
      results:
        "ブランド認知度が目標を30%上回り、SNSでの言及数も競合他社を上回る結果となりました。環境に配慮したパッケージデザインは、業界誌でも取り上げられ、ブランドの差別化に大きく貢献しました。",
      clientFeedback:
        "私たちのブランド理念を完璧に理解し、それを視覚的に表現してくれました。市場投入後の顧客反応も非常に良く、ブランドへの信頼構築に大きく貢献しています。",
      technologies: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Sustainable Packaging Design",
      ],
      projectImages: [
        {
          url: "/works/natural-food-branding-1.jpg",
          caption: "ブランドロゴデザイン",
        },
        {
          url: "/works/natural-food-branding-2.jpg",
          caption: "パッケージデザイン",
        },
        {
          url: "/works/natural-food-branding-3.jpg",
          caption: "ブランドガイドライン",
        },
      ],
    },
  },
  "green-app-ui": {
    title: "グリーンアプリUI",
    description: "環境配慮型アプリケーションのUIデザイン",
    image: "/works/green-app-ui.jpg",
    category: "green-app-ui",
    year: "2023",
    client: "Green Solutions Co., Ltd.",
    details: {
      overview:
        "環境保全活動やエコフレンドリーな生活を支援するモバイルアプリケーションのUIデザインを担当しました。ユーザーが環境に配慮した選択をしやすくなるよう、直感的で魅力的なインターフェースを設計しました。",
      challenge:
        "環境問題という複雑なテーマを、誰にでも使いやすく、かつ継続的に利用したくなるアプリにすることが課題でした。多機能でありながらも情報過多にならない、バランスの取れたUIの実現が求められました。",
      solution:
        "自然をモチーフにした色調と有機的な形状を取り入れながらも、モダンでクリーンなデザイン言語を採用しました。ユーザーの環境貢献度を視覚的に表現するダッシュボードを中心に、段階的に情報を表示するUI構造を設計しました。",
      results:
        "アプリのユーザー獲得目標を20%上回り、アプリストアでの評価も4.8/5.0を達成しました。特にユーザー継続率が業界平均を30%上回り、プロジェクトの大きな成功要因となりました。",
      clientFeedback:
        "複雑な機能を直感的に使えるUIに落とし込んでくれたことで、ユーザーからの高評価を得ることができました。美しいだけでなく、本当に使いやすいデザインを提供してくれました。",
      technologies: ["Figma", "Protopie", "Adobe Illustrator", "User Testing"],
      projectImages: [
        {
          url: "/works/green-app-ui-1.jpg",
          caption: "アプリホーム画面",
        },
        {
          url: "/works/green-app-ui-2.jpg",
          caption: "活動トラッキング機能",
        },
        {
          url: "/works/green-app-ui-3.jpg",
          caption: "コミュニティページ",
        },
      ],
    },
  },
  "able-corp-website": {
    title: "エイブルコーポレーションウェブサイト",
    description: "企業ウェブサイトのリニューアルデザイン",
    image: "/works/able-corp-website.jpg",
    category: "able-corp-website",
    year: "2023",
    client: "Able Corporation",
    details: {
      overview:
        "テクノロジー企業のコーポレートサイトを全面リニューアルしました。ブランドイメージの刷新に合わせて、最新のウェブデザイントレンドを取り入れながらも、企業の信頼性と革新性を表現したデザインを実現しました。",
      challenge:
        "古いウェブサイトからの大幅な改善が求められる中、ブランドの歴史と信頼性を保ちながらも、先進的なイメージを構築することが課題でした。また、複雑な製品情報を分かりやすく伝えつつ、問い合わせ転換率の向上も目標とされました。",
      solution:
        "ミニマリズムを基調としたデザインに、動きのあるインタラクションと大胆なタイポグラフィを組み合わせました。製品情報はビジュアルを中心に階層的に構成し、ユーザーの関心に応じて詳細情報にアクセスできる構造を設計しました。",
      results:
        "サイトのセッション時間が40%増加し、ページごとの離脱率は25%減少しました。問い合わせ数は前年比60%増となり、特に新規顧客からの問い合わせが大幅に増加しました。",
      clientFeedback:
        "新しいウェブサイトは私たちの期待をはるかに超えるものでした。デザインの美しさだけでなく、ビジネス目標の達成に直接貢献する結果を出してくれました。",
      technologies: ["Next.js", "Figma", "GSAP Animation", "Responsive Design"],
      projectImages: [
        {
          url: "/works/able-corp-website-1.jpg",
          caption: "トップページ",
        },
        {
          url: "/works/able-corp-website-2.jpg",
          caption: "製品紹介ページ",
        },
        {
          url: "/works/able-corp-website-3.jpg",
          caption: "お問い合わせページ",
        },
      ],
    },
  },
  "urban-style-branding": {
    title: "アーバンスタイルブランディング",
    description: "都市型ライフスタイルブランドのブランディング",
    image: "/works/urban-style-branding.jpg",
    category: "urban-style-branding",
    year: "2022",
    client: "URBAN Co.",
    details: {
      overview:
        "若者向けの都市型ライフスタイルブランドのブランディングを担当しました。現代の都市生活者のニーズに応える製品ラインナップに合わせて、洗練されたブランドアイデンティティを構築しました。",
      challenge:
        "若年層の消費者に強く訴求しながらも、一過性のトレンドに左右されない持続可能なブランドイメージの構築が課題でした。また、オンラインとオフラインの両方で一貫したブランド体験を提供する必要がありました。",
      solution:
        "モノクロを基調としながらもアクセントカラーを効果的に使用し、都市のエネルギーとミニマルな美学を融合させたデザイン言語を開発しました。すべての接点で一貫したブランドメッセージを伝えるためのガイドラインを作成しました。",
      results:
        "ブランドローンチ後3ヶ月で目標認知度を達成し、SNSでのフォロワー数は予測の2倍に達しました。ターゲット層からの反応が特に良く、ブランドコミュニティの形成に成功しました。",
      clientFeedback:
        "私たちのビジョンを完璧に理解し、それを現代的でありながらも独自性のあるブランドアイデンティティに変換してくれました。市場での反応も非常に良好です。",
      technologies: [
        "Adobe Creative Suite",
        "Brand Strategy",
        "Typography Design",
        "Social Media Templates",
      ],
      projectImages: [
        {
          url: "/works/urban-style-branding-1.jpg",
          caption: "ブランドロゴ展開",
        },
        {
          url: "/works/urban-style-branding-2.jpg",
          caption: "プロモーション素材",
        },
        {
          url: "/works/urban-style-branding-3.jpg",
          caption: "パッケージデザイン",
        },
      ],
    },
  },
  "tech-innovation-website": {
    title: "テックイノベーションウェブサイト",
    description: "テクノロジー企業のウェブサイトデザイン",
    image: "/works/tech-innovation-website.jpg",
    category: "tech-innovation-website",
    year: "2022",
    client: "Tech Innovation Inc.",
    details: {
      overview:
        "革新的なテクノロジー製品を提供する企業のウェブサイトをデザインしました。複雑な技術情報を分かりやすく伝えながらも、視覚的に魅力的なサイトを構築しました。",
      challenge:
        "高度な技術情報を非専門家にも理解しやすく伝えること、そして革新的な企業イメージを視覚的に表現することが課題でした。また、グローバル展開に対応できる柔軟なデザインシステムの構築も求められました。",
      solution:
        "データの可視化と分かりやすいインフォグラフィックスを活用し、複雑な情報を直感的に理解できるようデザインしました。また、モダンなレイアウトとインタラクションを採用し、革新的な企業イメージを強化しました。",
      results:
        "サイトの平均滞在時間が60%増加し、コンバージョン率は前年比35%向上しました。特に技術詳細ページの閲覧数が大幅に増加し、ユーザーの理解度向上に貢献しました。",
      clientFeedback:
        "私たちの複雑な製品を見事に分かりやすく伝えるサイトを作ってくれました。デザインの美しさと情報の明確さの両方を実現したことに大変満足しています。",
      technologies: [
        "React.js",
        "Three.js",
        "Data Visualization",
        "Responsive Web Design",
      ],
      projectImages: [
        {
          url: "/works/tech-innovation-website-1.jpg",
          caption: "ホームページデザイン",
        },
        {
          url: "/works/tech-innovation-website-2.jpg",
          caption: "製品詳細ページ",
        },
        {
          url: "/works/tech-innovation-website-3.jpg",
          caption: "テクノロジー説明セクション",
        },
      ],
    },
  },
  "health-app-ux": {
    title: "ヘルスアプリUX",
    description: "ヘルスケアアプリケーションのUXデザイン",
    image: "/works/health-app-ux.jpg",
    category: "health-app-ux",
    year: "2021",
    client: "Health+ Inc.",
    details: {
      overview:
        "健康管理とフィットネストラッキングのためのアプリケーションのUXデザインを全面的に改善しました。ユーザビリティテストに基づいた改善を行い、より使いやすく効果的なアプリを実現しました。",
      challenge:
        "既存ユーザーの習慣を大きく変えることなく、使いやすさと機能性を向上させることが課題でした。また、多様なユーザー層に対応できる、包括的かつ直感的なインターフェースが求められました。",
      solution:
        "広範なユーザビリティテストを実施し、ユーザーの行動パターンを詳細に分析しました。その結果に基づき、ナビゲーション構造を簡素化し、最も利用頻度の高い機能へのアクセスを最適化しました。",
      results:
        "アプリの使用頻度が25%向上し、継続率は40%改善しました。アプリストアでの評価も3.2から4.7に上昇し、ユーザーからの肯定的なフィードバックが大幅に増加しました。",
      clientFeedback:
        "ユーザー中心のアプローチで、私たちのアプリに新しい命を吹き込んでくれました。数値で測れる成果も出ていますが、何よりユーザーからの前向きなコメントが増えたことに満足しています。",
      technologies: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Figma",
      ],
      projectImages: [
        {
          url: "/works/health-app-ux-1.jpg",
          caption: "UIデザイン改善前後の比較",
        },
        {
          url: "/works/health-app-ux-2.jpg",
          caption: "ユーザーフロー最適化",
        },
        {
          url: "/works/health-app-ux-3.jpg",
          caption: "フィードバック実装プロセス",
        },
      ],
    },
  },
};

export default function CategoryPage({ category }: CategoryPageProps) {
  // カテゴリに対応する作品詳細を取得
  const work = works[category];

  // 存在しない場合は空のコンテンツを表示
  if (!work) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">作品情報が見つかりません</h1>
          <Link href="/works" className="mt-4 inline-block">
            <Button>作品一覧に戻る</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 pt-24 md:pt-32 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-sm text-neutral-500 uppercase tracking-wider">
              {work.client} | {work.year}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {work.title}
            </h1>
            <p className="text-xl text-neutral-700 mb-10">{work.description}</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <img
              src={work.image}
              alt={work.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">プロジェクト概要</h2>
              <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
                {work.details.overview}
              </p>

              <h2 className="text-2xl font-bold mb-6">課題</h2>
              <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
                {work.details.challenge}
              </p>

              <h2 className="text-2xl font-bold mb-6">ソリューション</h2>
              <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
                {work.details.solution}
              </p>

              <h2 className="text-2xl font-bold mb-6">結果</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {work.details.results}
              </p>
            </div>

            <div>
              <div className="bg-neutral-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6">プロジェクト情報</h3>

                <div className="mb-6">
                  <h4 className="text-sm text-neutral-500 mb-2">
                    クライアント
                  </h4>
                  <p className="font-medium">{work.client}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-neutral-500 mb-2">年度</h4>
                  <p className="font-medium">{work.year}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-neutral-500 mb-2">カテゴリー</h4>
                  <p className="font-medium">
                    {categoryMapping[category] || category}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm text-neutral-500 mb-2">使用技術</h4>
                  <ul className="space-y-1">
                    {work.details.technologies.map((tech, index) => (
                      <li key={index} className="font-medium">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {work.details.clientFeedback && (
                <div className="mt-8 bg-black text-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">クライアントの声</h3>
                  <p className="italic leading-relaxed">
                    &ldquo;{work.details.clientFeedback}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            プロジェクトギャラリー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {work.details.projectImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <div className="relative aspect-video w-full">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-neutral-700">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">次のプロジェクト</h2>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            他のプロジェクトやお問い合わせはこちらから
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/works">
              <Button variant="outline" className="min-w-[160px]">
                実績一覧
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-neutral-800 min-w-[160px]">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

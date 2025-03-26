import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Works = () => {
  const works = [
    {
      id: 1,
      title: "ABLE Corp. ウェブサイトリニューアル",
      category: "Webデザイン",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      href: "/works/able-corp-website",
    },
    {
      id: 2,
      title: "GREEN アプリUIデザイン",
      category: "UIデザイン",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
      href: "/works/green-app-ui",
    },
    {
      id: 3,
      title: "Natural Food ブランディング",
      category: "ブランディング",
      image: "https://images.unsplash.com/photo-1475750632132-0e91befbefed",
      href: "/works/natural-food-branding",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50" id="works">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">実績</h2>
          <p className="text-lg text-neutral-600">
            私たちが手がけたプロジェクトの一部をご紹介します。
            クライアントと協力し、ビジネスの成長と成功を支援してきた実績です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link href={work.href} key={work.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-black mb-2">{work.category}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors">
                    {work.title}
                  </h3>
                  <div className="flex items-center mt-4 text-sm text-neutral-600 group-hover:text-black transition-colors">
                    詳細を見る
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/works">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-neutral-100"
            >
              すべての実績を見る
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;

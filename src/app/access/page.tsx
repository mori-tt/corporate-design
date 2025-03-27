import Link from "next/link";
import { Button } from "@/components/ui/button";
import GoogleMapWrapper from "./GoogleMapWrapper";
import { MapPin, Briefcase, Phone } from "lucide-react";

const accessInfo = [
  {
    icon: <MapPin className="text-black" />,
    title: "所在地",
    content: (
      <>
        〒150-0002
        <br />
        東京都渋谷区******
        <br />
        ****ビル1F
      </>
    ),
  },
  {
    icon: <Briefcase className="text-black" />,
    title: "営業時間",
    content: (
      <>
        平日: 9:00 - 18:00
        <br />
        土日祝: 休業
      </>
    ),
  },
  {
    icon: <Phone className="text-black" />,
    title: "お電話",
    content: (
      <>
        03-1234-5678
        <br />
        ※平日9:00-18:00
      </>
    ),
  },
  // {
  //   icon: <Mail className="text-black" />,
  //   title: "メール",
  //   content: "info@designstudio.jp",
  // },
];

const transportationInfo = [
  {
    type: "電車",
    routes: [
      "JR山手線「渋谷駅」ハチ公口より徒歩5分",
      "東京メトロ銀座線「渋谷駅」より徒歩7分",
      "東急田園都市線「渋谷駅」より徒歩8分",
    ],
  },
  {
    type: "バス",
    routes: ["渋谷駅西口バスターミナルより徒歩5分"],
  },
  {
    type: "車",
    routes: [
      "首都高速3号渋谷線「渋谷出口」より5分",
      "近隣にコインパーキングあり",
    ],
  },
];

export const metadata = {
  title: "アクセス | DESIGN STUDIO",
  description:
    "DESIGN STUDIOへのアクセス方法。渋谷駅から徒歩5分の好立地にオフィスを構えています。お気軽にお越しください。",
};

export default function AccessPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">アクセス</h1>
            <p className="text-lg text-neutral-600">
              DESIGN
              STUDIOは、渋谷駅から徒歩5分の好立地にオフィスを構えています。
              打ち合わせやご相談の際は、お気軽にお越しください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">会社情報</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {accessInfo.map((info, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="mr-2">{info.icon}</div>
                        <h3 className="font-semibold">{info.title}</h3>
                      </div>
                      <div className="text-neutral-600 pl-9">
                        {info.content}
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6">交通アクセス</h2>
                {transportationInfo.map((transport, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold mb-2">
                      {transport.type}でお越しの場合
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-600">
                      {transport.routes.map((route, idx) => (
                        <li key={idx} className="mb-1">
                          {route}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="h-full min-h-[400px] bg-neutral-100 rounded-xl overflow-hidden">
                <GoogleMapWrapper />
              </div>
            </div>

            <div className="border-t pt-12 text-center">
              <h2 className="text-2xl font-bold mb-6">お問い合わせ</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
                ご訪問前に事前のご連絡をいただけますと、スムーズにご案内できます。
                お問い合わせやご質問は、下記のボタンからお気軽にご連絡ください。
              </p>
              <Link href="/contact">
                <Button className="bg-black hover:bg-neutral-800">
                  お問い合わせフォーム
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">私たちについて</h3>
            <p className="text-sm text-neutral-600">
              最先端のデザインで企業の成長をサポートします。
              <br />
              大胆なアイデアと緻密な実装で、クライアントの期待を超えるデザインを提供します。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web" className="text-sm hover:text-black">
                  Webデザイン
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="text-sm hover:text-black"
                >
                  ブランディング
                </Link>
              </li>
              <li>
                <Link href="/services/ui" className="text-sm hover:text-black">
                  UI/UXデザイン
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic"
                  className="text-sm hover:text-black"
                >
                  グラフィックデザイン
                </Link>
              </li>
              <li>
                <Link
                  href="/services/motion"
                  className="text-sm hover:text-black"
                >
                  モーションデザイン
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-black">
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-sm hover:text-black">
                  実績
                </Link>
              </li>
              <li>
                <Link href="/access" className="text-sm hover:text-black">
                  アクセス
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-black">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">DESIGN STUDIO</h4>
            <address className="text-sm text-neutral-600 not-italic">
              〒150-0002
              <br />
              東京都渋谷区渋谷＊＊＊＊＊
              <br />
              ＊＊＊ビル1F
              <br />
              <a
                href="tel:+81-3-1234-5678"
                className="hover:text-black mt-2 inline-block"
              >
                03-1234-****
              </a>
            </address>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} DESIGN STUDIO. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-neutral-500 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-neutral-500 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-neutral-500 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

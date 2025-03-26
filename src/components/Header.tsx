"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl flex">
            <img src="/logo.svg" alt="DESIGN STUDIO" width={30} height={30} />
            <span className="ml-2">DESIGN STUDIO</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-12">
            <Link href="/" className="text-sm hover:text-primary">
              ホーム
            </Link>
            <Link href="/services" className="text-sm hover:text-primary">
              サービス
            </Link>
            <Link href="/about" className="text-sm hover:text-primary">
              私たちについて
            </Link>
            <Link href="/works" className="text-sm hover:text-primary">
              実績
            </Link>
            <Link href="/access" className="text-sm hover:text-primary">
              アクセス
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:inline-flex"
              >
                お問い合わせ
              </Button>
            </Link>
            <button
              className="md:hidden cursor-pointer w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;

'use client';

import { useState } from "react";

import HeaderDesktop from "@/components/HeaderDesktop";
import HeaderMobile from "@/components/HeaderMobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    window.open("https://wa.me/5511994997625", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="relative">
      <HeaderDesktop isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} onCTAClick={handleContactClick} />

      <HeaderMobile isMenuOpen={isMenuOpen} onCTAClick={handleContactClick} />
    </header>
  );
}
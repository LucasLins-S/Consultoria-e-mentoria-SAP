'use client';

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

import Button from "@/components/Button";
import Nav from "@/components/Nav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    window.open("https://wa.me/5511994997625", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="relative">
      <div className="
        flex justify-between items-center
        px-6 py-6 
        md:px-20 md:py-15 md:h-18
      ">
        {/* Logo */}
        <Image
          src="/lucas-lins-logo-blue.png"
          alt="Lucas Lins Logo"
          width={160}
          height={40}
          className="h-8 md:h-10 w-auto"
        />

        <div className="hidden md:flex items-center gap-10">
          <Nav firstLinkHighlighted />
        </div>

        <div className="hidden md:block">
          <Button
            className="bg-[#0A6ED1] rounded-md text-white font-extrabold"
            text="Contratar-me"
            onClick={handleContactClick}
          />
        </div>

        <button
          className="md:hidden text-[#0A6ED1] text-2xl z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      <div className={`
        absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 p-8 transition-all duration-300 ease-in-out z-40
        md:hidden
        ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}
      `}>

        <Nav firstLinkHighlighted className="flex-col gap-6 text-center text-lg" />

        <Button
          className="bg-[#0A6ED1] rounded-md text-white font-extrabold w-full py-3"
          text="Contratar-me"
          onClick={handleContactClick}
        />
      </div>
    </header>
  );
}
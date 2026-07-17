'use client';

import { useTranslation } from "react-i18next";

import Image from "next/image";

import Nav from "@/components/Nav";
import Button from "@/components/Button";

import { FaBars, FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

interface HeaderDesktopProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCTAClick: () => void
}

export default function HeaderDesktop({ isMenuOpen, setIsMenuOpen, onCTAClick }: HeaderDesktopProps) {
  const { t } = useTranslation();

  return (
    <div className=" flex justify-between items-center
      px-6 py-6 md:px-12 md:py-15 md:h-18
    ">
      <Image
        src="/lucas-lins-logo-blue.png"
        alt="Lucas Lins Logo"
        width={160} height={40}
        className="h-8 md:h-10 w-auto"
      />

      <div className="hidden md:flex items-center gap-10">
        <Nav firstLinkHighlighted className="gap-8" />
      </div>

      <div className="hidden md:block">
        <Button
          className="bg-[#0A6ED1] rounded-md text-white font-extrabold mr-2 mt-2"
          text={t("header.cta", { defaultValue: "Hire me" })}
          onClick={onCTAClick}
          icon={
            <FaWhatsapp size={24} color="#FFF" />
          }
        />
      </div>

      <button
        className="md:hidden text-[#0A6ED1] text-2xl z-50 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </div>
  );
};

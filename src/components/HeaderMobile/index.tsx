'use client';

import { useTranslation } from "react-i18next";

import Nav from "@/components/Nav";
import Button from "@/components/Button";

interface HeaderMobileProps {
  isMenuOpen: boolean;
  onCTAClick: () => void;
}

export default function HeaderMobile({ isMenuOpen, onCTAClick }: HeaderMobileProps) {
  const { t } = useTranslation();

  return (
    <div className={`
      absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center
      gap-6 p-8 transition-all duration-300 ease-in-out z-40
      md:hidden
      ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}
    `}>

      <Nav firstLinkHighlighted className="flex-col gap-6 text-center text-lg" />

      <Button
        className="bg-[#0A6ED1] rounded-md text-white font-extrabold w-full py-3"
        text={t("header.cta", { defaultValue: "Hire me" })}
        onClick={onCTAClick}
      />
    </div>
  );
};

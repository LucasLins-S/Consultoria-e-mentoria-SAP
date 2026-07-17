'use client';

import { useTranslation } from "react-i18next";

import Language from "@/components/Language";
import Theme from "@/components/Theme";

interface NavProps {
  firstLinkHighlighted?: boolean;
  className?: string;
}

export default function Nav({
  firstLinkHighlighted,
  className = ""
}: NavProps) {

  const { t } = useTranslation();

  return (
    <nav className="flex items-center">
      <ul className={`flex font-bold ${className ? className : "gap-15"}`}>
        <li className={firstLinkHighlighted ? "text-[#0A6ED1] font-extrabold" : ""}>
          {t("nav.home", { defaultValue: "Home" })}
        </li>

        <a href="#portfolio">
          {t("nav.portfolio", { defaultValue: "Portfolio" })}
        </a>

        <a href="#about">
          {t("nav.about", { defaultValue: "About" })}
        </a>

        <a href="#journey">
          {t("nav.journey", { defaultValue: "Journey" })}
        </a>
        <a href="#contact">
          {t("nav.contact", { defaultValue: "Contact" })}
        </a>
      </ul>

      <div className="flex items-center gap-6 ml-10 pl-6 border-l border-zinc-200">
        <Language />
        <Theme />
      </div>
    </nav>
  )
}

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

  const linkHover = "hover:text-[#0A6ED1] dark:hover:text-[#3d9bff] transition-colors duration-200";

  return (
    <nav className="flex items-center">
      <ul className={`flex font-bold items-center text-zinc-800 dark:text-zinc-200 ${className ? className : "gap-15"}`}>

        <li className={firstLinkHighlighted ? "text-[#0A6ED1] dark:text-[#3d9bff] font-extrabold" : linkHover}>
          <span className="cursor-pointer">
            {t("nav.home", { defaultValue: "Home" })}
          </span>
        </li>

        <a href="#portfolio" className={linkHover}>
          {t("nav.portfolio", { defaultValue: "Portfolio" })}
        </a>

        <a href="#about" className={linkHover}>
          {t("nav.about", { defaultValue: "About" })}
        </a>

        <a href="#journey" className={linkHover}>
          {t("nav.journey", { defaultValue: "Journey" })}
        </a>

        <a href="#contact" className={linkHover}>
          {t("nav.contact", { defaultValue: "Contact" })}
        </a>
      </ul>

      <div className="flex items-center gap-6 ml-10 pl-6 border-l border-zinc-200 dark:border-zinc-800">
        <Language />
        <Theme />
      </div>
    </nav>
  )
}

'use client';

import { useTranslation } from "react-i18next";

import Image from "next/image";

import Stats from "@/components/Stats";
import Button from "@/components/Button";
import Social from "@/components/Social";
import HeroImage from "@/components/HeroImage";
import Background from "@/components/Background";

import { FaWhatsapp } from "react-icons/fa6";

export default function Hero() {
  const { t } = useTranslation();

  const handleContactClick = () => {
    window.open("https://wa.me/5511994997625", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="
      flex flex-col md:flex-row justify-between px-6 md:px-16 min-h-[calc(100vh-60px)]
      mb-16 relative 
    ">

      <Background />

      <div className="relative flex flex-col flex-1 items-center md:items-start gap-6 md:mt-10 w-full z-20 order-2 md:order-1">

        <Image
          src="/blue-smoke.png" alt="Blue Smoke"
          width={500} height={500}
          className="pointer-events-none absolute -top-20 left-0 object-cover opacity-10 z-10"
        />

        <div className="flex flex-col mb-2 items-center md:items-start">
          <span className="text-zinc-800">{t("header.greeting", { defaultValue: "Hello, I'm" })}</span>
          <span className="text-zinc-800 font-bold text-3xl">Lucas Lins</span>
        </div>

        <span className="text-3xl md:text-4xl -mt-6 text-[#0A6ED1] font-extrabold">
          {t("header.title", { defaultValue: "SAP Consultor and Mentor" })}
        </span>

        <Social />

        <div className="flex gap-5">
          <Button
            className="rounded-md text-white font-extrabold bg-[#0A6ED1] px-4 py-1"
            text={t("header.cta", { defaultValue: "Hire me" })}
            onClick={handleContactClick}
            icon={<FaWhatsapp size={24} color="#FFF" />}
          />
        </div>

        <Stats />
      </div>

      <HeroImage />
    </section>
  )
}

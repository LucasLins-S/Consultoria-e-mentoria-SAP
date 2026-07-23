"use client";

import { useTranslation } from "react-i18next";

import Button from "@/components/Button";

import { FaWhatsapp } from "react-icons/fa6";

interface CtaCardProps {
  step: {
    year: string;
    title: string;
    subtitle: string;
    content: string;
  };
  Icon: React.ComponentType<{ className?: string }>;
}

export default function CtaCard({ step, Icon }: CtaCardProps) {
  const { t } = useTranslation();

  const handleContactClick = () => {
    window.open("https://wa.me/5511994997625", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative cta-card border-2 border-[#0A6ED1] dark:border-[#3d9bff] rounded-lg p-6 bg-linear-to-br from-[#f0f7ff] via-white to-[#e8f3ff] dark:bg-none dark:bg-zinc-950 dot-connector-left">
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-linear-to-r from-[#0A6ED1] via-[#3d9bff] to-[#0A6ED1]" />
      <span className="absolute -top-3 right-3 bg-[#0A6ED1] dark:bg-[#3d9bff] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {step.year}
      </span>
      <div className="flex justify-center mb-3 mt-1">
        <div className="cta-icon w-12 h-12 rounded-full bg-[#0A6ED1] dark:bg-[#3d9bff] flex items-center justify-center shadow-lg">
          <Icon className="text-white text-xl" />
        </div>
      </div>
      <h3 className="text-center font-bold text-[#0A6ED1] dark:text-[#3d9bff] text-lg mb-1">
        {step.title}
      </h3>
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#0A6ED1] dark:text-[#3d9bff] opacity-60 mb-3">
        {step.subtitle}
      </p>
      <div className="w-12 h-px bg-[#0A6ED1] dark:bg-[#3d9bff] opacity-30 mx-auto mb-4" />
      <p className="text-gray-600 dark:text-zinc-300 text-sm text-center leading-relaxed mb-5">
        {step.content}
      </p>
      <div className="flex justify-center">
        <Button
          className="cta-btn text-white bg-[#0A6ED1] hover:bg-[#0854a0] dark:bg-[#3d9bff] dark:hover:bg-[#5bb0ff] transition-colors duration-200 text-sm font-bold px-6 py-3 rounded-full shadow-md tracking-wide"
          text={t("ctaCard.button", "Accelerate My Career →")}
          onClick={handleContactClick}
          icon={<FaWhatsapp size={24} color="#FFF" />}
        />
      </div>
    </div>
  );
}

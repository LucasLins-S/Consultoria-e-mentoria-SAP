"use client";

import Button from "../Button";

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

  const handleContactClick = () => {
    window.open("https://wa.me/5511994997625", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative cta-card border-2 border-[#0A6ED1] rounded-lg p-6 bg-linear-to-br from-[#f0f7ff] via-white to-[#e8f3ff] dot-connector-left">
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-linear-to-r from-[#0A6ED1] via-[#3d9bff] to-[#0A6ED1]" />
      <span className="absolute -top-3 right-3 bg-[#0A6ED1] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {step.year}
      </span>
      <div className="flex justify-center mb-3 mt-1">
        <div className="cta-icon w-12 h-12 rounded-full bg-[#0A6ED1] flex items-center justify-center shadow-lg">
          <Icon className="text-white text-xl" />
        </div>
      </div>
      <h3 className="text-center font-bold text-[#0A6ED1] text-lg mb-1">
        {step.title}
      </h3>
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#0A6ED1] opacity-60 mb-3">
        {step.subtitle}
      </p>
      <div className="w-12 h-px bg-[#0A6ED1] opacity-30 mx-auto mb-4" />
      <p className="text-gray-600 text-sm text-center leading-relaxed mb-5">
        {step.content}
      </p>
      <div className="flex justify-center">
        <Button
          className="cta-btn text-white text-sm font-bold px-6 py-3 rounded-full shadow-md tracking-wide"
          text="Acelerar Minha Carreira →"
          onClick={handleContactClick}
        />
      </div>
    </div>
  );
}

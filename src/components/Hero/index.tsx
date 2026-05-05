'use client';

// 1. Importamos o componente Image do Next.js
import Image from "next/image";
import Button from "@/components/Button";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

export default function Hero() {
  const handleContactClick = () => {
    window.open("https://wa.me/5511994997625", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="
      flex flex-col md:flex-row justify-between px-6 md:px-20 min-h-[calc(100vh-60px)]
      mb-16 relative
    ">

      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,110,209,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,110,209,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex flex-col flex-1 items-center md:items-start gap-6 md:mt-10 w-full z-20 order-2 md:order-1">

        <Image
          src="/blue-smoke.png"
          alt="Blue Smoke"
          width={500}
          height={500}
          className="pointer-events-none absolute -top-20 left-0 object-cover opacity-10 z-10"
        />

        <div className="flex flex-col mb-2 items-center md:items-start">
          <span className="text-zinc-800">Oi, Eu sou</span>
          <span className="text-zinc-800 font-bold text-2xl">Lucas Lins</span>
        </div>

        <span className="text-3xl md:text-4xl -mt-6 text-[#0A6ED1] font-extrabold">
          Consultor e Mentor SAP
        </span>

        <Social />

        <div className="flex gap-5">
          <Button
            className="rounded-md text-white font-extrabold bg-[#0A6ED1] px-4 py-1"
            text="Contratar-me"
            onClick={handleContactClick}
          />
        </div>

        <Stats />
      </div>

      <div className="w-full scale-85 md:scale-100 md:flex-1 relative flex items-end justify-center md:justify-end h-70 md:h-auto mt-8 md:mt-0 order-1 md:order-2">
        <div
          className="
            absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-0
            bottom-0 md:-bottom-13 w-72 h-72 md:w-115 md:h-115
            bg-[#0A6ED1] rounded-full
          "
        />

        <Image
          src="/foto-lucas-lins-consultor-sap.png"
          alt="Lucas Lins"
          width={600}
          height={800}
          priority={true}
          className="absolute bottom-0 md:-bottom-14
            right-1/2 translate-x-1/2 md:translate-x-0 md:right-8.5
            h-90 md:h-145 w-auto object-contain rounded-b-full z-10
          "
        />
      </div>
    </section>
  )
}
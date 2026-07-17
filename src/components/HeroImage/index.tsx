import Image from "next/image";

export default function HeroImage() {
  return (
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
        width={600} height={800} priority={true}
        className="absolute bottom-0 md:-bottom-14
          right-1/2 translate-x-1/2 md:translate-x-0 md:right-8.5
          h-90 md:h-145 w-auto object-contain rounded-b-full z-10
        "
      />
    </div>
  );
}

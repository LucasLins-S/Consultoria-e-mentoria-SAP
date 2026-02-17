import Button from "../Button";
import Social from "../Social";
import Stats from "../Stats";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between px-6 md:px-20 min-h-[calc(100vh-60px)]">
      
      <div className="flex flex-col flex-1 items-center md:items-start gap-6 md:mt-10 w-full z-20 order-2 md:order-1">

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
            className="bg-[#0A6ED1] rounded-md text-white font-extrabold px-2 py-1 text-nowrap"
            text="Contratar-me"
          />

          <Button
            className="rounded-md text-[#0A6ED1] font-extrabold border border-[#0A6ED1] px-4 py-1"
            text="Baixar Curriculo"
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

        <img
          src="/foto-lucas-lins-consultor-sap.png"
          alt="Lucas Lins"
          className="absolute bottom-0 md:-bottom-14
            right-1/2 translate-x-1/2 md:translate-x-0 md:right-8.5
            h-90 md:h-145 object-contain rounded-b-full z-10
          "
        />
      </div>
    </section> 
  )
}
          
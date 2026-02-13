import Button from "../Button";
import Social from "../Social";
import Stats from "../Stats";

export default function Hero() {
  return (
    <section className="flex justify-between px-20 min-h-[calc(100vh-60px)]">
      <div className="flex flex-col flex-1 gap-6">
        <span className="mt-16">Oi, Eu sou</span>
        <span>Lucas Lins</span>
        <span className="text-4xl -mt-6 text-[#0A6ED1] font-extrabold">
          Consultor e Mentor SAP
        </span>
        <Social />

        <div className="flex gap-5 ">
          <Button
            className="bg-[#0A6ED1] rounded-md text-white font-extrabold"
            text="Contratar-me"
          />

          <Button
            className="rounded-md text-[#0A6ED1] font-extrabold border border-[#0A6ED1]"
            text="Baixar Curriculo"
          />
        </div>

        <Stats />
  
      </div>
      <div className="flex-1 relative flex items-end justify-end">

        {/* Circle (only background) */}
        <div
          className="
            absolute
            right-0
            -bottom-13
            w-115
            h-115
            bg-[#0A6ED1]
            rounded-full
          "
        />

        {/* Image ABOVE the circle */}
        <img
          src="/foto-lucas-lins-consultor-sap.png"
          alt=""
          className="
            absolute
            -bottom-14
            right-8.5
            h-145
            object-contain
            rounded-b-full
            z-10
          "
        />

      </div>

    </section> 
  )
}
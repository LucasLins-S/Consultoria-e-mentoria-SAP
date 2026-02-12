import Social from "../Social";
import Stats from "../Stats";

export default function Hero() {
  return (
    <section className="flex justify-between px-20 min-h-[calc(100vh-60px)]">
      <div className="flex flex-col flex-1 gap-6">
        <span className="mt-16">Oi, Eu sou</span>
        <span>Lucas Lins</span>
        <span className="text-4xl -mt-6">
          Consultor e Mentor SAP
        </span>
        <Social />

        <div className="flex gap-5">
          <button className="bg-blue-200 px-8 py-2 rounded-md cursor-pointer">
            Contratar-me
          </button>
          <button>
            Baixar Curriculo
          </button>
        </div>

        <Stats />
  
      </div>

      <div className="flex-1 relative overflow-hidden">
        {/* Background element */}
        <div
          className="absolute right-0 bottom-0 w-120 h-120 bg-amber-400 rounded-full"
        />
      </div>

    </section> 
  )
}
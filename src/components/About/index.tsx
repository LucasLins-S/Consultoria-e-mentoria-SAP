import Button from "../Button";

export default function About() {
  return (
    <section className="px-20 flex flex-col text-center space-y-4 mt-20">
      <h2>Sobre mim</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <div className="flex flex-1 min-h-screen">

        <div className="flex-1 relative flex items-end">
          <div className="relative w-110 h-130 bg-[#0A6ED1] rounded-t-full rounded-b-lg">

            <img 
              src="/foto-lucas-lins-consultor-sap.png"
              alt="Lucas Lins - Consultor e Mentor SAP"
              title="Consultor e Mentor SAP Lucas Lins"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-155 object-contain"
            />

          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-baseline space-y-6">
          <p className="text-justify">A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.</p>

          <Button
            className="bg-[#0A6ED1] rounded-md text-white font-extrabold"
            text="Baixar Curriculo"
          />
        </div>
      </div>
    </section>
  );
}

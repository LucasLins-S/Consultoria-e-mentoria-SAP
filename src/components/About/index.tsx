import Button from "../Button";

export default function About() {
  return (
    // Ajustei px-20 para px-6 no mobile e md:px-20 no desktop
    <section className="px-6 md:px-20 flex flex-col text-center space-y-4 mt-20">
      <h2>Sobre mim</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <div className="flex flex-1 flex-wrap min-h-screen">
        <div className="hidden md:flex flex-1 relative items-end">
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
          <p className="text-justify flex flex-col gap-1">
            <span>
              Sou Consultor SAP MM com mais de 5 anos de experiência em projetos de implantação e melhorias no SAP S/4HANA e Fiori, atuando em ambientes de alta complexidade nos segmentos de varejo e agronegócio. Minha trajetória começou na operação, liderando logística e gestão de estoques, o que me deu uma visão prática de negócio antes mesmo de entrar para a consultoria.
            </span>
            <span>
              Hoje, uno essa base estratégica com domínio técnico em processos de compras, estoque e fiscal, Localização Brasil (J1BTAX/TAXBRA), dados mestres, Business Partner, Migration Cockpit, Workflow Flexível e integrações críticas entre MM e áreas financeiras. Atuo em projetos Greenfield e Brownfield, além de AMS e suporte em ambientes DEV, QAS e PRD, sempre com foco em performance, organização e resultado real para o cliente.
            </span>
            <span>
              Mais do que configurar sistema, eu traduzo processos em soluções inteligentes. Minha missão é transformar conhecimento técnico em clareza estratégica — tanto para empresas que buscam eficiência quanto para profissionais que desejam construir autoridade no mercado SAP.
            </span>
          </p>

          <Button
            className="bg-[#0A6ED1] rounded-md text-white font-extrabold"
            text="Baixar Curriculo"
          />
        </div>
      </div>
    </section>
  );
}
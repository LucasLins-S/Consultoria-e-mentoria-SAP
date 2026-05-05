"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function About() {

  const handleContactClick = () => {
    window.open("https://wa.me/5511994997625", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="about"
      className="px-6 py-16 md:px-20 flex flex-col text-center space-y-4 mt-20
      bg-purple-50
    ">
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Sobre mim
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Consultoria e Mentoria Especializada SAP S/4HANA
        </p>
      </div>

      <div className="flex flex-1 flex-wrap min-h-screen">
        <div className="hidden md:flex flex-1 relative items-end">
          <div className="relative w-110 h-130 bg-[#0A6ED1] rounded-t-full rounded-b-lg">
            <Image
              src="/foto-lucas-lins-consultor-sap.png"
              alt="Lucas Lins - Consultor e Mentor SAP"
              title="Consultor e Mentor SAP Lucas Lins"
              width={600}
              height={800}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-155 w-auto object-contain"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-baseline space-y-6">
          <p className="text-justify flex flex-col gap-4 text-gray-700 leading-relaxed">
            <span>
              Sou <strong className="text-gray-900">Consultor SAP MM</strong> com mais de 5 anos de experiência em projetos de implantação e melhorias no <strong>SAP S/4HANA e Fiori</strong>, atuando em ambientes de alta complexidade nos segmentos de varejo e agronegócio. Minha trajetória começou na operação, liderando logística e gestão de estoques, o que me deu uma visão prática de negócio antes mesmo de entrar para a consultoria.
            </span>
            <span>
              Hoje, uno essa base estratégica com domínio técnico em processos de compras, estoque e fiscal, <strong>Localização Brasil (J1BTAX/TAXBRA)</strong>, dados mestres, Business Partner, Migration Cockpit, Workflow Flexível e integrações críticas entre MM e áreas financeiras. Atuo em projetos Greenfield e Brownfield, além de AMS e suporte em ambientes DEV, QAS e PRD.
            </span>
            <span>
              Mais do que configurar sistema, eu traduzo processos em soluções inteligentes. Minha missão é transformar conhecimento técnico em clareza estratégica — tanto para empresas que buscam eficiência quanto para profissionais que desejam construir autoridade no mercado SAP.
            </span>
          </p>

          <Button
            className="rounded-md text-white font-extrabold bg-[#0A6ED1] px-4 py-1"
            text="Contratar-me"
            onClick={handleContactClick}
          />
        </div>
      </div>
    </section>
  );
}
'use client';

import { FaBriefcase, FaRocket, FaTools, FaStar, FaHandshake } from 'react-icons/fa';

import TimelineHeader from '@/components/TimelineHeader';
import CtaCard from '@/components/CtaCard';
import TimeLineCardLeft from '@/components/TimeLineCard/Left';
import TimeLineCardRight from '@/components/TimeLineCard/Right';

export default function Timeline() {
  const steps = [
    {
      id: 1,
      title: "A Escola da Vida Real",
      year: "2017-2020",
      icon: FaBriefcase,
      content: "Antes de configurar o sistema, eu vivi o processo. Como Líder de Operações na Dessol, gerenciei estoques, pessoas e o caos do dia a dia logístico. Foi aqui que entendi que um ERP não é apenas software; é o coração da empresa. Essa vivência me deu a visão de negócio que falta em muitos consultores puramente técnicos."
    },
    {
      id: 2,
      title: "A Grande Transição",
      year: "2020-2022",
      icon: FaRocket,
      content: "Decidi que queria mais. Migrei para a consultoria (Bronxs Agro Systems) mergulhando de cabeça no SAP HANA. Aprendi a transformar processos de negócio em configurações de sistema. Dominei Dados Mestres e as complexidades fiscais do Brasil. Foi o início da construção do meu perfil técnico: resiliente e focado em solução."
    },
    {
      id: 3,
      title: "Consultoria de Alta Performance",
      year: "2022-2025",
      icon: FaTools,
      content: "Passando pela AdopTI e Engine Brasil, refinei minha caixa de ferramentas. Não era mais apenas sobre 'fazer funcionar', mas sobre otimizar. Liderei frentes de AMS, suporte crítico e implementações. Aqui, o domínio do Debugging, da Localização Brasil (TAXBRA) e a integração entre compras e fiscal se tornaram minha assinatura."
    },
    {
      id: 4,
      title: "O Jogo de Gente Grande",
      year: "2025-2026",
      icon: FaStar,
      content: "Atuando como Sênior em projetos globais e implementações S/4 HANA e Fiori do zero (Greenfield). Hoje, utilizo ferramentas avançadas como Migration Cockpit e Workflow Flexível para entregar não apenas um sistema, mas uma transformação digital completa para grandes players do mercado."
    },
    {
      id: 5,
      year: "Hoje",
      icon: FaHandshake,
      isCTA: true,
      title: "O Futuro: A Sua Jornada",
      subtitle: "Vou te ensinar o caminho das pedras",
      content: "Eu levei anos decifrando o ecossistema SAP, errando e acertando para chegar onde estou. Você não precisa demorar tanto. Compilei minha experiência de campo, do suporte à implementação Sênior, para guiar você. Vamos construir a sua autoridade no mercado SAP juntos?"
    },
  ];

  return (
    <section id="journey"
      className="px-4 py-16 md:px-20 md:py-20 min-h-screen">
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-48 md:top-0 -translate-x-1/2 w-px h-full bg-[#0A6ED1] opacity-40" />
        {[15, 30, 45, 60, 75].map((pct) => (
          <div
            key={pct}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0A6ED1] opacity-30"
            style={{ top: `${pct}%` }}
          />
        ))}

        <div className="flex flex-col gap-8 md:gap-16">
          <TimelineHeader />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const Icon = step.icon;
            const isCTA = step.isCTA;

            return (
              <div key={step.id} className="relative flex flex-col md:flex-row items-center mb-8 md:mb-0">
                <div className={`w-full md:w-1/2 ${isLeft ? "pl-14 md:pl-0 md:pr-10" : "hidden md:block"}`}>
                  {isLeft && (
                    isCTA ? (
                      <CtaCard step={step} Icon={Icon} />
                    ) : (
                      <TimeLineCardLeft step={step} />
                    )
                  )}
                </div>

                <div
                  className="flex items-center justify-center bg-white rounded-full absolute left-6 md:left-1/2 -translate-x-1/2 border-4 border-[#0A6ED1] w-12 h-12 text-[#0A6ED1] shadow-md timeline-icon-wrap z-10"
                  style={isCTA ? { borderColor: '#0A6ED1', background: '#f0f7ff' } : {}}
                >
                  <Icon className="text-lg" />
                </div>

                <div className={`w-full md:w-1/2 ${!isLeft ? "pl-14 md:pl-10" : "hidden md:block"}`}>
                  {!isLeft && (
                    isCTA ? (
                      <CtaCard step={step} Icon={Icon} />
                    ) : (
                      <TimeLineCardRight step={step} />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
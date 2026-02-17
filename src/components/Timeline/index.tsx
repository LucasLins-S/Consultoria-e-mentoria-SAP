import { FaBriefcase, FaRocket, FaTools, FaStar, FaHandshake } from 'react-icons/fa';

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
      <section className="px-4 py-10 md:px-20 md:py-20 min-h-screen">
        <div className="relative">
          {/* Timeline line */}
          {/* ALTERAÇÃO 1: top-48 no mobile (para não aparecer acima do primeiro card) e md:top-0 no PC */}
          <div className="absolute left-6 md:left-1/2 top-48 md:top-0 -translate-x-1/2 w-px h-full bg-[#0A6ED1] opacity-40" />

          {/* Timeline line decorative dots */}
          {/* ALTERAÇÃO 2: hidden no mobile (some com as bolinhas decorativas na linha) */}
          {[15, 30, 45, 60, 75].map((pct) => (
            <div
              key={pct}
              className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0A6ED1] opacity-30"
              style={{ top: `${pct}%` }}
            />
          ))}

          <div className="flex flex-col gap-8 md:gap-16">
            {/* Timeline header */}
            <div className="relative flex items-center">
              {/* ALTERAÇÃO 3: Removido pl-12 no mobile. Agora é pl-0 para centralizar na tela */}
              <div className="w-full text-center pl-0">
                <div className="rounded-lg p-6 md:p-8 bg-[#F5F6F7] max-w-2xl mx-auto relative z-10">
                  <span className="text-[#0A6ED1] font-semibold tracking-wider uppercase text-xs mb-2 block">
                    Minha Jornada
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Um pouco da minha história
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    De usuário para especialista no sistema <strong>SAP</strong>
                  </p>
                </div>
              </div>
              
              {/* ALTERAÇÃO 4: hidden md:flex (A bolinha do topo do título some no mobile) */}
              <div className="hidden md:flex items-center justify-center bg-[#0A6ED1] rounded-full absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 shadow-md" />
            </div>

            {/* Steps */}
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const Icon = step.icon;
              const isCTA = step.isCTA;

              return (
                // Wrapper: No mobile é coluna (para garantir largura total), no desktop é row
                <div key={step.id} className="relative flex flex-col md:flex-row items-center mb-8 md:mb-0">
                  
                  {/* LADO ESQUERDO (Conteúdo ou Vazio) */}
                  {/* Mobile: Se tiver conteúdo (isLeft), exibe full width com padding. Se for vazio, esconde (hidden). */}
                  {/* Desktop: Mantém comportamento original (w-1/2) */}
                  <div className={`w-full md:w-1/2 ${isLeft ? "pl-14 md:pl-0 md:pr-10" : "hidden md:block"}`}>
                    {isLeft && (
                      isCTA ? (
                        /* ── CTA CARD ── */
                        <div className="relative cta-card border-2 border-[#0A6ED1] rounded-lg p-6 bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f3ff] dot-connector-left">
                          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r from-[#0A6ED1] via-[#3d9bff] to-[#0A6ED1]" />
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
                            <button className="cta-btn text-white text-sm font-bold px-6 py-3 rounded-full shadow-md tracking-wide">
                              Acelerar Minha Carreira →
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* ── REGULAR LEFT CARD ── */
                        <div className="timeline-card border-2 border-[#0A6ED1] p-4 rounded-sm shadow-lg relative dot-connector-left">
                          <span className="absolute -top-3 right-3 bg-[#0A6ED1] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                            {step.year}
                          </span>
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0A6ED1] to-transparent opacity-30 rounded-t-sm" />
                          <div className="pt-1">
                            <h3 className="text-center pb-2 font-bold italic text-[#0A6ED1]">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.content}</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Icon on timeline */}
                  {/* Ajustado para left-6 no mobile para alinhar com a linha */}
                  <div
                    className="flex items-center justify-center bg-white rounded-full absolute left-6 md:left-1/2 -translate-x-1/2 border-4 border-[#0A6ED1] w-12 h-12 text-[#0A6ED1] shadow-md timeline-icon-wrap z-10"
                    style={isCTA ? { borderColor: '#0A6ED1', background: '#f0f7ff' } : {}}
                  >
                    <Icon className="text-lg" />
                  </div>

                  {/* LADO DIREITO (Conteúdo ou Vazio) */}
                  {/* Mobile: Se tiver conteúdo (!isLeft), exibe full width com padding. Se for vazio, esconde. */}
                  <div className={`w-full md:w-1/2 ${!isLeft ? "pl-14 md:pl-10" : "hidden md:block"}`}>
                    {!isLeft && (
                      isCTA ? (
                        /* ── CTA CARD RIGHT ── */
                        <div className="relative cta-card border-2 border-[#0A6ED1] rounded-lg p-6 bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f3ff] dot-connector-right">
                          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r from-[#0A6ED1] via-[#3d9bff] to-[#0A6ED1]" />
                          <span className="absolute -top-3 left-3 bg-[#0A6ED1] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                            {step.year}
                          </span>
                          <div className="flex justify-center mb-3 mt-1">
                            <div className="cta-icon w-12 h-12 rounded-full bg-[#0A6ED1] flex items-center justify-center shadow-lg">
                              <Icon className="text-white text-xl" />
                            </div>
                          </div>
                          <h3 className="text-center font-bold text-[#0A6ED1] text-lg mb-1">{step.title}</h3>
                          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#0A6ED1] opacity-60 mb-3">{step.subtitle}</p>
                          <div className="w-12 h-px bg-[#0A6ED1] opacity-30 mx-auto mb-4" />
                          <p className="text-gray-600 text-sm text-center leading-relaxed mb-5">{step.content}</p>
                          <div className="flex justify-center">
                            <button className="cta-btn text-white text-sm font-bold px-6 py-3 rounded-full shadow-md tracking-wide">
                              Acelerar Minha Carreira →
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* ── REGULAR RIGHT CARD ── */
                        <div className="timeline-card border-2 border-[#0A6ED1] p-4 rounded-sm shadow-lg relative dot-connector-right">
                          <span className="absolute -top-3 left-3 bg-[#0A6ED1] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                            {step.year}
                          </span>
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0A6ED1] to-transparent opacity-30 rounded-t-sm" />
                          <div className="pt-1">
                            <h3 className="text-center pb-2 font-bold italic text-[#0A6ED1]">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.content}</p>
                          </div>
                        </div>
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
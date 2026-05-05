export default function Sidebar({ }) {
  return (
    <div className="bg-[linear-gradient(160deg,#0854A0_0%,#0A6ED1_60%,#1A82E0_100%)] p-[2.5rem_2rem] flex flex-col gap-8 relative overflow-hidden font-['IBM_Plex_Sans',sans-serif]">
      <div className="absolute -bottom-15 -left-15 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/6 pointer-events-none" />

      <div className="relative z-10 inline-flex items-center gap-1.5 bg-white/12 border border-white/20 rounded-full px-3 py-1 font-['IBM_Plex_Mono',monospace] text-[0.65rem] text-white/85 tracking-widest w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-custom-pulse" />
        DISPONÍVEL PARA PROJETOS
      </div>

      <div className="relative z-10">
        <div className="text-[1.75rem] font-bold text-white leading-[1.2] tracking-[-0.3px]">
          Vamos <span className="text-[#00B0F0]">trabalhar</span>
          <br />
          juntos?
        </div>
        <p className="text-[0.82rem] text-white/70 leading-[1.6] font-light mt-3">
          Preencha o formulário e entrarei em contato em até 24 horas com uma proposta personalizada para sua necessidade SAP.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4 mt-auto">
        <div className="flex items-center gap-2.5 text-[0.78rem] text-white/85 font-normal">
          <div className="w-8 h-8 bg-white/10 border border-white/15 rounded-lg flex items-center justify-center shrink-0 text-[0.9rem]">
            📧
          </div>
          <div>
            <div className="font-semibold text-[0.78rem]">E-mail</div>
            <div className="text-white/70 text-[0.72rem]">contato@lucas-lins.com</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 text-[0.78rem] text-white/85 font-normal">
          <div className="w-8 h-8 bg-white/10 border border-white/15 rounded-lg flex items-center justify-center shrink-0 text-[0.9rem]">
            📱
          </div>
          <div>
            <div className="font-semibold text-[0.78rem]">WhatsApp</div>
            <div className="text-white/70 text-[0.72rem]">+55 (11)9 9499 7625</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 text-[0.78rem] text-white/85 font-normal">
          <div className="w-8 h-8 bg-white/10 border border-white/15 rounded-lg flex items-center justify-center shrink-0 text-[0.9rem]">
            📍
          </div>
          <div>
            <div className="font-semibold text-[0.78rem]">Localização</div>
            <div className="text-white/70 text-[0.72rem]">Brasil · Remoto / Presencial</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 h-px bg-white/12 w-full" />

      {/* Response Time */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[0.62rem] text-white/50 tracking-[0.05em]">
          <span>TEMPO DE RESPOSTA</span>
          <div className="flex-1 h-0.5 bg-white/10 rounded-xs overflow-hidden">
            <div className="h-full w-[72%] bg-[linear-gradient(90deg,rgba(255,255,255,0.3),#00B0F0)] rounded-xs origin-left animate-fill-bar" />
          </div>
          <span>~24h</span>
        </div>
      </div>

      <style>{`
        @keyframes customPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        @keyframes fillBar {
          from { width: 0; }
          to { width: 72%; }
        }
        .animate-custom-pulse {
          animation: customPulse 2s ease-in-out infinite;
        }
        .animate-fill-bar {
          animation: fillBar 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
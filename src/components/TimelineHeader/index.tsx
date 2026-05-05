export default function TimelineHeader() {
  return (
    <div className="relative flex items-center">
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
      
      <div className="hidden md:flex items-center justify-center bg-[#0A6ED1] rounded-full absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 shadow-md" />
    </div>
  );
}
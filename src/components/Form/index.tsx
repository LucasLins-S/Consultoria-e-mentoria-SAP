import Field from "../Field";

interface Fieldset {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  colSpan?: number;
}

interface FormData {
  [key: string]: string;
}

interface FormProps {
  fields: Fieldset[];
  services: string[];
  formData: FormData;
  handleChange: (id: string, value: string) => void;
  handleBlur: (id: string) => void;
  isInvalid: any;
  activeField: string | null;
  setActiveField: React.Dispatch<React.SetStateAction<string | null>>;
  formState: "idle" | "sending" | "success" | "error";
  handleSubmit: (e: React.FormEvent) => void;
}

export default function Form({
  fields,
  services,
  formData,
  handleChange,
  handleBlur,
  isInvalid,
  activeField,
  setActiveField,
  formState,
  handleSubmit,
}: FormProps) {
  const isMessageError = isInvalid("message");
  const isMessageActive = activeField === "message";

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.1rem]">
        {fields.map((f) => (
          <Field
            key={f.id}
            fieldset={f}
            formData={formData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isInvalid={isInvalid}
            activeField={activeField}
            setActiveField={setActiveField}
            formState={formState}
          />
        ))}
      </div>


      <div className="flex flex-col gap-1.25 relative mt-[1.1rem]">
        <label className="text-[0.7rem] font-semibold text-[#556B8B] tracking-[0.06em] uppercase flex items-center gap-1 font-['IBM_Plex_Sans',sans-serif]">
          Tipo de Serviço
        </label>
        <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-2">
          {services.map((s) => {
            const isSelected = formData.service === s;
            return (
              <div
                key={s}
                onClick={() => handleChange("service", isSelected ? "" : s)}
                className={`px-2 py-[0.45rem] text-[0.7rem] font-medium border-[1.5px] rounded-md cursor-pointer text-center transition-all duration-180 select-none whitespace-nowrap overflow-hidden text-ellipsis
                ${
                  isSelected
                    ? "bg-[#0A6ED1] text-white border-[#0A6ED1] shadow-[0_2px_8px_rgba(10,110,209,0.25)]"
                    : "text-[#556B8B] bg-[#F5F8FC] border-[#D1E4F5] hover:border-[#0A6ED1] hover:text-[#0A6ED1] hover:bg-[#EBF4FF]"
                }`}
              >
                {s}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-1.25 relative mt-[1.1rem]">
        <label
          className="text-[0.7rem] font-semibold text-[#556B8B] tracking-[0.06em] uppercase flex items-center gap-1 font-['IBM_Plex_Sans',sans-serif]"
          htmlFor="message"
        >
          Mensagem <span className="text-[#0A6ED1] text-[0.7rem]">*</span>
        </label>
        <textarea
          id="message"
          placeholder="Descreva sua necessidade ou projeto SAP em detalhes..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onFocus={() => setActiveField("message")}
          onBlur={() => {
            setActiveField(null);
            handleBlur("message");
          }}
          className={`w-full px-[0.85rem] py-[0.6rem] font-['IBM_Plex_Sans',sans-serif] text-[0.82rem] text-[#1A2333] border-[1.5px] rounded-md outline-none transition-all duration-200 placeholder:text-[#A8BDD4] placeholder:text-[0.78rem] resize-y min-h-27.5 leading-[1.55]
          ${
            isMessageError
              ? "border-[#BB0000] ring-[3px] ring-[#BB0000]/8 bg-[#F5F8FC]"
              : isMessageActive
              ? "border-[#0A6ED1] bg-white ring-[3px] ring-[#0A6ED1]/10"
              : "border-[#D1E4F5] bg-[#F5F8FC] hover:border-[#A8C8EE] focus:border-[#0A6ED1] focus:bg-white focus:ring-[3px] focus:ring-[#0A6ED1]/10"
          }`}
          disabled={formState === "sending"}
        />
        <span
          className={`text-[0.62rem] text-[#BB0000] font-['IBM_Plex_Mono',monospace] flex items-center gap-1 transition-all duration-200 ${
            isMessageError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
        >
          ▲ Campo obrigatório
        </span>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#D1E4F5] mt-6">
        <div className="text-[0.65rem] text-[#556B8B] font-['IBM_Plex_Mono',monospace] flex items-center gap-1.25 opacity-70">
          🔒 Seus dados são protegidos e não serão compartilhados.
        </div>
        <button
          type="submit"
          disabled={formState === "sending"}
          className="flex items-center gap-2 px-[1.8rem] py-[0.7rem] bg-[#0A6ED1] text-white rounded-[7px] font-['IBM_Plex_Sans',sans-serif] text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 relative overflow-hidden tracking-[0.02em] before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,transparent_100%)] hover:bg-[#0854A0] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(10,110,209,0.35)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
        >
          {formState === "sending" ? (
            <>
              {/* Spinner */}
              <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-[spin_0.7s_linear_infinite]" />
              <span className="relative z-10">Enviando...</span>
            </>
          ) : (
            <>
              <span className="text-[1rem] leading-none relative z-10">→</span>
              <span className="relative z-10">Enviar Mensagem</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
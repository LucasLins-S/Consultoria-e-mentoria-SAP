import { FormState } from "@/types/form";

import { useTranslation } from "react-i18next";

interface TextareaProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange: (value: string, id: string) => void;
  onFocus: (id: string) => void;
  setActiveField: React.Dispatch<React.SetStateAction<string | null>>;
  handleBlur: (id: string) => void;
  isMessageError: boolean;
  isMessageActive: boolean;
  formState: FormState;
}

export default function Textarea({
  label, placeholder, value, onChange, onFocus, setActiveField,
  handleBlur, isMessageError, isMessageActive, formState
}: TextareaProps) {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1.25 relative mt-[1.1rem]">
      <label
        className="text-[0.7rem] font-semibold text-[#556B8B] tracking-[0.06em] uppercase flex items-center gap-1 font-['IBM_Plex_Sans',sans-serif]"
        htmlFor="message"
      >
        {label}
      </label>

      <textarea
        id="message"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value, "message")}
        onFocus={() => onFocus("message")}
        onBlur={() => {
          setActiveField(null);
          handleBlur("message");
        }}
        className={`w-full px-[0.85rem] py-[0.6rem] font-['IBM_Plex_Sans',sans-serif] text-[0.82rem] text-[#1A2333] border-[1.5px] rounded-md outline-none transition-all duration-200 placeholder:text-[#A8BDD4] placeholder:text-[0.78rem] resize-y min-h-27.5 leading-[1.55]
          ${isMessageError
            ? "border-[#BB0000] ring-[3px] ring-[#BB0000]/8 bg-[#F5F8FC]"
            : isMessageActive
              ? "border-[#0A6ED1] bg-white ring-[3px] ring-[#0A6ED1]/10"
              : "border-[#D1E4F5] bg-[#F5F8FC] hover:border-[#A8C8EE] focus:border-[#0A6ED1] focus:bg-white focus:ring-[3px] focus:ring-[#0A6ED1]/10"
          }`}
        disabled={formState === "sending"}
      />

      <span
        className={`text-[0.62rem] text-[#BB0000] font-['IBM_Plex_Mono',monospace] flex items-center gap-1 transition-all duration-200 ${isMessageError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
      >
        ▲ {t("contact.form.requiredField", "Required field")}
      </span>
    </div>
  );
};

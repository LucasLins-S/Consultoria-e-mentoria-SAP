"use client";

import { useTranslation } from "react-i18next";
import type { Fieldset, FormData, FormState } from "@/types/form";

interface FieldProps {
  fieldset: Fieldset;
  formData: FormData;
  handleChange: (id: string, value: string) => void;
  handleBlur: (id: string) => void;
  isInvalid: (id: string) => boolean;
  activeField: string | null;
  setActiveField: React.Dispatch<React.SetStateAction<string | null>>;
  formState: FormState;
}

export default function Field({
  fieldset,
  formData,
  handleChange,
  handleBlur,
  isInvalid,
  activeField,
  setActiveField,
  formState,
}: FieldProps) {
  const { t } = useTranslation();

  const isError = isInvalid(fieldset.id);
  const isActive = activeField === fieldset.id;

  return (
    <div
      key={fieldset.id}
      className={`flex flex-col gap-1.25 relative ${fieldset.colSpan === 2 ? "col-span-2" : ""
        }`}
    >
      <label htmlFor={fieldset.id}
        className="text-[0.7rem] font-bold text-[#334155] tracking-[0.06em] uppercase flex items-center gap-1 font-['IBM_Plex_Sans',sans-serif]"
      >
        {fieldset.label}
        {fieldset.required && <span className="text-[#0A6ED1] text-[0.7rem]">*</span>}
      </label>

      <input
        id={fieldset.id}
        type={fieldset.type}
        placeholder={fieldset.placeholder}
        value={formData[fieldset.id]}
        onChange={(e) => handleChange(fieldset.id, e.target.value)}
        onFocus={() => setActiveField(fieldset.id)}
        onBlur={() => {
          setActiveField(null);
          handleBlur(fieldset.id);
        }}
        className={`w-full px-[0.85rem] py-[0.6rem] font-['IBM_Plex_Sans',sans-serif] text-[0.82rem] text-[#1A2333] border-[1.5px] rounded-md outline-none transition-all duration-200 placeholder:text-[#64748B] placeholder:text-[0.78rem]
        ${isError
            ? "border-[#BB0000] ring-[3px] ring-[#BB0000]/10 bg-[#FEF2F2]"
            : isActive
              ? "border-[#0A6ED1] bg-white ring-[3px] ring-[#0A6ED1]/15"
              : "border-[#94A3B8] bg-[#F8FAFC] hover:border-[#0A6ED1] focus:border-[#0A6ED1] focus:bg-white focus:ring-[3px] focus:ring-[#0A6ED1]/15"
          }`}
        disabled={formState === "sending"}
      />

      <span
        className={`text-[0.62rem] text-[#BB0000] font-['IBM_Plex_Mono',monospace] flex items-center gap-1 transition-all duration-200 ${isError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
      >
        ▲ {t("contact.form.requiredField", "Required field")}
      </span>
    </div>
  );
}

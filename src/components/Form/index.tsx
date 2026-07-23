"use client";

import { useTranslation } from "react-i18next";

import Field from "@/components/Field";
import Textarea from "@/components/Textarea";

import type { Fieldset, FormData } from "@/types/form";

interface FormProps {
  fields: Fieldset[];
  formData: FormData;
  handleChange: (id: string, value: string) => void;
  handleBlur: (id: string) => void;
  isInvalid: (id: string) => boolean;
  activeField: string | null;
  setActiveField: React.Dispatch<React.SetStateAction<string | null>>;
  formState: "idle" | "sending" | "success" | "error";
  handleSubmit: (e: React.FormEvent) => void;
}

export default function Form({
  fields,
  formData,
  handleChange,
  handleBlur,
  isInvalid,
  activeField,
  setActiveField,
  formState,
  handleSubmit,
}: FormProps) {

  const { t } = useTranslation();
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

      <Textarea
        label={t("contact.form.message.label", "Message")}
        placeholder={t("contact.form.message.placeholder", "Describe your SAP need or project in detail...")}
        value={formData.message}
        onChange={handleChange}
        onFocus={() => setActiveField("message")}
        setActiveField={setActiveField}
        handleBlur={handleBlur}
        isMessageError={isMessageError}
        isMessageActive={isMessageActive}
        formState={formState}
      />

      <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#D1E4F5] mt-6">
        <div className="text-[0.65rem] text-[#556B8B] font-['IBM_Plex_Mono',monospace] flex items-center gap-1.25 opacity-70">
          🔒 {t("contact.form.privacy", "Your data is protected and will not be shared.")}
        </div>
        <button
          type="submit"
          disabled={formState === "sending"}
          className="flex items-center gap-2 px-[1.8rem] py-[0.7rem] bg-[#0A6ED1] text-white rounded-[7px] font-['IBM_Plex_Sans',sans-serif] text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 relative overflow-hidden tracking-[0.02em] before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,transparent_100%)] hover:bg-[#0854A0] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(10,110,209,0.35)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
        >
          {formState === "sending" ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-[spin_0.7s_linear_infinite]" />
              <span className="relative z-10">{t("contact.form.button.sending", "Sending...")}</span>
            </>
          ) : (
            <>
              <span className="text-[1rem] leading-none relative z-10">→</span>
              <span className="relative z-10">{t("contact.form.button.send", "Send Message")}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

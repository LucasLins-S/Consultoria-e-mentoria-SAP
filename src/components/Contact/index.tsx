"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Form from "@/components/Form";
import SectionHeader from "@/components/SectionHeader";

type FormState = "idle" | "sending" | "success" | "error";

interface Fieldset {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  colSpan?: number;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Contact() {
  const { t } = useTranslation();

  const fields: Fieldset[] = [
    { id: "name", label: t("contact.fields.name.label", "Full Name"), type: "text", placeholder: t("contact.fields.name.placeholder", "Ex: John Doe"), required: true },
    { id: "company", label: t("contact.fields.company.label", "Company"), type: "text", placeholder: t("contact.fields.company.placeholder", "Ex: Company LTD"), required: false },
    { id: "email", label: t("contact.fields.email.label", "E-mail"), type: "email", placeholder: t("contact.fields.email.placeholder", "contact@company.com"), required: true },
    { id: "phone", label: t("contact.fields.phone.label", "Phone"), type: "tel", placeholder: t("contact.fields.phone.placeholder", "+55 (51) 9 0000-0000"), required: false },
  ];

  const [formData, setFormData] = useState<Record<string, string>>({
    name: "", company: "", email: "", phone: "", message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [activeField, setActiveField] = useState<string | null>(null);
  const { ref, inView } = useInView();

  const handleChange = (id: string, value: string) => setFormData(p => ({ ...p, [id]: value }));
  const handleBlur = (id: string) => setTouched(p => ({ ...p, [id]: true }));

  const isInvalid = (id: string) => touched[id] && fields.find(f => f.id === id)?.required && !formData[id];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = Object.fromEntries([...fields.map(f => f.id), "message"].map(k => [k, true]));
    setTouched(allTouched);
    const hasErrors = fields.filter(f => f.required).some(f => !formData[f.id]) || !formData.message;
    if (hasErrors) return;

    setFormState("sending");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setFormState("error");
    }
  };

  const reset = () => {
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    setTouched({});
    setFormState("idle");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="font-['IBM_Plex_Sans',sans-serif] px-4 py-16 md:px-20 md:py-20 bg-[#F5F8FC] dark:bg-zinc-950 min-h-screen flex flex-col items-center relative overflow-hidden
      before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(10,110,209,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(10,110,209,0.04)_1px,transparent_1px)] before:bg-size-[40px_40px] before:pointer-events-none
      after:content-[''] after:absolute after:-top-30 after:-right-30 after:w-100 after:h-100 after:bg-[radial-gradient(circle,rgba(10,110,209,0.08)_0%,transparent_70%)] after:rounded-full after:pointer-events-none after:animate-orb-float"
    >
      <style>{`
        @keyframes orbFloat {
          from { transform: translate(0, 0); }
          to   { transform: translate(-30px, 40px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        .animate-orb-float {
          animation: orbFloat 8s ease-in-out infinite alternate;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .animate-pop-in {
          animation: popIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center w-full mb-12 text-center relative z-10">
        <SectionHeader
          title={t("contact.title", "Contact")}
          subtitle={t("contact.subtitle", "Let's talk about your SAP project")}
        />
      </div>

      <div
        className={`w-full max-w-3xl relative z-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex flex-col gap-6 relative">
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center gap-[1.2rem] p-8 text-center z-10 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#F0FAF4] border-2 border-[#107E3E] flex items-center justify-center text-[1.8rem] animate-pop-in">
                ✓
              </div>
              <div className="text-[1.1rem] font-bold text-[#1A2333]">
                {t("contact.success.title", "Message sent!")}
              </div>
              <div className="font-['IBM_Plex_Mono',monospace] text-[0.65rem] text-[#107E3E] bg-[#F0FAF4] border border-[#A3D4B8] px-3 py-1 rounded-full tracking-widest">
                MSG-{Date.now().toString(36).toUpperCase()}
              </div>
              <p className="text-[0.85rem] text-[#556B8B] max-w-lg leading-[1.6]">
                {t("contact.success.description", "Thanks for reaching out. I will review your message and reply soon with the best SAP solution for you.")}
              </p>
              <button
                className="px-[1.2rem] py-2 text-[0.8rem] font-semibold font-['IBM_Plex_Sans',sans-serif] text-[#0A6ED1] bg-[#EBF4FF] border-[1.5px] border-[#D1E4F5] rounded-md cursor-pointer transition-all duration-200 hover:bg-[#D6EAF8]"
                onClick={reset}
              >
                {t("contact.success.button", "Send another message")}
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-4 border-b border-[#D1E4F5]">
                <span className="text-[0.65rem] font-['IBM_Plex_Mono',monospace] text-[#556B8B] tracking-[0.12em] uppercase">
                  {t("contact.formHeader.label", "CONTACT FORM")}
                </span>
                <span className="font-['IBM_Plex_Mono',monospace] text-[0.6rem] text-[rgba(10,110,209,0.4)] tracking-[0.08em]">
                  REF: CONTACT_FORM_v2
                </span>
              </div>

              <Form
                fields={fields}
                formData={formData}
                handleChange={handleChange}
                handleBlur={handleBlur}
                isInvalid={isInvalid as (id: string) => boolean}
                activeField={activeField}
                setActiveField={setActiveField}
                formState={formState}
                handleSubmit={handleSubmit}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
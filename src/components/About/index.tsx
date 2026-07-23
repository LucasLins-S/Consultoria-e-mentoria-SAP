"use client";

import Image from "next/image";

import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";

import { useTranslation } from "react-i18next";

import { FaWhatsapp } from "react-icons/fa6";

export default function About() {

  const handleContactClick = () => {
    window.open("https://wa.me/5511994997625", "_blank", "noopener,noreferrer");
  };

  const { t } = useTranslation();

  return (
    <section id="about"
      className="px-6 py-16 md:px-16 flex flex-col text-center space-y-4 mt-20
      bg-white/90 dark:bg-zinc-950
    ">
      <SectionHeader
        title={t('services.title', { defaultValue: "About Me" })}
        subtitle={t('services.subtitle', { defaultValue: "Specialized SAP S/4HANA Consulting and Mentoring." })}
      />

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
              {t('about.first-phrase.part1', 'I am an ')}
              <strong className="text-gray-900">{t('about.first-phrase.strong1', 'SAP MM Consultant')}</strong>
              {t('about.first-phrase.part2', ' with over 5 years of experience in implementation and improvement projects in ')}
              <strong>{t('about.first-phrase.strong2', 'SAP S/4HANA and Fiori')}</strong>
              {t('about.first-phrase.part3', ', working in highly complex environments in the retail and agribusiness sectors. My journey started in operations, leading logistics and inventory management, which gave me a practical business vision even before entering consulting.')}
            </span>
            <span>
              {t('about.second-phrase.part1', 'Today, I combine this strategic foundation with technical mastery in purchasing, inventory and tax processes, ')}
              <strong>{t('about.second-phrase.strong1', 'Brazil Localization (J1BTAX/TAXBRA)')}</strong>
              {t('about.second-phrase.part2', ', master data, Business Partner, Migration Cockpit, Flexible Workflow and critical integrations between MM and financial areas. I work on Greenfield and Brownfield projects, as well as AMS and support in DEV, QAS and PRD environments.')}
            </span>
            <span>
              {t('about.third-phrase', 'More than configuring systems, I translate processes into intelligent solutions. My mission is to transform technical knowledge into strategic clarity — both for companies seeking efficiency and for professionals who want to build authority in the SAP market.')}
            </span>
          </p>

          <Button
            className="rounded-md text-white font-extrabold bg-[#0A6ED1] px-4 py-1"
            text={t('about.cta', { defaultValue: "Hire Me" })}
            onClick={handleContactClick}
            icon={<FaWhatsapp size={24} color="#FFF" />}
          />
        </div>
      </div>
    </section>
  );
}
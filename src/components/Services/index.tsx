'use client';

import { useTranslation } from "react-i18next";

import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";

import {
  HiOutlineRocketLaunch,
  HiOutlineLightBulb,
  HiOutlineCpuChip,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineUsers
} from "react-icons/hi2";

export default function Services() {
  const { t } = useTranslation();

  const sapServices = [
    {
      title: t('services.card1.title', 'S/4HANA Mentoring'),
      description: t('services.card1.description', 'Technical and functional training for transition and implementation of SAP S/4HANA with best practices.'),
      icon: <HiOutlineRocketLaunch size={28} />
    },
    {
      title: t('services.card2.title', 'BTP Consulting'),
      description: t('services.card2.description', 'Development of modern extensions and integrations using SAP Business Technology Platform.'),
      icon: <HiOutlineCpuChip size={28} />
    },
    {
      title: t('services.card3.title', 'Clean Core Architecture'),
      description: t('services.card3.description', 'Strategies to keep your SAP core standardized, facilitating upgrades and reducing technical debt.'),
      icon: <HiOutlineShieldCheck size={28} />
    },
    {
      title: t('services.card4.title', 'Process Optimization'),
      description: t('services.card4.description', 'Analysis and improvement of business flows within standard SAP for maximum operational efficiency.'),
      icon: <HiOutlineLightBulb size={28} />
    },
    {
      title: t('services.card5.title', 'Data Analysis'),
      description: t('services.card5.description', 'Transformation of raw data into strategic insights with SAP Analytics Cloud and Datasphere.'),
      icon: <HiOutlineChartBar size={28} />
    },
    {
      title: t('services.card6.title', 'In-company Training'),
      description: t('services.card6.description', 'Customized programs to raise the knowledge level of your internal IT team.'),
      icon: <HiOutlineUsers size={28} />
    }
  ];

  return (
    <section id="portfolio"
      className="
        px-6 md:px-16 py-16 flex flex-col text-center space-y-12
      "
    >

      <SectionHeader
        title={t('services.title', 'Services & Portfolio SAP')}
        subtitle={t('services.subtitle', 'Strategic solutions and specialized mentoring to transform complex challenges into high-performance results.')}
      />

      <div className="flex flex-wrap gap-6 justify-between">
        {sapServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}

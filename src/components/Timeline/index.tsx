'use client';

import { useTranslation } from 'react-i18next';

import SectionHeader from '@/components/SectionHeader';
import CtaCard from '@/components/CtaCard';
import TimeLineCardLeft from '@/components/TimeLineCard/Left';
import TimeLineCardRight from '@/components/TimeLineCard/Right';

import {
  FaBriefcase,
  FaRocket,
  FaTools,
  FaStar,
  FaHandshake
} from 'react-icons/fa';

export default function Timeline() {
  const { t } = useTranslation();
  const steps = [
    {
      id: 1,
      title: t('timeline.step1.title', 'The Real Life School'),
      year: "2017-2020",
      icon: FaBriefcase,
      content: t('timeline.step1.content', 'Before configuring the system, I lived the process. As Operations Leader at Dessol, I managed inventory, people, and the chaos of daily logistics. It was here that I understood an ERP is not just software; it’s the heart of the company. This experience gave me the business vision that many purely technical consultants lack.')
    },
    {
      id: 2,
      title: t('timeline.step2.title', 'The Great Transition'),
      year: "2020-2022",
      icon: FaRocket,
      content: t('timeline.step2.content', 'I decided I wanted more. I migrated to consulting (Bronxs Agro Systems) diving headfirst into SAP HANA. I learned to transform business processes into system configurations. I mastered Master Data and the tax complexities of Brazil. It was the beginning of building my technical profile: resilient and solution-focused.')
    },
    {
      id: 3,
      title: t('timeline.step3.title', 'High Performance Consulting'),
      year: "2022-2025",
      icon: FaTools,
      content: t('timeline.step3.content', 'Passing through AdopTI and Engine Brasil, I refined my toolbox. It was no longer just about "making it work", but optimizing it. I led AMS fronts, critical support, and implementations. Here, mastering Debugging, Brazil Localization (TAXBRA), and the integration between purchasing and tax became my signature.')
    },
    {
      id: 4,
      title: t('timeline.step4.title', 'The Big Leagues'),
      year: "2025-2026",
      icon: FaStar,
      content: t('timeline.step4.content', 'Working as a Senior on global projects and S/4 HANA and Fiori implementations from scratch (Greenfield). Today, I use advanced tools like Migration Cockpit and Flexible Workflow to deliver not just a system, but a complete digital transformation for major market players.')
    },
    {
      id: 5,
      year: t('timeline.step5.year', 'Today'),
      icon: FaHandshake,
      isCTA: true,
      title: t('timeline.step5.title', 'The Future: Your Journey'),
      subtitle: t('timeline.step5.subtitle', 'I will show you the ropes'),
      content: t('timeline.step5.content', 'It took me years to decipher the SAP ecosystem, making mistakes and getting it right to get where I am. You don’t need to take that long. I’ve compiled my field experience, from support to Senior implementation, to guide you. Shall we build your authority in the SAP market together?')
    },
  ];

  return (
    <section id="journey" className="px-4 py-16 md:px-16 md:py-20 min-h-screen">

      <div className="flex flex-col items-center justify-center w-full mb-16 text-center">
        <SectionHeader
          title={t('timeline.title', 'A bit of my story')}
          subtitle={t('timeline.subtitle', 'From user to expert in the SAP system')}
        />
      </div>

      <div className="relative w-full">

        <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-px h-full bg-[#0A6ED1] opacity-40" />

        {[15, 30, 45, 60, 75].map((pct) => (
          <div
            key={pct}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0A6ED1] opacity-30"
            style={{ top: `${pct}%` }}
          />
        ))}

        <div className="flex flex-col gap-8 md:gap-16">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const Icon = step.icon;
            const isCTA = step.isCTA;

            return (
              <div key={step.id} className="relative flex flex-col md:flex-row items-center mb-8 md:mb-0">
                <div className={`w-full md:w-1/2 ${isLeft ? "pl-14 md:pl-0 md:pr-10" : "hidden md:block"}`}>
                  {isLeft && (
                    isCTA ? (
                      <CtaCard step={step} Icon={Icon} />
                    ) : (
                      <TimeLineCardLeft step={step} />
                    )
                  )}
                </div>

                <div
                  className="flex items-center justify-center bg-white rounded-full absolute left-6 md:left-1/2 -translate-x-1/2 border-4 border-[#0A6ED1] w-12 h-12 text-[#0A6ED1] shadow-md timeline-icon-wrap z-10"
                  style={isCTA ? { borderColor: '#0A6ED1', background: '#f0f7ff' } : {}}
                >
                  <Icon className="text-lg" />
                </div>

                <div className={`w-full md:w-1/2 ${!isLeft ? "pl-14 md:pl-10" : "hidden md:block"}`}>
                  {!isLeft && (
                    isCTA ? (
                      <CtaCard step={step} Icon={Icon} />
                    ) : (
                      <TimeLineCardRight step={step} />
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

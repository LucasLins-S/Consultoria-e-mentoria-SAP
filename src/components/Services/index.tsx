import ServiceCard from "@/components/ServiceCard";
import { HiOutlineRocketLaunch, HiOutlineLightBulb, HiOutlineCpuChip, HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineUsers } from "react-icons/hi2";

const sapServices = [
  {
    title: "Mentoria S/4HANA",
    description: "Capacitação técnica e funcional para transição e implementação do SAP S/4HANA com as melhores práticas.",
    icon: <HiOutlineRocketLaunch size={28} />
  },
  {
    title: "Consultoria BTP",
    description: "Desenvolvimento de extensões e integrações modernas utilizando SAP Business Technology Platform.",
    icon: <HiOutlineCpuChip size={28} />
  },
  {
    title: "Arquitetura Clean Core",
    description: "Estratégias para manter seu core SAP padronizado, facilitando upgrades e reduzindo débitos técnicos.",
    icon: <HiOutlineShieldCheck size={28} />
  },
  {
    title: "Otimização de Processos",
    description: "Análise e melhoria de fluxos de negócio dentro do standard SAP para máxima eficiência operacional.",
    icon: <HiOutlineLightBulb size={28} />
  },
  {
    title: "Análise de Dados",
    description: "Transformação de dados brutos em insights estratégicos com SAP Analytics Cloud e Datasphere.",
    icon: <HiOutlineChartBar size={28} />
  },
  {
    title: "Treinamento In-company",
    description: "Programas personalizados para elevar o nível de conhecimento da sua equipe interna de TI.",
    icon: <HiOutlineUsers size={28} />
  }
];

export default function Services() {
  return (
    <section id="portfolio"
      className="
        px-6 md:px-20 py-16 flex flex-col text-center space-y-12
      "
    >
      <div className="space-y-4">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Serviços & Portfólio SAP
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Soluções estratégicas e mentoria especializada para transformar desafios complexos em resultados de alta performance.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
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
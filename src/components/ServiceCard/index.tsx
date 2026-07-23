import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="
      flex flex-col p-8 rounded-2xl bg-white border border-gray-100
      shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300
      items-start text-left gap-4 w-full md:w-[31%]
    ">
      <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

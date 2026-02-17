export default function Stats() {
  const stats = [
    { value: "+5 anos", label: "Experiência" },
    { value: "+20", label: "Projetos" },
    { value: "+50", label: "Clientes Satisfeitos" },
  ];

  return (
    <div className="
      flex flex-col md:flex-row 
      w-full md:w-auto 
      bg-white 
      rounded-xl 
      shadow-xl 
      mt-8 md:mt-12
      divide-y md:divide-y-0 md:divide-x divide-gray-100
      border border-gray-100
      relative z-20
    ">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center p-6 md:px-10 md:py-6 text-center hover:bg-gray-50 transition-colors duration-300 first:rounded-t-xl md:first:rounded-l-xl md:first:rounded-tr-none last:rounded-b-xl md:last:rounded-r-xl md:last:rounded-bl-none"
        >
          <span className="text-3xl md:text-4xl font-extrabold text-[#0A6ED1] mb-1">
            {stat.value}
          </span>
          <span className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
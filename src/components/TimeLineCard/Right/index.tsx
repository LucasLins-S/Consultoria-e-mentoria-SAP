interface TimeLineCardRightProps {
  step: {
    year: string;
    title: string;
    content: string;
  };
}

export default function TimeLineCardRight({ step }: TimeLineCardRightProps) {
  return (
    <div className="timeline-card border-2 border-[#0A6ED1] p-4 rounded-sm shadow-lg relative dot-connector-right dark:bg-zinc-950">
      <span className="absolute -top-3 left-3 bg-[#0A6ED1] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {step.year}
      </span>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#0A6ED1] to-transparent opacity-30 rounded-t-sm" />
      <div className="pt-1">
        <h3 className="text-center pb-2 font-bold italic text-[#0A6ED1]">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{step.content}</p>
      </div>
    </div>
  );
}
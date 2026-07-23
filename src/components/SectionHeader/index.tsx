interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {

  return (
    <div className="space-y-4">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto text-lg">
        {subtitle}
      </p>
    </div>
  );
}

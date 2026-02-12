export default function Stats() {
  return (
    <div className="flex justify-center w-10/12 bg-gray-200 py-4">
      <div className="flex flex-col px-8 text-left">
        <span>+de 5 anos</span>
        <span>Experiencia</span>
      </div>

      <div className="flex flex-col border-l border-r border-black px-8 text-left">
        <span>+de 20</span>
        <span>Projetos</span>
      </div>

      <div className="flex flex-col px-8 text-left">
        <span>+de 50</span>
        <span>Clientes Satisfeitos</span>
      </div>
    </div>
  );
}
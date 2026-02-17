interface NavProps {
  firstLinkHighlighted?: boolean;
  className?: string;
}

export default function Nav({
  firstLinkHighlighted,
  className = "" // Valor padrão vazio
}: NavProps) {
  return (
    <nav>
      {/* Adicionamos a prop className na ul.
          Se não passar nada, usa o padrão. Se passar, adiciona ao padrão. */}
      <ul className={`flex font-bold ${className ? className : "gap-15"}`}>
        <li className={firstLinkHighlighted ? "text-[#0A6ED1] font-extrabold" : ""}>Inicio</li>
        <li>Serviços</li>
        <li>Sobre mim</li>
        <li>Portfolio</li>
        <li>Contato</li>
      </ul>
    </nav>
  )
}
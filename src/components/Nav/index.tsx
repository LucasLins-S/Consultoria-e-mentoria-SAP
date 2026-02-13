interface NavProps {
  firstLinkHighlighted?: boolean
}

export default function Nav({
  firstLinkHighlighted
}: NavProps) {
  return (
    <nav>
      <ul className="flex gap-15 font-bold">
        <li className={firstLinkHighlighted ? "text-[#0A6ED1] font-extrabold" : ""}>Inicio</li>
        <li>Serviços</li>
        <li>Sobre mim</li>
        <li>Portfolio</li>
        <li>Contato</li>
      </ul>
    </nav>
  )
}
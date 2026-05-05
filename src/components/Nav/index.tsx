interface NavProps {
  firstLinkHighlighted?: boolean;
  className?: string;
}

export default function Nav({
  firstLinkHighlighted,
  className = ""
}: NavProps) {
  return (
    <nav>
      <ul className={`flex font-bold ${className ? className : "gap-15"}`}>
        <li className={firstLinkHighlighted ? "text-[#0A6ED1] font-extrabold" : ""}>Inicio</li>

        <a href="#portfolio">
          <li>Portfólio</li>
        </a>

        <a href="#about">
          <li>Sobre mim</li>
        </a>

        <a href="#journey">
          <li>Minha Trajetória</li>
        </a>
        <a href="#contactForm">
          <li>Contato</li>
        </a>
      </ul>
    </nav>
  )
}
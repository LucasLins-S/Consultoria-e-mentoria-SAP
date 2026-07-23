import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Social() {
  const iconLinkStyle = "text-[#222222] dark:text-zinc-200 hover:text-[#0A6ED1] dark:hover:text-[#3d9bff] transition-colors duration-200";

  return (
    <div className="flex gap-5 items-center z-99">
      <a
        href="https://www.linkedin.com/in/lucas-lins-298715230/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconLinkStyle}
      >
        <FaLinkedin size={28} />
      </a>

      <a
        href="https://wa.me/5511994997625"
        target="_blank"
        rel="noopener noreferrer"
        className={iconLinkStyle}
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}

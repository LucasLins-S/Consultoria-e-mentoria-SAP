import { FaXTwitter, FaSquareInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Social() {
  return (
    <div className="flex gap-5 items-center z-99">
      <a
        href="https://www.linkedin.com/in/lucas-lins-298715230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={28} color="#222222" />
      </a>

      <a
        href="https://wa.me/5511994997625"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} color="#222222" />
      </a>
    </div>
  );
}
import { FaXTwitter, FaSquareInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Social() {
  return (
    <div className="flex gap-5">
      <FaLinkedin size={24} color="#222222"/>

      <FaXTwitter size={24} color="#222222"/>

      <FaWhatsapp size={24} color="#222222"/>

      <FaSquareInstagram size={24} color="#222222"/>
    </div>
  );
}
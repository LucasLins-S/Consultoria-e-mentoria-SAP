'use client';

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importando ícones
import Button from "../Button";
import Nav from "../Nav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="
        flex justify-between items-center
        px-6 py-6 
        md:px-20 md:py-15 md:h-18
      ">
        {/* Logo */}
        <img src="/lucas-lins-logo-blue.png" alt="Lucas Lins Logo"
          className="
            h-8 md:h-10
          "
        />

        {/* --- VERSÃO DESKTOP (Hidden no mobile) --- */}
        <div className="hidden md:flex items-center gap-10">
           {/* Nav Original (Horizontal) */}
           <Nav firstLinkHighlighted/>
        </div>

        <div className="hidden md:block">
           {/* Botão Original */}
           <Button
             className="bg-[#0A6ED1] rounded-md text-white font-extrabold"
             text="Contratar-me"
           />
        </div>

        {/* --- BOTÃO SANDUÍCHE (Mobile Only) --- */}
        <button 
          className="md:hidden text-[#0A6ED1] text-2xl z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* --- MENU MOBILE (Dropdown) --- */}
      {/* Só aparece se isMenuOpen for true */}
      <div className={`
        absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 p-8 transition-all duration-300 ease-in-out z-40
        md:hidden
        ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}
      `}>
        
        {/* Nav Mobile (Vertical) */}
        {/* Passamos flex-col e gap-6 para mudar o layout da lista */}
        <Nav firstLinkHighlighted className="flex-col gap-6 text-center text-lg" />

        {/* Botão Mobile (Full Width opcional) */}
        <Button
          className="bg-[#0A6ED1] rounded-md text-white font-extrabold w-full py-3"
          text="Contratar-me"
        />
      </div>
    </header>
  );
}
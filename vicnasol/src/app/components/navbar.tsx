"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-green-900 to-green-700 opacity-90"
          : "bg-gradient-to-r from-green-900 to-green-700 py-4"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto px-4 py-2">
        <div
          className={`text-white text-3xl font-bold font-cinzel ${
            isScrolled ? "text-2xl" : ""
          }`}
        >
          <Link href="/">VICNASOL</Link>
        </div>
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isMenuOpen ? <HiX /> : <HiMenu />} 
          </button>
        </div>

        <ul
          className={`hidden lg:flex space-x-6 text-white text-xl font-roboto ${
            isScrolled ? "text-[17px] duration-700" : ""
          }`}
        >
          <li className="hover:-translate-y-1 hover:underline">
            <Link href="/pages/Proyectos">Proyectos</Link>
          </li>
          <li className="hover:-translate-y-1 hover:underline">
            <Link href="/About">Servicios</Link>
          </li>
          <li className="hover:-translate-y-1 hover:underline">
            <Link href="/pages/SobreNosotros">Sobre Nosotros</Link>
          </li>
          <li className="hover:-translate-y-1 hover:underline">
            <Link href="/pages/Contacto">Contacto</Link>
          </li>
        </ul>

        {isMenuOpen && (
          <ul className="absolute top-16 right-4 bg-green-700 text-white text-xl font-roboto space-y-4 p-4 rounded-lg lg:hidden">
            <li className="hover:-translate-y-1 hover:underline">
              <Link href="/pages/Proyectos">Proyectos</Link>
            </li>
            <li className="hover:-translate-y-1 hover:underline">
              <Link href="/About">Servicios</Link>
            </li>
            <li className="hover:-translate-y-1 hover:underline">
              <Link href="/pages/SobreNosotros">Sobre Nosotros</Link>
            </li>
            <li className="hover:-translate-y-1 hover:underline">
              <Link href="/pages/Contacto">Contacto</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-all duration-500 ${
        isScrolled ? "bg-gradient-to-r from-green-900 to-green-700 opacity-90" : "bg-gradient-to-r from-green-900 to-green-700 py-4"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto px-4 py-2">
        <div className={`text-white text-3xl font-bold font-cinzel ${isScrolled ? "text-2xl" : ""}`}>
          <Link href="/">
            VICNASOL
          </Link>
        </div>
        <ul className={`flex space-x-6 text-white text-xl font-roboto ${isScrolled ? "text-[17px] duration-700" : ""}`}>
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
      </div>
    </nav>
  );
}

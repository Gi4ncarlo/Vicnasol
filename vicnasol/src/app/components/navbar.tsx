"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function VicnasolNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const servicios = [
    { id: 1, titulo: "Poda Profesional", link: "Poda" },
    { id: 2, titulo: "Plantación y Siembra", link: "PlantacionYSiembra" },
    { id: 3, titulo: "Diseño de Jardines", link: "DisenioDeJardines" },
    { id: 4, titulo: "Mantenimiento de Piscinas", link: "MantenimientoPiscinas" },
    { id: 5, titulo: "Sistemas de Riego", link: "Riego" },
    { id: 6, titulo: "Jardinería Ornamental", link: "JardineriaOrnamental" },
    { id: 7, titulo: "Mantenimiento de Jardines", link: "MantenimientoJardines" },
    { id: 8, titulo: "Ejecución de obras y Proyectos", link: "Obras" },
    { id: 9, titulo: "Control de Plagas y Sanidad", link: "Plagas" },
  ]

  // useEffect(() => {
  //   function handleClickOutside(event : any) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setDropdownOpen(false)
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [])

  return (
    <nav className="bg-green-800 text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-2xl font-bold text-white">
            VICNASOL
          </Link>
        </div>

        {/* Botón menú hamburguesa (mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navegación desktop */}
        <div className="hidden lg:flex space-x-6 items-center relative">
          <Link
            href="/pages/Proyectos"
            className="hover:text-gray-200 transition"
          >
            Proyectos
          </Link>

          {/* Dropdown Servicios */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              className="hover:text-gray-200 transition focus:outline-none"
            >
              Servicios ▾
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black  rounded-md shadow-lg z-50 w-64 max-h-96 overflow-y-auto">
                {servicios.map((servicio) => (
                  <Link
                    key={servicio.id}
                    href={`/pages/Servicios/${servicio.link}`}
                    className="block px-4 py-2 hover:bg-gray-400 transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    {servicio.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pages/SobreNosotros"
            className="hover:text-gray-200 transition"
          >
            Sobre Nosotros
          </Link>

          <Link
            href="/pages/Contacto"
            className="bg-white text-green-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Contacto
          </Link>
        </div>
      </div>

      {/* Menú mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white text-green-900 shadow-md rounded-b-md z-40">
          <div className="flex flex-col py-2 px-4 space-y-1">
            <Link
              href="/pages/Proyectos"
              className="py-2 px-2 rounded hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Proyectos
            </Link>

            {/* Dropdown Servicios en mobile */}
            <div>
              <button
                className="py-2 px-2 rounded hover:bg-gray-100 transition cursor-pointer font-semibold w-full text-left"
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                Servicios ▾
              </button>
              {servicesOpen && (
                <div className="pl-4">
                  {servicios.map((servicio) => (
                    <Link
                      key={servicio.id}
                      href={`/pages/Servicios/${servicio.link}`}
                      className="block py-2 px-2 rounded hover:bg-gray-100 transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      {servicio.titulo}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pages/SobreNosotros"
              className="py-2 px-2 rounded hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>

            <Link
              href="/pages/Contacto"
              className="bg-green-800 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-900 transition mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

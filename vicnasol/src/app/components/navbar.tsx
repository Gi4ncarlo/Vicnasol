"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function VicnasolNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-green-800 text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-2xl font-bold text-white">
            VICNASOL
          </Link>
        </div>

        {/* Navegación */}
        <div className="flex space-x-6 items-center relative">
          <Link href="/pages/Proyectos" className="hover:text-gray-200 transition">
            Proyectos
          </Link>

          {/* Dropdown Servicios */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(prev => !prev)}
              className="hover:text-gray-200 transition focus:outline-none"
            >
              Servicios ▾
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-50 w-64 max-h-96 overflow-y-auto">
                {servicios.map(servicio => (
                  <Link
                    key={servicio.id}
                    href={`/pages/Servicios/${servicio.link}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {servicio.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pages/SobreNosotros" className="hover:text-gray-200 transition">
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
    </nav>
  )
}

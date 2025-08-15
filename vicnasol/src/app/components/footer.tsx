import Link from "next/link";
import { TreePine } from "lucide-react";

export default function Footer() {
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
  ];

  const columna1 = servicios.slice(0, 5);
  const columna2 = servicios.slice(5);

  return (
<footer className="bg-gray-900 text-white w-full py-10 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 max-w-7xl mx-auto">
      
      {/* Logo y descripción */}
      <div>
        <div className="flex items-center justify-center mb-10">
          <TreePine className="h-6 w-6 text-green-500" />
          <h3 className="text-lg font-bold">Vicnasol</h3>
        </div>
        <p className="text-gray-400 text-center lg:text-left">
          Expertos en jardinería y paisajismo con más de 10 años de experiencia.
        </p>
      </div>

      {/* Servicios */}
      <div className="lg:w-[500px]">
        <h4 className="font-semibold mb-10 text-center">Servicio</h4>
        <div className="grid grid-cols-2 gap-x-10 text-gray-400">
          <ul className="space-y-3 mx-auto">
            {columna1.map(servicio => (
              <li key={servicio.id} className="whitespace-nowrap text-sm lg:text-base">
                <Link
                  href={`/pages/Servicios/${servicio.link}`}
                  className="hover:text-green-500 transition"
                >
                  {servicio.titulo}
                </Link>
              </li>
            ))}
          </ul>
            <ul className="space-y-3 px-4">
            {columna2.map(servicio => (
              <li
              key={servicio.id}
              className="break-words whitespace-normal text-sm lg:text-base"
              >
              <Link
                href={`/pages/Servicios/${servicio.link}`}
                className="hover:text-green-500 transition"
              >
                {servicio.titulo}
              </Link>
              </li>
            ))}
            </ul>
        </div>
      </div>

      {/* Contacto */}
      <div>
        <h4 className="font-semibold mb-10 px-12 text-center">Contacto</h4>
        <ul className="px-12 space-y-3 text-gray-400 text-center lg:text-right">
          <li>+598 94 476 398</li>
          <li>vicnasol@hotmail.com</li>
        </ul>
      </div>
    </div>

    {/* Línea divisoria */}
    <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
      <p>&copy; 2024 Vicnasol. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

  );
}

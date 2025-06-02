import Link from "next/link";
import Image from "next/image";
import { TreePine } from "lucide-react";

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TreePine className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-bold">Vicnasol</h3>
              </div>
              <p className="text-gray-400">Expertos en jardinería y paisajismo con más de 10 años de experiencia.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Podadura</li>
                <li>Plantación</li>
                <li>Diseño de Jardines</li>
                <li>Mantenimiento</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+598 94 476 398</li>
                <li>vicnasol@hotmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horarios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lun - Vie: 8:00 - 16:00</li>
                <li>Sábado: 8:00 - 14:00</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vicnasol. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  
  );
}

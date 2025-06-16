"use client";

import {
  Calendar,
  MapPin,
  Leaf,
  Droplets,
  Sun,
  Users,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const proyectos = [
  {
    id: 1,
    titulo: "Jardín Mediterráneo Residencial",
    descripcion:
      "Transformación completa de un patio trasero en un oasis mediterráneo con plantas autóctonas, sistema de riego por goteo y área de descanso.",
    ubicacion: "Las Rozas, Madrid",
    fecha: "Marzo 2024",
    duracion: "3 semanas",
    area: "120 m²",
    tipo: "Residencial",
    servicios: [
      "Diseño paisajístico",
      "Sistema de riego",
      "Plantación",
      "Iluminación",
    ],
    caracteristicas: [
      "Plantas resistentes a la sequía",
      "Sistema de riego automatizado",
      "Pérgola de madera natural",
      "Caminos de piedra natural",
    ],
    cliente: "Familia González",
    presupuesto: "€8,500",
  },
  {
    id: 2,
    titulo: "Terraza Verde Corporativa",
    descripcion:
      "Creación de un espacio verde en la azotea de oficinas corporativas, incluyendo huerto urbano y zona de relajación para empleados.",
    ubicacion: "Centro de Madrid",
    fecha: "Enero 2024",
    duracion: "4 semanas",
    area: "200 m²",
    tipo: "Corporativo",
    servicios: [
      "Huerto urbano",
      "Jardinería vertical",
      "Mobiliario exterior",
      "Mantenimiento",
    ],
    caracteristicas: [
      "Huerto urbano productivo",
      "Jardín vertical de 15m²",
      "Zona de compostaje",
      "Área de descanso con bancos",
    ],
    cliente: "Tech Solutions S.L.",
    presupuesto: "€15,000",
  },
  {
    id: 3,
    titulo: "Jardín Zen Minimalista",
    descripcion:
      "Diseño de un jardín zen con elementos minimalistas, fuente de agua, bambú y espacios de meditación en una vivienda unifamiliar.",
    ubicacion: "Pozuelo de Alarcón",
    fecha: "Noviembre 2023",
    duracion: "2 semanas",
    area: "80 m²",
    tipo: "Residencial",
    servicios: [
      "Diseño zen",
      "Fuente de agua",
      "Plantación especializada",
      "Decoración",
    ],
    caracteristicas: [
      "Fuente de agua natural",
      "Bambú y plantas zen",
      "Caminos de grava japonesa",
      "Área de meditación",
    ],
    cliente: "Sr. Yamamoto",
    presupuesto: "€6,200",
  },
  {
    id: 4,
    titulo: "Parque Comunitario Sostenible",
    descripcion:
      "Renovación completa de un parque comunitario con enfoque en sostenibilidad, plantas nativas y espacios recreativos para todas las edades.",
    ubicacion: "Alcorcón, Madrid",
    fecha: "Septiembre 2023",
    duracion: "8 semanas",
    area: "1,500 m²",
    tipo: "Público",
    servicios: [
      "Paisajismo público",
      "Juegos infantiles",
      "Senderos",
      "Iluminación LED",
    ],
    caracteristicas: [
      "100% plantas nativas",
      "Área de juegos inclusiva",
      "Senderos accesibles",
      "Iluminación solar LED",
    ],
    cliente: "Ayuntamiento de Alcorcón",
    presupuesto: "€45,000",
  },
  {
    id: 5,
    titulo: "Jardín Vertical Interior",
    descripcion:
      "Instalación de un impresionante jardín vertical en el lobby de un hotel boutique, mejorando la calidad del aire y la estética del espacio.",
    ubicacion: "Salamanca, Madrid",
    fecha: "Agosto 2023",
    duracion: "1 semana",
    area: "25 m²",
    tipo: "Comercial",
    servicios: [
      "Jardín vertical",
      "Sistema hidropónico",
      "Iluminación LED",
      "Mantenimiento",
    ],
    caracteristicas: [
      "Sistema hidropónico automatizado",
      "50+ especies de plantas",
      "Iluminación LED especializada",
      "Purificación natural del aire",
    ],
    cliente: "Hotel Boutique Salamanca",
    presupuesto: "€12,000",
  },
  {
    id: 6,
    titulo: "Restauración de Jardín Histórico",
    descripcion:
      "Restauración cuidadosa de un jardín histórico del siglo XIX, respetando el diseño original mientras se incorporan técnicas modernas de conservación.",
    ubicacion: "Aranjuez, Madrid",
    fecha: "Mayo 2023",
    duracion: "12 semanas",
    area: "800 m²",
    tipo: "Patrimonial",
    servicios: [
      "Restauración histórica",
      "Conservación",
      "Investigación botánica",
      "Documentación",
    ],
    caracteristicas: [
      "Especies históricas recuperadas",
      "Técnicas de conservación avanzadas",
      "Documentación fotográfica completa",
      "Respeto al diseño original",
    ],
    cliente: "Fundación Patrimonio Histórico",
    presupuesto: "€35,000",
  },
];

export default function ProyectosDestacados() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Leaf className="h-8 w-8 text-green-600" />
                Proyectos Destacados
              </h1>
              <p className="text-gray-600 mt-2">
                Descubre nuestros trabajos más exitosos en jardinería y
                paisajismo
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="h-full flex flex-col bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 border"
            >
              <div className="relative">
                <Image
                  src={proyecto.imagen || "/images/prueba.jpg"}
                  alt={proyecto.titulo}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-xs py-1 px-2 rounded-xl text-white font-[400]">
                  {proyecto.tipo}
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-between p-5">
                <div>
                  <h2 className="text-xl mb-2 font-bold">{proyecto.titulo}</h2>
                  <p className="text-base leading-relaxed text-gray-400">
                    {proyecto.descripcion}
                  </p>
                </div>

                <div className="mt-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>{proyecto.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span>{proyecto.fecha}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-green-600" />
                      <span>{proyecto.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>{proyecto.duracion}</span>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-600" />
                      Servicios Realizados
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.servicios.map((servicio, index) => (
                        <div
                          key={index}
                          className="text-xs border rounded-full py-1 px-2 font-bold"
                        >
                          {servicio}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Características Destacadas
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {proyecto.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr />

                  <div className="text-sm">
                    <span className="text-gray-500">Cliente: </span>
                    <span className="font-medium">{proyecto.cliente}</span>
                  </div>
                </div>

                <button className="mt-6 w-full gap-2 bg-green-600 hover:bg-green-700 flex items-center justify-center text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                  Ver Proyecto Completo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Cada jardín es único y merece un diseño personalizado. Contacta con
            nosotros para crear el espacio verde de tus sueños.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <Link href="/pages/Contacto">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Solicitar Presupuesto Gratuito
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

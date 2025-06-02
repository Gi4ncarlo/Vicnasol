import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Scissors, Sprout, PenTool, Waves, Droplets, TreePine, Flower, Phone, Mail } from "lucide-react"
  
  export default function ServiciosPage() {
  const servicios = [
    {
      id: 1,
      titulo: "Podadura Profesional",
      descripcion: "Podadura especializada de árboles, arbustos y setos para mantener la salud y forma de tus plantas.",
      icon: Scissors,
      caracteristicas: ["Podadura de formación", "Podadura de mantenimiento", "Eliminación de ramas secas"],
      color: "bg-green-50 border-green-200",
    },
    {
      id: 2,
      titulo: "Plantación y Siembra",
      descripcion: "Selección y plantación de especies adecuadas para tu clima y tipo de suelo.",
      icon: Sprout,
      caracteristicas: ["Análisis de suelo", "Selección de plantas", "Plantación profesional"],
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      id: 3,
      titulo: "Diseño de Jardines",
      descripcion: "Creamos el jardín de tus sueños con diseños personalizados y maquetación profesional.",
      icon: PenTool,
      caracteristicas: ["Diseño 3D", "Planos detallados", "Selección de materiales"],
      color: "bg-green-50 border-green-200",
    },
    {
      id: 4,
      titulo: "Mantenimiento de Piscinas",
      descripcion: "Limpieza, mantenimiento y paisajismo alrededor de tu área de piscina.",
      icon: Waves,
      caracteristicas: ["Limpieza regular", "Control químico", "Paisajismo acuático"],
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      id: 5,
      titulo: "Sistemas de Riego",
      descripcion: "Instalación y mantenimiento de sistemas de riego automático y por goteo.",
      icon: Droplets,
      caracteristicas: ["Riego automático", "Riego por goteo", "Programación inteligente"],
      color: "bg-green-50 border-green-200",
    },
    {
      id: 6,
      titulo: "Jardinería Ornamental",
      descripcion: "Creación de espacios verdes decorativos con plantas ornamentales y flores de temporada.",
      icon: Flower,
      caracteristicas: ["Plantas ornamentales", "Flores de temporada", "Arreglos decorativos"],
      color: "bg-emerald-50 border-emerald-200",
    },
  ]
  
  return (
<div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
  {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros Servicios de
            <span className="text-green-600 block">Jardinería</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transformamos tus espacios verdes con servicios profesionales de jardinería. Desde el diseño hasta el
            mantenimiento, cuidamos cada detalle de tu jardín.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/Contacto">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Phone className="mr-2 h-4 w-4" />
              Solicitar Cotización
            </Button>
            </Link>
            <Link href="/pages/Proyectos">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Ver Proyectos
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué Servicios Ofrecemos?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con un equipo de expertos en jardinería listos para hacer realidad tus proyectos verdes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => {
              const IconComponent = servicio.icon
              return (
                <Card
                  key={servicio.id}
                  className={`${servicio.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{servicio.titulo}</CardTitle>
                    <CardDescription className="text-gray-600">{servicio.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {servicio.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Más Información</Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      </div>
  )
}
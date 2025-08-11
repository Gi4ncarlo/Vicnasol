import Image from "next/image"
import { Leaf, Users, Award, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

export default function AboutUs() {
const services = [
  "Poda Profesional",
  "Plantación y Siembra",
  "Diseño de Jardines",
  "Mantenimiento de Piscinas",
  "Sistemas de Riego",
  "Jardinería Ornamental",
  "Mantenimiento de Jardines",
  "Ejecucion de obras y Proyectos",
  "Control de Plagas y Sanidad de plantas y cesped",
];

  const stats = [
    { number: "20+", label: "Años de Experiencia" },
    { number: "19", label: "Departamentos" },
    { number: "100%", label: "Satisfacción" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Leaf className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Quiénes Somos</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Transformamos espacios verdes con más de 20 años de experiencia en servicios medioambientales
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Más de dos décadas cultivando confianza</h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  <strong>Vicnasol</strong> es una empresa de servicios medioambientales con más de 20 años de
                  experiencia, ubicada en Carrasco, Montevideo y Ciudad de la Costa, Uruguay. Nos especializamos en
                  todas las labores de jardinería, ofreciendo soluciones a medida para satisfacer las necesidades tanto
                  de personas como de empresas que buscan un servicio de calidad.
                </p>
                <p>
                  Contamos con un equipo altamente cualificado, quienes le asesorarán y guiarán en
                  cada etapa de su proyecto, asegurando que cada detalle sea perfecto.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Equipo de jardinería trabajando"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <Award className="w-8 h-8 mb-2" />
                <div className="font-bold">Calidad</div>
                <div className="text-sm">Garantizada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-xl">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="text-6xl text-green-600 mb-6"></div>
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic leading-relaxed mb-8">
                  En Vicnasol, hacemos que sus ideas se materialicen. Desde el primer encuentro hasta el final de cada
                  proyecto, ponemos todo nuestro empeño para que no se escape ni un solo detalle.
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-1 bg-green-600"></div>
                  <Leaf className="w-6 h-6 text-green-600" />
                  <div className="w-12 h-1 bg-green-600"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Servicios Integrales de Jardinería</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios de mantenimiento de jardines para empresas, comunidades de
              propietarios y particulares, mejorando la imagen corporativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Image Gallery */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Trabajo</h2>
            <p className="text-xl text-gray-600">Algunos ejemplos de nuestros proyectos realizados</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Trabajador podando setos"
                width={400}
                height={400}
                className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Poda Profesional</h3>
                  <p className="text-sm">Mantenimiento especializado</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Diseño paisajístico"
                width={400}
                height={400}
                className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Diseño Paisajístico</h3>
                  <p className="text-sm">Espacios únicos y funcionales</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Jardín de rosas"
                width={400}
                height={400}
                className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Jardines Ornamentales</h3>
                  <p className="text-sm">Belleza y color todo el año</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Nuestro Compromiso</h2>
                  <p className="text-xl leading-relaxed">
                    En <strong>Vicnasol</strong>, nuestro objetivo es proporcionar un servicio integral y de alta
                    calidad, asegurando la satisfacción de nuestros clientes y el cuidado del medio ambiente. Nos
                    enorgullecemos de nuestra trayectoria y de la confianza que nuestros clientes han depositado en
                    nosotros a lo largo de los años.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

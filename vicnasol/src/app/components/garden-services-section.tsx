import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, PenToolIcon as Tool } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"

export default function GardenServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f8f5e6] to-[#F5F5DC]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-[#e6eed8] rounded-full mb-4">
            <Leaf className="h-6 w-6 text-[#5a8c42]" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#3c5a2d] md:text-4xl/tight">
            Nuestros Servicios de Jardinería
          </h2>
          <p className="mt-4 text-muted-foreground text-[#6b7d5e] max-w-[700px]">
            Transformamos espacios verdes con dedicación y experiencia, cuidando cada detalle para crear jardines
            hermosos y sostenibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Service Card 1 */}
          <Card className="overflow-hidden border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/placeholder.svg?height=224&width=400"
                width={400}
                height={224}
                alt="Paisajismo"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3c5a2d]/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 bg-[#f8b951] text-[#3c5a2d] font-medium px-3 py-1 rounded-full text-sm">
                Paisajismo
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#3c5a2d] mb-2">Diseño de Paisajes</h3>
              <p className="text-[#6b7d5e] mb-4">
                Experiencia en paisajismo y organización de jardines, creando espacios armoniosos y funcionales.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#5a8c42] font-medium hover:text-[#3c5a2d] transition-colors"
              >
                Conocer más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Service Card 2 */}
          <Card className="overflow-hidden border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/placeholder.svg?height=224&width=400"
                width={400}
                height={224}
                alt="Mantenimiento de jardines"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3c5a2d]/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 bg-[#f8b951] text-[#3c5a2d] font-medium px-3 py-1 rounded-full text-sm">
                Mantenimiento
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#3c5a2d] mb-2">Mantenimiento de Jardines</h3>
              <p className="text-[#6b7d5e] mb-4">
                Cuadrilla especializada en mantenimiento de jardines, garantizando el cuidado óptimo de sus espacios
                verdes.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#5a8c42] font-medium hover:text-[#3c5a2d] transition-colors"
              >
                Conocer más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Service Card 3 */}
          <Card className="overflow-hidden border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/placeholder.svg?height=224&width=400"
                width={400}
                height={224}
                alt="Canteros"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3c5a2d]/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 bg-[#f8b951] text-[#3c5a2d] font-medium px-3 py-1 rounded-full text-sm">
                Canteros
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#3c5a2d] mb-2">Diseño de Canteros</h3>
              <p className="text-[#6b7d5e] mb-4">
                Creación y personalización de canteros, añadiendo belleza y estructura a su jardín con diseños únicos.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#5a8c42] font-medium hover:text-[#3c5a2d] transition-colors"
              >
                Conocer más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
         <div className="flex justify-center">
          <div className="bg-[#e6eed8] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#3c5a2d] mb-4 flex items-center">
              <span className="h-8 w-8 rounded-full bg-[#5a8c42] text-white flex items-center justify-center mr-3 text-sm">
                1
              </span>
              Proyectos
            </h3>
            <p className="text-[#6b7d5e] mb-6">
              Aquí podrás encontrar trabajos previos y ejemplos de nuestros proyectos de paisajismo y jardinería.
            </p>
            <Link href="/pages/Proyectos" className="text-[#5a8c42] hover:text-[#3c5a2d] transition-colors"><Button className="bg-[#5a8c42] hover:bg-[#3c5a2d] text-white">Ver Proyectos </Button></Link> 
          </div>
          </div>
      </div>
    </section>
  )
}

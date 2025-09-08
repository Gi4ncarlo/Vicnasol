import { notFound } from "next/navigation";
import { servicios } from "@/app/Data/services";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ServicioPage({ params }) {
  const { slug } = params;

  const servicio = servicios.find((s) => s.slug === slug);

  if (!servicio) return notFound();

  const IconComponent = servicio.icon;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <IconComponent className="h-10 w-10 text-green-600" />
          <h1 className="text-3xl font-bold">{servicio.titulo}</h1>
        </div>
        <p className="text-lg mb-6">{servicio.descripcionLarga}</p>
        <ul className="list-disc pl-5 space-y-2">
          {servicio.caracteristicas.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div> */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="">
            <Image
              src={servicio.banner}
              alt="Diseño de jardín profesional"
              fill
              className="object-cover brightness-[0.4] w-full h-full"
              priority
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl text-white ml-10">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                {servicio.titulo}
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                {servicio.descripcionCorta}
              </p>
              <div className="flex flex-col sm:flex-row gap-4"></div>
            </div>
          </div>
        </section>

        {/* Descripción del Servicio */}
        <section className="py-16 bg-white p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  ¿Qué incluye nuestro servicio?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {servicio.descripcionLarga}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        {servicio.keyPoints[0]}
                      </h3>
                      <p className="text-muted-foreground">
                        Analizamos su espacio, estilo de vida y preferencias
                        para crear un diseño único.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        {servicio.keyPoints[1]}
                      </h3>
                      <p className="text-muted-foreground">
                        Visualice su futuro jardín con renderizados realistas
                        antes de la implementación.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        {servicio.keyPoints[2]}
                      </h3>
                      <p className="text-muted-foreground">
                        Elegimos especies adaptadas al clima local para
                        garantizar un jardín sostenible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        {servicio.keyPoints[3]}
                      </h3>
                      <p className="text-muted-foreground">
                        Nos encargamos de toda la construcción, plantación e
                        instalación de elementos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={servicio.imgPortada}
                  alt="Proceso de diseño de jardín"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Proceso paso a paso */}
        <section className="py-16 bg-gray-50 p-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Nuestro proceso de trabajo
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Seguimos un proceso estructurado y transparente para asegurar
                que su jardín supere todas sus expectativas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Paso 1 */}
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Consulta inicial</h3>
                <p className="text-muted-foreground">
                  Visitamos su propiedad para evaluar el espacio, discutir sus
                  ideas y entender sus necesidades específicas.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Diseño conceptual</h3>
                <p className="text-muted-foreground">
                  Creamos bocetos iniciales y un plan maestro que incorpora
                  todos los elementos deseados.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Presentación 3D</h3>
                <p className="text-muted-foreground">
                  Le mostramos renders fotorrealistas de su futuro jardín para
                  que pueda visualizar el resultado final.
                </p>
              </div>

              {/* Paso 4 */}
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Implementación</h3>
                <p className="text-muted-foreground">
                  Ejecutamos el proyecto con precisión, cuidando cada detalle
                  hasta completar su jardín de ensueño.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de proyectos */}
        <section className="py-16 bg-white p-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Proyectos de diseño realizados
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore algunos de nuestros diseños más destacados y vea cómo
                hemos transformado espacios únicos.
              </p>
            </div>

            {/* Proyecto destacado */}
            <div className="mb-12"></div>

            {/* Galería de imágenes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicio.album.map((imagen,index ) => ( 
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    key={index}
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
              </div>
                ))}

            

            </div>
          </div>
        </section>

        {/* Testimonios específicos */}
        <section className="py-16 bg-gray-50 mx-auto">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Testimonios reales de clientes que han confiado en nosotros para
                el diseño de sus jardines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[900px] md:w-[740px] xl:w-[1200px] mx-auto">
              {servicio.clientes.map((cliente, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={cliente.imagen}
                      alt={cliente.nombre}
                      width={90}
                      height={90}
                      className="rounded-full mr-4"
                    />
                    <div className="grid grid-cols-2 gap-20">
                      <div className="text-gray-800">
                        <h3 className="font-semibold">{cliente.nombre}</h3>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground ">
                          {cliente.estrellas}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{cliente.comentario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

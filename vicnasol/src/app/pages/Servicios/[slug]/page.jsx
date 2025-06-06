import { notFound } from "next/navigation";
import { servicios } from "@/app/Data/services";

export default function ServicioPage({ params }) {
  const { slug } = params;

  const servicio = servicios.find((s) => s.slug === slug);

  if (!servicio) return notFound();

  const IconComponent = servicio.icon;

  return (
    <div className="min-h-screen bg-white p-6 text-gray-800 mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <IconComponent className="h-10 w-10 text-green-600" />
          <h1 className="text-3xl font-bold">{servicio.titulo}</h1>
        </div>
        <p className="text-lg mb-6">{servicio.descripcion}</p>
        <ul className="list-disc pl-5 space-y-2">
          {servicio.caracteristicas.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


import { Scissors, Sprout, PenTool, Waves, Droplets, Flower } from "lucide-react";

export const servicios = [
    {
      id: 1,
      titulo: "Poda Profesional",
      descripcionCorta: "Poda especializada para cuidar la salud y forma de tus plantas." ,
      descripcionLarga: "Ofrecemos un servicio de poda profesional enfocado en mantener la salud, estética y seguridad de árboles, arbustos y setos. Nuestro equipo cuenta con experiencia en técnicas especializadas que permiten moldear el crecimiento de las plantas y evitar enfermedades. Utilizamos herramientas adecuadas y métodos responsables para asegurar resultados duraderos.",
      icon: Scissors,
      caracteristicas: ["Podadura de formación", "Podadura de mantenimiento", "Eliminación de ramas secas"],
      color: "bg-green-50 border-green-200",
      slug: "Poda",
      keyPoints: ["Podadura de formación para orientar el crecimiento.","Mantenimiento estético y funcional de setos y arbustos.","Eliminación de ramas secas o dañadas.","Mejora la seguridad y salud de las plantas."]
    },
    {
      id: 2,
      titulo: "Plantación y Siembra",
      descripcionCorta: "Asesoría y plantación adaptada a tu entorno natural." ,
      descripcionLarga: "Nos encargamos de todo el proceso de plantación, desde el análisis del terreno hasta la selección de especies óptimas para cada ambiente. Diseñamos e implementamos soluciones vegetales adaptadas a las condiciones del suelo y el clima local, logrando resultados armónicos y sostenibles.",
      icon: Sprout,
      caracteristicas: ["Análisis de suelo", "Selección de plantas", "Plantación profesional"],
      color: "bg-emerald-50 border-emerald-200",
      slug: "PlantacionYSiembra",
      keyPoints: ["Estudio y análisis del tipo de suelo.","Selección de plantas adecuadas para el entorno.","Siembra profesional para asegurar un buen enraizamiento.","Asesoría sobre cuidados posteriores."]
    },
    {
      id: 3,
      titulo: "Diseño de Jardines",
      descripcionCorta: "Creamos jardines únicos con diseño profesional personalizado." ,
      descripcionLarga: "Transformamos espacios al aire libre en jardines únicos y funcionales, combinando creatividad, funcionalidad y estética. A través de planos detallados y visualizaciones en 3D, desarrollamos diseños que se ajustan a tus gustos, necesidades y al entorno disponible.",
      icon: PenTool,
      caracteristicas: ["Diseño 3D", "Planos detallados", "Selección de materiales"],
      color: "bg-green-50 border-green-200",
      slug: "DisenioDeJardines",
      keyPoints: ["Representaciones en 3D realistas.","Planificación basada en el uso del espacio.","Selección estética de materiales y plantas.","Diseños sostenibles y adaptables."]
    },
    {
      id: 4,
      titulo: "Mantenimiento de Piscinas",
      descripcionCorta: "Limpieza y cuidado de piscinas y su entorno paisajístico." ,
      descripcionLarga: "Ofrecemos un mantenimiento integral para piscinas, incluyendo limpieza regular, balance químico del agua y mejoras paisajísticas en el entorno. Nuestro objetivo es que disfrutes de un espacio limpio, seguro y visualmente atractivo durante todo el año.",
      icon: Waves,
      caracteristicas: ["Limpieza regular", "Control químico", "Paisajismo acuático"],
      color: "bg-emerald-50 border-emerald-200",
      slug: "MantenimientoPiscinas",
      keyPoints: ["Limpieza constante del agua y filtros.","Control y equilibrio de químicos.","Mantenimiento del entorno verde alrededor.","Asesoría en temporada de uso intensivo."]
    },
    {
      id: 5,
      titulo: "Sistemas de Riego",
      descripcionCorta: "Instalación de sistemas de riego automatizados y eficientes." ,
      descripcionLarga: "Diseñamos e instalamos sistemas de riego automatizados que garantizan un uso eficiente del agua. Nuestro enfoque se basa en adaptar el sistema a las necesidades específicas del jardín o cultivo, optimizando el consumo y promoviendo el crecimiento saludable de las plantas.",
      icon: Droplets,
      caracteristicas: ["Riego automático", "Riego por goteo", "Programación inteligente"],
      color: "bg-green-50 border-green-200",
      slug: "Riego",
      keyPoints: ["Riego automático personalizado por zonas.","Sistemas de goteo para ahorro de agua.","Programadores inteligentes para cada temporada.","Mantenimiento preventivo y correctivo."]
    },
    {
      id: 6,
      titulo: "Jardinería Ornamental",
      descripcionCorta: "Decoración natural con plantas ornamentales y flores." ,
      descripcionLarga: "Creamos espacios visualmente atractivos mediante la selección y disposición estratégica de plantas ornamentales y flores de temporada. Este servicio está orientado a mejorar el valor estético de tu hogar o empresa, aportando color, frescura y armonía.",
      icon: Flower,
      caracteristicas: ["Plantas ornamentales", "Flores de temporada", "Arreglos decorativos"],
      color: "bg-emerald-50 border-emerald-200",
      slug: "JardineriaOrnamental",
      keyPoints: ["Selección de flores y plantas según estación.","Armonía visual con el entorno.","Diseños florales personalizados.","Mantenimiento y renovación periódica."]
    },
    {
      id: 7,
      titulo: "Mantenimiento de Jardines",
      descripcionCorta: "Cuidado completo y continuo para tu jardín." ,
      descripcionLarga: "Ofrecemos un servicio de mantenimiento continuo para conservar el aspecto y la salud de tu jardín. Incluye poda, limpieza, fertilización y revisión de sistemas de riego. Nuestro equipo se asegura de que tu espacio verde se mantenga impecable todo el año.",
      icon: Flower,
      caracteristicas: ["Plantas ornamentales", "Flores de temporada", "Arreglos decorativos"],
      color: "bg-emerald-50 border-emerald-200",
      slug: "MantenimientoJardines",
      keyPoints: ["Poda y limpieza regular de áreas verdes.","Fertilización y control de malezas.","Revisión del sistema de riego.","Mantenimiento personalizado según estación."]
    },
    {
      id: 8,
      titulo: "Ejecucion de obras y Proyectos",
      descripcionCorta: "Ejecución integral de proyectos de paisajismo personalizados." ,
      descripcionLarga: "Realizamos la ejecución de proyectos paisajísticos de principio a fin, desde la planificación hasta la implementación. Coordinamos todos los aspectos técnicos, estéticos y funcionales para transformar tu espacio en un entorno verde atractivo y duradero.",
      icon: Flower,
      caracteristicas: ["Plantas ornamentales", "Flores de temporada", "Arreglos decorativos"],
      color: "bg-emerald-50 border-emerald-200",
      slug: "Obras",
      keyPoints: ["Coordinación de equipos y tareas.","Cumplimiento de plazos y presupuesto.","Materiales de calidad y diseño funcional.","Supervisión constante y ajustes a medida."]
    },
    {
      id: 9,
      titulo: "Control de Plagas y Sanidad de plantas y cesped",
      descripcionCorta: "Protección profesional contra plagas y enfermedades en tu jardín." ,
      descripcionLarga: "Ofrecemos tratamientos eficaces para el control de plagas y enfermedades en plantas ornamentales, árboles y césped. Nuestros métodos son seguros para el entorno, y están diseñados para prevenir y erradicar problemas fitosanitarios sin afectar el equilibrio del jardín.",
      icon: Flower,
      caracteristicas: ["Plantas ornamentales", "Flores de temporada", "Arreglos decorativos"],
      color: "bg-emerald-50 border-emerald-200",
      slug: "Plagas",
      keyPoints: ["Detección temprana de plagas.","Aplicación de productos fitosanitarios seguros.","Tratamientos específicos para cada planta.","Prevención y asesoría en sanidad vegetal."]
    },
  ]
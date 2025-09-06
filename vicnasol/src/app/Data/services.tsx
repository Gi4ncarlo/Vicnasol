import { Scissors, Sprout, PenTool, Waves, Droplets, Flower } from "lucide-react";

export const servicios = [
    {
      id: 1,
      titulo: "Poda Profesional",
      descripcionCorta:
        "Poda especializada para cuidar la salud y forma de tus plantas.",
      descripcionLarga:
        "Ofrecemos un servicio de poda profesional enfocado en mantener la salud, estética y seguridad de árboles, arbustos y setos. Nuestro equipo cuenta con experiencia en técnicas especializadas que permiten moldear el crecimiento de las plantas y evitar enfermedades. Utilizamos herramientas adecuadas y métodos responsables para asegurar resultados duraderos.",
      icon: Scissors,
      caracteristicas: [
        "Podadura de formación",
        "Podadura de mantenimiento",
        "Eliminación de ramas secas",
      ],
      color: "bg-green-50 border-green-200",
      slug: "Poda",
      keyPoints: [
        "Podadura de formación para orientar el crecimiento.",
        "Mantenimiento estético y funcional de setos y arbustos.",
        "Eliminación de ramas secas o dañadas.",
        "Mejora la seguridad y salud de las plantas.",
      ],
      clientes: [
        {
          nombre: "Pepe Lopez",
          estrellas: "⭐⭐⭐⭐",
          comentario: "Muy bueno",
          fecha: "2024",
          imagen: "/images/Persona3.webp",
        },
        {
          nombre: "Ana Lopez",
          estrellas: "⭐⭐⭐⭐",
          comentario: "Muy bueno",
          fecha: "2024",
           imagen: "/images/Persona4.webp",
        },
      ],
      banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],

    },
    {
      id: 2,
      titulo: "Plantación y Siembra",
      descripcionCorta: "Asesoría y plantación adaptada a tu entorno natural.",
      descripcionLarga:
        "Nos encargamos de todo el proceso de plantación, desde el análisis del terreno hasta la selección de especies óptimas para cada ambiente. Diseñamos e implementamos soluciones vegetales adaptadas a las condiciones del suelo y el clima local, logrando resultados armónicos y sostenibles.",
      icon: Sprout,
      caracteristicas: [
        "Análisis de suelo",
        "Selección de plantas",
        "Plantación profesional",
      ],
      color: "bg-emerald-50 border-emerald-200",
      slug: "PlantacionYSiembra",
      keyPoints: [
        "Estudio y análisis del tipo de suelo.",
        "Selección de plantas adecuadas para el entorno.",
        "Siembra profesional para asegurar un buen enraizamiento.",
        "Asesoría sobre cuidados posteriores.",
      ],
      clientes: [
        {
          nombre: "Laura Martínez",
          estrellas: "⭐⭐⭐⭐⭐",
          comentario:
            "El servicio de poda fue excelente, dejaron mis arbustos impecables.",
          fecha: "2023",
          imagen: `/images/Persona1.webp`,
        },
        {
          nombre: "Carlos Gómez",
          estrellas: "⭐⭐⭐⭐",
          comentario: "Muy profesionales y puntuales. Recomendado.",
          fecha: "2024",
          imagen: "/images/Persona3.webp",
        },
      ],
     banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],
    },
    {
      id: 3,
      titulo: "Diseño de Jardines",
      descripcionCorta:
        "Creamos jardines únicos con diseño profesional personalizado.",
      descripcionLarga:
        "Transformamos espacios al aire libre en jardines únicos y funcionales, combinando creatividad, funcionalidad y estética. A través de planos detallados y visualizaciones en 3D, desarrollamos diseños que se ajustan a tus gustos, necesidades y al entorno disponible.",
      icon: PenTool,
      caracteristicas: [
        "Diseño 3D",
        "Planos detallados",
        "Selección de materiales",
      ],
      color: "bg-green-50 border-green-200",
      slug: "DisenioDeJardines",
      keyPoints: [
        "Representaciones en 3D realistas.",
        "Planificación basada en el uso del espacio.",
        "Selección estética de materiales y plantas.",
        "Diseños sostenibles y adaptables.",
      ],
      clientes: [
        {
          nombre: "María López",
          estrellas: "⭐⭐⭐⭐⭐",
          comentario:
            "Quedé encantada con las flores que me recomendaron, todo floreció perfecto.",
          fecha: "2024",
          imagen: `/images/Persona4.webp`,
        },
        {
          nombre: "José Hernández",
          estrellas: "⭐⭐⭐",
          comentario:
            "El trabajo fue correcto, aunque tardaron un poco más de lo previsto.",
          fecha: "2023",
          imagen: "/images/Persona2.webp",
        },
      ],
     banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],
    },
    {
      id: 4,
      titulo: "Mantenimiento de Piscinas",
      descripcionCorta:
        "Limpieza y cuidado de piscinas y su entorno paisajístico.",
      descripcionLarga:
        "Ofrecemos un mantenimiento integral para piscinas, incluyendo limpieza regular, balance químico del agua y mejoras paisajísticas en el entorno. Nuestro objetivo es que disfrutes de un espacio limpio, seguro y visualmente atractivo durante todo el año.",
      icon: Waves,
      caracteristicas: [
        "Limpieza regular",
        "Control químico",
        "Paisajismo acuático",
      ],
      color: "bg-emerald-50 border-emerald-200",
      slug: "MantenimientoPiscinas",
      keyPoints: [
        "Limpieza constante del agua y filtros.",
        "Control y equilibrio de químicos.",
        "Mantenimiento del entorno verde alrededor.",
        "Asesoría en temporada de uso intensivo.",
      ],
      clientes: [
        {
          nombre: "Andrea Ríos",
          estrellas: "⭐⭐⭐⭐⭐",
          comentario: "El diseño fue justo lo que imaginaba. ¡Muy creativos!",
          fecha: "2022",
          imagen: `/images/Persona1.webp`,
        },
        {
          nombre: "Luis Castillo",
          estrellas: "⭐⭐⭐⭐",
          comentario:
            "El jardín cambió completamente, se nota el trabajo profesional.",
          fecha: "2023",
          imagen: `/images/Persona2.webp`,
        },
      ],
     banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],
    },
    {
      id: 5,
      titulo: "Sistemas de Riego",
      descripcionCorta:
        "Instalación de sistemas de riego automatizados y eficientes.",
      descripcionLarga:
        "Diseñamos e instalamos sistemas de riego automatizados que garantizan un uso eficiente del agua. Nuestro enfoque se basa en adaptar el sistema a las necesidades específicas del jardín o cultivo, optimizando el consumo y promoviendo el crecimiento saludable de las plantas.",
      icon: Droplets,
      caracteristicas: [
        "Riego automático",
        "Riego por goteo",
        "Programación inteligente",
      ],
      color: "bg-green-50 border-green-200",
      slug: "Riego",
      keyPoints: [
        "Riego automático personalizado por zonas.",
        "Sistemas de goteo para ahorro de agua.",
        "Programadores inteligentes para cada temporada.",
        "Mantenimiento preventivo y correctivo.",
      ],
      clientes: [
      {
        nombre: "Beatriz Salinas",
        estrellas: "⭐⭐⭐⭐⭐",
        comentario: "Mi piscina quedó como nueva. Muy atentos al detalle.",
        fecha: "2024"
      },
      {
        nombre: "Sergio Paredes",
        estrellas: "⭐⭐⭐⭐",
        comentario: "Buen trabajo y buena disposición. ¡Gracias!",
        fecha: "2023"
      }
    ],
     banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],
    },
    {
      id: 6,
      titulo: "Jardinería Ornamental",
      descripcionCorta: "Decoración natural con plantas ornamentales y flores.",
      descripcionLarga:
        "Creamos espacios visualmente atractivos mediante la selección y disposición estratégica de plantas ornamentales y flores de temporada. Este servicio está orientado a mejorar el valor estético de tu hogar o empresa, aportando color, frescura y armonía.",
      icon: Flower,
      caracteristicas: [
        "Plantas ornamentales",
        "Flores de temporada",
        "Arreglos decorativos",
      ],
      color: "bg-emerald-50 border-emerald-200",
      slug: "JardineriaOrnamental",
      keyPoints: [
        "Selección de flores y plantas según estación.",
        "Armonía visual con el entorno.",
        "Diseños florales personalizados.",
        "Mantenimiento y renovación periódica.",
      ],
      clientes: [
      {
        nombre: "Natalia Vázquez",
        estrellas: "⭐⭐⭐⭐⭐",
        comentario: "Desde que instalaron el sistema, ahorro mucha agua.",
        fecha: "2024"
      },
      {
        nombre: "Eduardo Lara",
        estrellas: "⭐⭐⭐",
        comentario: "El sistema funciona bien, aunque tuve que llamar para ajustar los horarios.",
        fecha: "2022"
      }
    ],
     banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],
    },
    {
      id: 7,
      titulo: "Mantenimiento de Jardines",
      descripcionCorta: "Cuidado completo y continuo para tu jardín.",
      descripcionLarga:
        "Ofrecemos un servicio de mantenimiento continuo para conservar el aspecto y la salud de tu jardín. Incluye poda, limpieza, fertilización y revisión de sistemas de riego. Nuestro equipo se asegura de que tu espacio verde se mantenga impecable todo el año.",
      icon: Flower,
      caracteristicas: [
        "Plantas ornamentales",
        "Flores de temporada",
        "Arreglos decorativos",
      ],
      color: "bg-emerald-50 border-emerald-200",
      slug: "MantenimientoJardines",
      keyPoints: [
        "Poda y limpieza regular de áreas verdes.",
        "Fertilización y control de malezas.",
        "Revisión del sistema de riego.",
        "Mantenimiento personalizado según estación.",
      ],
      clientes: [
        {
          nombre: "Martin Lopez",
          estrellas: "⭐⭐⭐⭐",
          comentario: "Muy buen servicio, mi jardín luce espectacular.",
          fecha: "2024",
        },
        {
          nombre: "Ana Torres",
          estrellas: "⭐⭐⭐⭐",
          comentario: "Excelente atención y dedicación al detalle.",
          fecha: "2024",
        },
      ],
      banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],
    },
    {
      id: 8,
      titulo: "Ejecucion de obras y Proyectos",
      descripcionCorta:
        "Ejecución integral de proyectos de paisajismo personalizados.",
      descripcionLarga:
        "Realizamos la ejecución de proyectos paisajísticos de principio a fin, desde la planificación hasta la implementación. Coordinamos todos los aspectos técnicos, estéticos y funcionales para transformar tu espacio en un entorno verde atractivo y duradero.",
      icon: Flower,
      caracteristicas: [
        "Plantas ornamentales",
        "Flores de temporada",
        "Arreglos decorativos",
      ],
      color: "bg-emerald-50 border-emerald-200",
      slug: "Obras",
      keyPoints: [
        "Coordinación de equipos y tareas.",
        "Cumplimiento de plazos y presupuesto.",
        "Materiales de calidad y diseño funcional.",
        "Supervisión constante y ajustes a medida.",
      ],
      clientes: [
        {
          nombre: "Juan Pérez",
          estrellas: "⭐⭐⭐",
          comentario: "El proyecto fue bien ejecutado, aunque hubo algunos retrasos.",
          fecha: "2024",
        },
        {
          nombre: "Lucía Fernández",
          estrellas: "⭐⭐⭐⭐",
          comentario: "El equipo fue muy profesional y cumplió con lo prometido.",
          fecha: "2024",
        },
      ],
     banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],
    },
    {
      id: 9,
      titulo: "Control de Plagas y Sanidad de plantas y cesped",
      descripcionCorta:
        "Protección profesional contra plagas y enfermedades en tu jardín.",
      descripcionLarga:
        "Ofrecemos tratamientos eficaces para el control de plagas y enfermedades en plantas ornamentales, árboles y césped. Nuestros métodos son seguros para el entorno, y están diseñados para prevenir y erradicar problemas fitosanitarios sin afectar el equilibrio del jardín.",
      icon: Flower,
      caracteristicas: [
        "Plantas ornamentales",
        "Flores de temporada",
        "Arreglos decorativos",
      ],
      color: "bg-emerald-50 border-emerald-200",
      slug: "Plagas",
      keyPoints: [
        "Detección temprana de plagas.",
        "Aplicación de productos fitosanitarios seguros.",
        "Tratamientos específicos para cada planta.",
        "Prevención y asesoría en sanidad vegetal.",
      ],
      clientes: [
        {
          nombre: "Carlos Ramírez",
          estrellas: "⭐⭐⭐⭐",
          comentario: "El control de plagas fue efectivo, mi jardín está sano y bonito.",
          fecha: "2024",
        },
        {
          nombre: "Sofía Martínez",
          estrellas: "⭐⭐⭐⭐⭐",
          comentario: "El servicio fue excelente, me ayudaron a identificar y tratar las plagas rápidamente.",
          fecha: "2024",
        },
      ],
      banner: "/images/entrada.jpg",
      imgPortada : "/images/rosas.jpg",
      album: [
        "/images/112.jpg",
        "/images/Trabajador.jpg",
        "/images/entrada.jpg",
      ],
    },
  ];

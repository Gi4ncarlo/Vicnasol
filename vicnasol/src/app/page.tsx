"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Button } from "@/app/components/ui/button";
import { Phone, Mail, Shield, Shield as Tool } from "lucide-react";
import ServicePage from "@/app/components/ServicePage";

const Home = () => {
  return (
    <main className="bg-[#EDEADE] text-[#2f4f2f]">
      {/* HERO */}
      <section className="relative h-screen bg-black">
        <Image
          src="/images/FondoPrinci.jpeg"
          alt="Jardinería Vicnasol"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VICNASOL</h1>
          <p className="text-lg md:text-2xl">
            Transformamos espacios verdes con pasión
          </p>
          <a
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("servicios");
              if (section) {
                console.log("Scrolling to servicios section", section);
                section.scrollIntoView({ behavior: "smooth", block: "start" }); // 'start' o 'center'
              }
            }}
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded text-white cursor-pointer"
          >
            Conoce nuestros servicios
          </a>
        </div>
      </section>
      <div id="servicios" >
      <ServicePage />

      </div>

      {/* CARRUSEL */}
      <section
        className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 lg:mb-16"
        
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Algunos de nuestros Proyectos
          </h2>
          <Swiper
            loop={true}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-[500px] lg:w-[1200px] rounded-lg mx-auto"
          >
            {[
              "/images/rosas.jpg",
              "/images/112.jpg",
              "/images/entrada.jpg",
            ].map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Proyecto ${idx + 1}`}
                    fill
                    className="object-cover h-[500px] w-[1200px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-[#EDEADE]">
        {/* Values Section */}
        <div className="relative bg-[#3c5a2d]/10 rounded-2xl p-8 mb-16">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#064E3B] text-[#F9FAFB] font-bold px-6 py-2 rounded-full">
            Nuestros Valores
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl">
              <div className="h-16 w-16 rounded-full bg-[#e6eed8] flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#5a8c42]" />
              </div>
              <h3 className="text-lg font-bold text-[#3c5a2d] mb-2">
                Compromiso
              </h3>
              <p className="text-[#6b7d5e]">
                Nos destacamos por nuestro compromiso con la calidad y
                satisfacción del cliente.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl">
              <div className="h-16 w-16 rounded-full bg-[#e6eed8] flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#5a8c42]" />
              </div>
              <h3 className="text-lg font-bold text-[#3c5a2d] mb-2">
                Confiabilidad
              </h3>
              <p className="text-[#6b7d5e]">
                Brindamos servicios confiables y puntuales, respetando tiempos y
                acuerdos.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl">
              <div className="h-16 w-16 rounded-full bg-[#e6eed8] flex items-center justify-center mb-4">
                <Tool className="h-8 w-8 text-[#5a8c42]" />
              </div>
              <h3 className="text-lg font-bold text-[#3c5a2d] mb-2">
                Eficiencia
              </h3>
              <p className="text-[#6b7d5e]">
                Profesionales capacitados que trabajan con eficiencia y atención
                al detalle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#15803D]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para Transformar tu Jardín?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo
            podemos hacer realidad el jardín de tus sueños.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a  href="/pages/Contacto">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600"
            >
              <Phone className="mr-2 h-4 w-4" />
              Llamar Ahora
            </Button>
            </a>
            <a href="/pages/Contacto">

            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600"
            >
              <Mail className="mr-2 h-4 w-4" />
              Enviar Email
            </Button>

            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

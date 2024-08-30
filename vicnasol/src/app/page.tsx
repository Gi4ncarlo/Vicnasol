"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { images } from "../app/lib/images";

//BENTO

import { BentoGridThirdDemo } from "../app/intentoBendo";

//--------

import Link from "next/link";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <main className="bg-green-50">
      {/* <div className="relative w-full h-64 md:h-96 lg:h-[400px] overflow-hidden">
        <Image
          src="/images/fondopagprincipal.jpg"
          alt="Fondo principal"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div> */}
      <section className="py-12 mt-14">
        <div className="container mx-auto">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-96 w-full rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail */}
          <Swiper
            loop={true}
            spaceBetween={12}
            slidesPerView={2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs mt-3 h-32 w-full rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <button className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    className="object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="bg-green-800 grid grid-cols-2 gap-10 max-w-screen-3xl max-h-[800px] mx-auto p-8">
          <div className="bg-white shadow-lg rounded-lg flex flex-col max-h-[600px]">
            <div className="p-4 flex-grow">
              <h1 className="text-3xl font-bold text-green-700 mb-4 font-nunito text-center">
                Empresa Vicnasol de Jardinería
              </h1>

              <p className="mb-4 text-xl font-lato">
                Bienvenido a Vicnasol: Tu Socio en Jardinería En Vicnasol nos
                dedicamos con pasión y dedicación a embellecer y mantener tus
                espacios verdes. Con años de experiencia en el sector de la
                jardinería general, ofrecemos servicios de diseño, mantenimiento
                y construcción de jardines tanto para particulares como para
                empresas.
              </p>

              <p className="mb-4 text-xl font-lato">
                Nuestro compromiso con la calidad se refleja en cada proyecto
                que emprendemos. Desde el cuidado meticuloso de cada planta
                hasta el diseño creativo de paisajes, en Vicnasol nos aseguramos
                de que cada detalle sea perfecto.
              </p>

              <p className="mb-6 text-xl font-lato">
                Descubre cómo podemos transformar tu entorno natural con
                profesionalismo y estilo, para conocer nuestra historia,
                nuestros valores y el equipo que hace posible Vicnasol.
              </p>
            </div>

            <div className=" px-6 py-4 mx-auto">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[200px] font-roboto text-xl">
                Ver más
              </button>
            </div>
          </div>
          <div className="w-full h-full shadow-lg rounded-3xl overflow-hidden max-h-[400px]">
            <Image
              src="/images/rosas.jpg"
              alt="Fondo principal"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <hr></hr>
      

      <section className="min-h-[800px]">
        <BentoGridThirdDemo />
      </section>
    </main>
  );
};

export default Home;

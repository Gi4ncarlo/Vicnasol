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
    <main className=" bg-green-50">
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src="/images/fondopagprincipal.jpg"
          alt="Fondo principal"
          objectFit="cover"
          objectPosition="center"
          width={500}
          height={200}
        />
      </div>
      <section className="min-h-screen py-12">
        <div className="container mx-auto">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            // thumbs={{
            //   swiper:
            //     thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            // }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-96 w-full rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail */}
          <Swiper
            // onSwiper={setThumbsSwiper}
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
                    className="block h-full w-full object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <BentoGridThirdDemo />
      </section>

      <hr></hr>

      <section>
        <div className="max-w-4xl mx-auto p-8">
          <div className="max-w-4xl mx-auto p-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h1 className="text-3xl font-bold text-green-700 mb-6">
                  Empresa Vicnasol de Jardinería
                </h1>

                <p className="mb-4">
                  Bienvenido a Vicnasol: Tu Socio en Jardinería En Vicnasol nos
                  dedicamos con pasión y dedicación a embellecer y mantener tus
                  espacios verdes. Con años de experiencia en el sector de la
                  jardinería general, ofrecemos servicios de diseño,
                  mantenimiento y construcción de jardines tanto para
                  particulares como para empresas.
                </p>

                <p className="mb-4">
                  Nuestro compromiso con la calidad se refleja en cada proyecto
                  que emprendemos. Desde el cuidado meticuloso de cada planta
                  hasta el diseño creativo de paisajes, en Vicnasol nos
                  aseguramos de que cada detalle sea perfecto.
                </p>

                <p className="mb-6">
                  Descubre cómo podemos transformar tu entorno natural con
                  profesionalismo y estilo, para conocer nuestra historia,
                  nuestros valores y el equipo que hace posible Vicnasol.
                </p>
              </div>

              <div className="bg-green-50 px-6 py-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;

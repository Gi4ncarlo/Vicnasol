'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import { images } from '../app/lib/images'

//BENTO

import { BentoGridThirdDemo } from '../app/intentoBendo'

//--------

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <main className=" bg-green-50">
      <div className="">
        <h1 className="text-3xl font-bold text-center pt-4">En proceso...</h1>
      </div>
      <section className='min-h-screen py-12'>
      <div className='container mx-auto'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          // thumbs={{
          //   swiper:
          //     thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          // }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='h-96 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
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
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    <BentoGridThirdDemo/>
    </section>

  

    </main>

  );
}
export default Home;
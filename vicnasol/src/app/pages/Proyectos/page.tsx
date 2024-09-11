import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <h1 className="text-green-500 text-center text-xl font-bold font-lato pt-16 lg:text-4xl lg:pt-28">
          Proyectos Finalizados
        </h1>
      </div>

      <div className="grid grid-cols-1 my-10 sm:grid-cols-2 lg:grid-cols-4 border-s-orange-100 gap-3 m-3 place-items-center">
        <div className="bg-blue-400 rounded-lg overflow-hidden ">
          <Image
            src="/images/prueba.jpg"
            alt="Imagen proyecto"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="p-4">
            <h2 className="text-base font-lato font-[700] py-1 lg:text-xl">Zen Garden Oasis</h2>
            <p className="font-nunito text-sm lg:text-base">
              A tranquil Japanese-inspired garden with a koi pond and bamboo
              features.
            </p>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg overflow-hidden">
          <Image
            src="/images/prueba.jpg"
            alt="Imagen proyecto"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="p-4">
          <h2 className="text-base font-lato font-[700] py-1 lg:text-xl">Urban Rooftop Haven</h2>
          <p className="font-nunito text-sm lg:text-base">
            A modern rooftop garden featuring drought-resistant plants and a
            vertical herb wall.
          </p>
          </div>

        </div>
        <div className="bg-red-500 rounded-lg overflow-hidden">
          <Image
            src="/images/prueba.jpg"
            alt="Imagen proyecto"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="p-4">
          <h2 className="text-base font-lato font-[700] py-1 lg:text-xl">English Cottage Garden</h2>
          <p className="font-nunito text-sm lg:text-base">
            A charming and colorful cottage garden with winding paths and
            fragrant flowers.
          </p>
          </div>
  
        </div>
        <div className="bg-orange-500 rounded-lg overflow-hidden">
          <Image
            src="/images/prueba.jpg"
            alt="Imagen proyecto"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="p-4">
          <h2 className="text-base font-lato font-[700] py-1 lg:text-xl">Polish Garden</h2>
          <p className="font-nunito text-sm lg:text-base">
            A charming and colorful cottage garden with winding paths and
            fragrant flowers.
          </p>
          </div>
  
        </div>
      </div>
    </main>
  );
}

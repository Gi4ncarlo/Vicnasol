import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-4 ">
      <div className="grid grid-cols-3 mx-16 my-2">
        <div>
          <ul className="pr-8">
            <li className="font-nunito text-lg py-1">
              Transformando espacios verdes, cuidando cada detalle.
            </li>

            <li className="font-lato text-base">
              🌿 Ubicación: Av. Las Flores 1234, Ciudad Jardín, Provincia Verde
            </li>

            <li className="font-lato text-base">
              📞 Teléfono: +54 9 11 1234-5678
            </li>

            <li className="font-lato text-base">
              📧 Correo electrónico: contacto@vicnasol.com
            </li>

            <li className="font-lato text-base">
              ⏰ Horario de trabajo: Lunes a Viernes, 8:00 AM - 6:00 PM
            </li>
          </ul>
        </div>
        <p className="text-xl font-cinzel font-medium m-auto">
          {" "}
          &copy; 2010 Vicnasol. Todos los derechos reservados.{" "}
        </p>

        <ul className="space-x-6 m-auto flex">
          <li className="transform transition-transform duration-300 hover:scale-110">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/LogosFacebook.png"}
                alt="Facebook"
                width={40}
                height={40}
                className="mx-auto"
              />

              <p className= "font-nunito mt-2">Facebook</p>
            </Link>
          </li>

          <li className="transform transition-transform duration-300 hover:scale-110 mx-auto">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/LogoInstagram.png"}
                alt="Instagram"
                width={40}
                height={40}
                className="mx-auto"
              />

              <p className= "font-nunito mt-2">Instagram</p>
            </Link>
          </li>

          <li className="transform transition-transform duration-300 hover:scale-110">
            <Link
              href="https://wa.me/5492944777103?text=Hola quiero informacion de su negocio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/LogosWhatsappIcon.png"}
                alt="Whatsapp"
                width={40}
                height={40}
                className="mx-auto"
              />

              <p className= "font-nunito mt-2">Whatsapp</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

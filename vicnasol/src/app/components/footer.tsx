import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-4 ">
      <div className="grid grid-cols-3 mx-16 my-2">
        <div>
          <ul>
            <li className="font-nunito text-xl py-1 px-6">Transformando espacios verdes, cuidando cada detalle.</li>

            <li className="font-lato text-lg">🌿 Ubicación: Av. Las Flores 1234, Ciudad Jardín, Provincia Verde</li>

            <li className="font-lato text-lg">📞 Teléfono: +54 9 11 1234-5678</li>

            <li className="font-lato text-lg">📧 Correo electrónico: contacto@vicnasol.com</li>

            <li className="font-lato text-lg">⏰ Horario de trabajo: Lunes a Viernes, 8:00 AM - 6:00 PM</li>
            </ul>
        </div>
        <p className="text-xl font-cinzel font-medium m-auto"> &copy; 2010 Vicnasol. Todos los derechos reservados. </p>

        <ul className=" space-y-6 m-auto">

          <li className="transform transition-transform duration-300 hover:scale-110 grid grid-cols-2">
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src={"/images/LogosFacebook.png"}
                alt="Facebook"
                width={45}
                height={45}
              />
              <div>
              <p>Facebook</p>
              </div>
            </Link>
          </li>

          <li className="transform transition-transform duration-300 hover:scale-110 grid grid-cols-2" >
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src={"/images/LogoInstagram.png"}
                alt="Instagram"
                width={45}
                height={45}
              />
              <div>
              <p>Instagram</p>
              </div>
            </Link>
          </li>

          <li className="transform transition-transform duration-300 hover:scale-110 grid grid-cols-2">
            <Link href="https://wa.me/5492944777103?text=Hola quiero informacion de su negocio" target="_blank" rel="noopener noreferrer">
              <Image
                src={"/images/LogosWhatsappIcon.png"}
                alt="Whatsapp"
                width={45}
                height={45}
              />
              <div>
              <p>Whatsapp</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

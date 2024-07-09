import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-4 text-center">
      <div className="flex  mx-16">
        <p className="text-lg flex justify-center mx-auto"> &copy; 2010 Vicnasol. Todos los derechos reservados. </p>
        <ul className="flex space-x-6 ">
          <li className="transform transition-transform duration-300 hover:scale-110">
            <Link href="https://www.facebook.com/">
              <Image
                src={"/images/LogosFacebook.png"}
                alt="Facebook"
                width={35}
                height={35}
              />
            </Link>
          </li>

          <li className="transform transition-transform duration-300 hover:scale-110">
            <Link href="https://www.instagram.com/">
              <Image
                src={"/images/LogoInstagram.png"}
                alt="Facebook"
                width={35}
                height={35}
              />
            </Link>
          </li>

          <li className="transform transition-transform duration-300 hover:scale-110">
            <Link href="https://wa.me/5492944777103?text=Hola quiero informacion de su negocio" target="_blank" rel="noopener noreferrer">
              <Image
                src={"/images/LogosWhatsappIcon.png"}
                alt="Whatsapp"
                width={35}
                height={35}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

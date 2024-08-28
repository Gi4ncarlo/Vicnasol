import Link from "next/link";

export default function Navbar() {
  return (
<nav className="bg-green-800 p-4">
      <div className="container ml-6 flex items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">
           VICNASOL
          </Link>
        </div>
        <ul className="flex mx-5 text-white">
          <li className="mr-6">
            <Link href="/pages/Proyectos">
             <p>Proyectos</p>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/About">
              <p>Servicios</p>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/pages/SobreNosotros">
              <p>Sobre Nosotros</p>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/pages/Contacto">
            <p>Contacto</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav> 
  );
}

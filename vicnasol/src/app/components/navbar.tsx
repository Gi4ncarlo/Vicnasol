import Link from "next/link";

export default function Navbar() {
  return (
<nav className="bg-cover bg-center h-[450px]" style={{ backgroundImage: "url('../../images/fondopagprincipal.jpg')" }}>
      <div className="container flex items-center text-lg justify-center mx-auto ">
        <div className="text-white text-xl font-bold my-3">
          <Link href="/">
           VICNASOL
          </Link>
        </div>
        <ul className="flex mx-5 text-white ">
          <li className="mr-6 hover:(-translate-y-1 bg-green-950 rounded-sm text-white)">
            <Link href="/pages/Proyectos">
             <p>Proyectos</p>
            </Link>
          </li>
          <li className="mr-6 hover:-translate-y-1">
            <Link href="/About">
              <p>Servicios</p>
            </Link>
          </li>
          <li className="mr-6 hover:-translate-y-1">
            <Link href="/pages/SobreNosotros">
              <p>Sobre Nosotros</p>
            </Link>
          </li>
          <li className="mr-6 hover:-translate-y-1">
            <Link href="/pages/Contacto">
            <p>Contacto</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav> 
  );
}

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
        <ul className="flex mx-5">
          <li>
            <Link href="./SobreNosotros">
             <p>PEP</p>
            </Link>
          </li>
          {/* <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/70 bg-slate-950/85 backdrop-blur-xl">
      <nav className="h-16 border-b border-slate-800/60">
        <div className="max-w-[1536px] mx-auto px-6  py-4 flex justify-between items-center h-full ">
          <div>
            <a
              href="#hero"
              className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              GS
            </a>
          </div>
          <div className="flex gap-x-8">
            <a
              className=" font-semibold text-gray-800  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="#hero"
            >
              Inicio
            </a>
            <a
              className=" font-semibold text-gray-800  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="#proyectos"
            >
              Proyectos
            </a>
            <a
              className=" font-semibold text-gray-800  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="#sobre-mi"
            >
              Sobre mí
            </a>
            <a
              className=" font-semibold text-gray-800  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

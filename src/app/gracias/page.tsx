// app/gracias/page.tsx
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Gracias — Mensaje enviado",
  robots: { index: false, follow: false }, // no index para esta página
};

export default function GraciasPage() {
  return (
    <main className="grid min-h-[70svh] place-items-center px-6 py-24">
      <div className="text-center">
        <div className="mx-auto mb-6 grid size-16 place-items-center rounded-full bg-green-600 text-white shadow-lg">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="mb-2 text-3xl font-bold">¡Mensaje enviado!</h1>
        <p className="mx-auto mb-8 max-w-xl text-gray-700">
          Gracias por contactarme. Te responderé muy pronto.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-full border px-5 py-2 font-semibold transition-colors hover:bg-gray-50"
          >
            Volver al inicio
          </Link>
          <Link
            href="#projects"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}

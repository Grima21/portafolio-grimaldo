"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

// ----- Demo data (sigue igual si quieres) -----
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "Dashboards" | "Landing Pages" | "Apps Web" | "E-commerce";
  demoUrl: string;
  githubUrl: string;
};

const CATEGORIES = [
  "Todos",
  "Dashboards",
  "Landing Pages",
  "Apps Web",
  "E-commerce",
] as const;

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Dashboard Analytics",
    description:
      "Panel de control moderno con visualización de datos en tiempo real y métricas avanzadas.",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: ["React", "Chart.js", "Tailwind", "Firebase"],
    category: "Dashboards",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras y pasarela de pago.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    category: "E-commerce",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Landing Page Startup",
    description:
      "Landing page moderna y responsiva para startup tecnológica con animaciones avanzadas.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
    category: "Landing Pages",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    category: "Apps Web",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "Sitio web elegante para restaurante con menú interactivo y sistema de reservas.",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: ["React", "Tailwind", "Firebase", "EmailJS"],
    category: "Landing Pages",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "CRM Dashboard",
    description:
      "Sistema CRM completo con gestión de clientes, ventas y reportes avanzados.",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: ["React", "Redux", "Material-UI", "Node.js"],
    category: "Dashboards",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
];

// ----- Filtro con “pill” animado -----
function FilterBar({
  active,
  setActive,
}: {
  active: (typeof CATEGORIES)[number];
  setActive: (c: (typeof CATEGORIES)[number]) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filtrar proyectos"
      className="relative mx-auto mb-10 flex w-full max-w-[720px] flex-wrap justify-center gap-2 rounded-full border bg-white/70 p-2 backdrop-blur"
    >
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(cat)}
            className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2
            ${isActive ? "text-white" : "text-gray-800 hover:text-gray-900"}`}
          >
            {isActive && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow"
                transition={{ type: "spring", stiffness: 450, damping: 40 }}
              />
            )}
            {cat}
          </button>
        );
      })}
    </div>
  );
}

// ----- Card 3D con hover suave y overlay -----
function ProjectCard({ p, delay = 0 }: { p: Project; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 18 });
  const sy = useSpring(my, { stiffness: 160, damping: 18 });
  const rotateX = useTransform(sy, [-60, 60], [8, -8]);
  const rotateY = useTransform(sx, [-60, 60], [-8, 8]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  }
  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.article
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="group rounded-2xl border-2 border-gray-200 bg-white shadow-xl transition-shadow"
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={reset}
        onMouseEnter={reset}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="overflow-hidden rounded-t-2xl"
      >
        <div className="relative h-48 w-full">
          {/* Next/Image: evita CLS y mejora perf */}
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
          />
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={p.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo de ${p.title}`}
              className="rounded-full bg-blue-600 p-3 text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${p.title} en GitHub`}
              className="rounded-full bg-gray-800 p-3 text-white shadow-lg transition-colors hover:bg-black focus:outline-none focus-visible:ring-2"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="p-6">
        <h3 className="mb-2 line-clamp-1 text-xl font-bold text-gray-900">
          {p.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-gray-700">{p.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {p.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={p.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-800 focus-visible:ring-2"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-gray-800 transition-colors hover:text-black focus-visible:ring-2"
          >
            <Github className="h-4 w-4" />
            Código
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ----- Sección principal -----
export default function Projects() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Todos");
  const list = useMemo(
    () =>
      active === "Todos"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-gray-100 px-6 py-20"
      aria-labelledby="proyectos-heading"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.h2
            id="proyectos-heading"
            className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            Proyectos Destacados
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl text-gray-700"
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            Una selección de trabajos que demuestran mis habilidades en
            desarrollo front-end y diseño de experiencias de usuario.
          </motion.p>
        </div>

        {/* Filtros */}
        <FilterBar active={active} setActive={setActive} />

        {/* Grid con stagger on-scroll */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p, i) => (
            <ProjectCard key={p.id} p={p} delay={i * 0.03} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

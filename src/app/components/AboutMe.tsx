// src/components/AboutMe.tsx
"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { fadeUp, stagger } from "@/lib/motion";
const techStack = [
  { name: "React", color: "bg-blue-500", level: 90 },
  { name: "JavaScript", color: "bg-yellow-500", level: 90 },
  { name: "TypeScript", color: "bg-blue-600", level: 70 },
  { name: "Tailwind CSS", color: "bg-teal-500", level: 90 },
  { name: "Next.js", color: "bg-black", level: 80 },
  { name: "Firebase", color: "bg-orange-500", level: 85 },
  { name: "Git", color: "bg-red-500", level: 85 },
  { name: "Node.js", color: "bg-green-600", level: 50 },
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 px-6 py-20"
      aria-labelledby="about-heading"
    >
      <div ref={sectionRef} className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            id="about-heading"
            className="mb-3 text-4xl font-bold lg:text-5xl"
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Sobre mí
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-700"
            variants={fadeUp(0.05)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Front-End Developer enfocado en interfaces intuitivas, rápidas y
            visualmente atractivas.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2"
        >
          {/* Left */}
          <div className="space-y-8">
            {/* Marco + Avatar */}
            <motion.div
              variants={fadeUp(0.1)}
              className="mx-auto flex h-64 w-64 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-2 shadow-2xl md:mx-0"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-white/60 backdrop-blur">
                <Image
                  src="/image/eva.webp"
                  alt="Foto de perfil de Grimaldo Sánchez"
                  fill
                  sizes="(min-width: 768px) 256px, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeUp(0.15)} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                ¡Hola! Soy Grimaldo
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Técnico en Programación y Análisis de Sistemas con enfoque en
                front-end. Construyo interfaces modernas con React y Tailwind,
                priorizando usabilidad, diseño y rendimiento. He creado
                dashboards, formularios dinámicos y CRUDs completos integrando
                Firebase y APIs externas. Actualmente mejoro mi portafolio,
                comparto contenido técnico y busco retos que me hagan crecer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Abierto a oportunidades remotas y freelance: código limpio,
                buenas prácticas y mentalidad de equipo.
              </p>

              {/* Facts */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Fact color="blue">📍 Panamá</Fact>
                <Fact color="green">🧑‍💻 2 años de práctica</Fact>
                <Fact color="purple">🧰 Técnico en Programación</Fact>
                <Fact color="rose">🎨 UI/UX Front-End Lover</Fact>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp(0.2)}
              className="text-center md:text-left"
            >
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Stack Tecnológico
              </h3>
              <p className="text-gray-700">
                Tecnologías que uso a diario en mis proyectos.
              </p>
            </motion.div>

            <div className="space-y-5">
              {techStack.map((tech, i) => (
                <SkillBar
                  key={tech.name}
                  name={tech.name}
                  color={tech.color}
                  level={tech.level}
                  index={i}
                  animate={!reduce && inView}
                />
              ))}
            </div>

            {/* Fun fact */}
            <motion.div
              variants={fadeUp(0.25)}
              className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white shadow-xl"
            >
              <h4 className="mb-2 text-lg font-bold">💡 Dato curioso</h4>
              <p>
                Cuando no programo, exploro nuevas tecnologías, resuelvo retos
                de lógica y contribuyo a open-source. La comunidad dev es puro
                aprendizaje.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Sub-componentes ---------- */

function Fact({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "green" | "purple" | "rose";
}) {
  const map = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    rose: "bg-rose-50 border-rose-200",
  } as const;

  return (
    <div
      className={`rounded-lg border-2 p-4 shadow-md ${map[color]} 
                  flex items-center gap-3`}
      aria-live="polite"
    >
      <span aria-hidden>•</span>
      <span className="font-medium">{children}</span>
    </div>
  );
}

function SkillBar({
  name,
  color,
  level,
  index,
}: {
  name: string;
  color: string;
  level: number;
  index: number;
}) {
  // Ref propio de cada barra para detectar su visibilidad
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Contador numérico (0 -> level) cuando entra en vista
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, level, {
      duration: 0.8,
      delay: index * 0.05,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, level, index, mv]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-800">{name}</span>
        <span className="text-sm font-semibold text-gray-600">
          <motion.span aria-hidden>{rounded}</motion.span>%
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <motion.div
          className={`h-full ${color} rounded-full shadow-sm`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }} // <-- ligado al scroll
          viewport={{ once: true, margin: "-10% 0px", amount: 0.6 }}
          transition={{
            duration: 0.8,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

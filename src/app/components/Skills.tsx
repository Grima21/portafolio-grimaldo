// src/components/Skills.tsx
// src/components/Skills.tsx
"use client";

import React from "react";
import {
  Code,
  Palette,
  Database,
  Globe,
  Users,
  Zap,
  CheckCircle,
  Star,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

/* --- extras para listas con trail --- */
const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const listItem = (delay: number) =>
  ({
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
      },
    },
  } as const);

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-500",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Sass",
      ],
    },
    {
      category: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-500",
      skills: [
        "Node.js",
        "Firebase",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Tools & DevOps",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-purple-500",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Webpack",
        "Vercel",
        "Netlify",
        "Docker",
        "AWS",
      ],
    },
    {
      category: "Design & UX",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-pink-500",
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "UI/UX Principles",
        "Prototyping",
      ],
    },
  ];

  const softSkills = [
    {
      name: "Comunicación efectiva",
      icon: <Users className="w-5 h-5" />,
      description: "Capacidad para explicar conceptos técnicos de manera clara",
    },
    {
      name: "Adaptabilidad",
      icon: <Zap className="w-5 h-5" />,
      description: "Rápido aprendizaje de nuevas tecnologías y metodologías",
    },
    {
      name: "Trabajo en equipo",
      icon: <CheckCircle className="w-5 h-5" />,
      description: "Colaboración efectiva en entornos ágiles",
    },
    {
      name: "Atención al detalle",
      icon: <Star className="w-5 h-5" />,
      description: "Enfoque en la calidad y perfección del código",
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-gray-100 px-6 py-20"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mb-16 text-center"
        >
          <motion.h2
            id="skills-heading"
            variants={fadeUp(0)}
            className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl"
          >
            Habilidades
          </motion.h2>
          <motion.p
            variants={fadeUp(0.05)}
            className="mx-auto max-w-3xl text-xl text-gray-700"
          >
            Un conjunto diverso de habilidades técnicas y soft skills que me
            permiten crear soluciones web excepcionales.
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
            Habilidades Técnicas
          </h3>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {technicalSkills.map((category, i) => (
              <motion.div
                key={category.category}
                variants={fadeUp(i * 0.05)}
                whileHover={{ boxShadow: "0 0 0 2px rgba(99,102,241,.35)" }} // glow sutil
                className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="mb-6 flex items-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.06, rotate: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    className={`rounded-lg ${category.color} p-3 text-white`}
                    aria-hidden
                  >
                    {category.icon}
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {category.category}
                  </h4>
                </div>

                {/* Skills List con trail */}
                <motion.ul
                  variants={listStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  className="space-y-3"
                >
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={skill}
                      variants={listItem(idx * 0.02)}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <span className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
            Soft Skills
          </h3>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp(i * 0.05)}
                whileHover={{ boxShadow: "0 0 0 2px rgba(99,102,241,.28)" }}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.06, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-3 text-white shadow-md"
                    aria-hidden
                  >
                    {skill.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-lg font-bold text-gray-900">
                      {skill.name}
                    </h4>
                    <p className="leading-relaxed text-gray-700">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Summary CTA (magnético) */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold">¿Listo para colaborar?</h3>
            <p className="mb-6 text-lg opacity-90">
              Estas habilidades me permiten entregar proyectos de alta calidad,
              desde la conceptualización hasta la implementación final.
            </p>
            <MagneticCTA />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

/* --------- CTA magnético reutilizable --------- */
function MagneticCTA() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 10 });
  const y = useSpring(my, { stiffness: 120, damping: 10 });
  const rotate = useTransform(x, [-12, 12], [-2, 2]);

  return (
    <motion.a
      href="#contact"
      aria-label="Ir a contacto"
      className="group relative inline-block rounded-full bg-white px-8 py-3 font-bold text-blue-600 shadow-lg transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      style={{ x, y, rotate }}
      onMouseMove={(e) => {
        const r = (
          e.currentTarget as HTMLAnchorElement
        ).getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) / 6);
        my.set((e.clientY - r.top - r.height / 2) / 6);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      Hablemos
      {/* shimmer */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span
          className="absolute -inset-1 opacity-0 transition-opacity group-hover:opacity-20
                          bg-gradient-to-tr from-white/60 via-white/30 to-transparent
                          [mask-image:linear-gradient(120deg,transparent,black,transparent)]
                          animate-[shimmer_1.2s_linear_infinite]"
        />
      </span>
    </motion.a>
  );
}

"use client";
import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import Tilt from "@/app/components/Tilt";
import Image from "next/image";

const Hero = () => {
  const goToProjects = () => {
    const el = document.querySelector("#proyectos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="scroll-mt-24  scroll-smooth min-h-screen flex items-center justify-center px-6 bg-stone-100"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.h1
                variants={fadeUp(0.0)}
                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                <span className="block">Grimaldo</span>
                <span className="block text-stone-900">
                  Sánchez
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp(0.05)}
                className="text-xl lg:text-2xl text-gray-800 font-bold"
              >
                Front-End Developer
              </motion.p>

              <motion.p
                variants={fadeUp(0.1)}
                className="text-lg text-gray-700 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                Creo experiencias web limpias, rápidas y escalables usando
                <span className="text-stone-700 font-bold"> React</span>,
                <span className="text-stone-700 font-bold"> Tailwind</span> y
                <span className="text-amber-700 font-bold"> Firebase</span>.
              </motion.p>

              {/* Social Links */}
              <motion.div
                variants={fadeUp(0.15)}
                className="flex justify-center lg:justify-start space-x-4 pt-4"
              >
                <a
                  href="https://github.com/Grima21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-black transition-all hover:scale-110"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/grimaldo-sanchez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-stone-800 rounded-full hover:bg-stone-950 transition-all hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="mailto:grimaldosanchez.dev@gmail.com"
                  className="p-3 bg-stone-600 rounded-full hover:bg-stone-800 transition-all hover:scale-110"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeUp(0.2)} className="pt-8">
                <button
                  onClick={goToProjects}
                  className="group inline-flex items-center space-x-3 bg-stone-900 hover:bg-stone-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 font-bold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                >
                  <span>Ver Proyectos</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate="show"
              className="relative"
            >
              {/* Aro con iniciales */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-stone-800 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-6xl lg:text-8xl font-bold text-stone-900">
                    GS
                  </div>
                </div>
              </div>

              {/* Floating logos: wrapper absoluto + Image con fill */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg animate-bounce drop-shadow-md pointer-events-none">
                <Image
                  src="/image/html5.png"
                  alt="HTML5"
                  fill
                  sizes="(max-width: 1024px) 64px, 64px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full animate-pulse drop-shadow-md pointer-events-none">
                <Image
                  src="/image/Css.png"
                  alt="CSS3"
                  fill
                  sizes="(max-width: 1024px) 80px, 80px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute top-1/3 -left-8 w-20 h-20 rounded-full animate-bounce drop-shadow-md pointer-events-none">
                <Image
                  src="/image/Js.webp"
                  alt="JavaScript"
                  fill
                  sizes="(max-width: 1024px) 80px, 80px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute bottom-20 right-8 w-14 h-14 rounded-full animate-bounce drop-shadow-md pointer-events-none">
                <Image
                  src="/image/React.png"
                  alt="React"
                  fill
                  sizes="(max-width: 1024px) 56px, 56px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

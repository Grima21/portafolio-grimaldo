// src/components/Footer.tsx
"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative scroll-mt-24 scroll-smooth bg-gray-900 px-6 py-16 text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-full bg-blue-600 p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Volver arriba"
        data-cta="footer_back_to_top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <div className="container mx-auto">
        {/* Main Footer Content (ANIMADO) */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {/* Brand & Description */}
          <motion.div variants={fadeUp(0)} className="text-center md:text-left">
            <div className="mb-4 text-3xl font-bold">
              <span className="text-white">Grimaldo</span>
              <span className="text-blue-400"> Sánchez</span>
            </div>
            <p className="mb-6 leading-relaxed text-gray-400">
              Desarrollador Front-End especializado en crear experiencias web
              excepcionales con tecnologías modernas.
            </p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <a
                href="https://github.com/Grima21"
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                data-cta="footer_github"
                className="group rounded-lg bg-gray-800 p-3 transition-colors hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                <Github className="h-5 w-5 group-hover:text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/grimaldo-sanchez/"
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                data-cta="footer_linkedin"
                className="group rounded-lg bg-blue-700 p-3 transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="mailto:grimaldosanchez.dev@gmail.com?subject=Proyecto%20-%20Portafolio&body=Hola%20Grimaldo%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre..."
                aria-label="Enviar email"
                data-cta="footer_email"
                className="group rounded-lg bg-red-700 p-3 transition-colors hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/50763441331?text=Hola%20Grimaldo%2C%20vi%20tu%20portafolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                data-cta="footer_whatsapp"
                className="group rounded-lg bg-green-600 p-3 transition-colors hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            variants={fadeUp(0.05)}
            className="text-center"
            aria-label="Enlaces rápidos"
          >
            <h3 className="mb-6 text-xl font-bold">Enlaces Rápidos</h3>
            <div className="space-y-3">
              <a
                href="#hero"
                className="block text-gray-300 transition-colors hover:text-white focus-visible:underline"
              >
                Inicio
              </a>
              <a
                href="#proyectos"
                className="block text-gray-300 transition-colors hover:text-white focus-visible:underline"
              >
                Proyectos
              </a>
              <a
                href="#sobre-mi"
                className="block text-gray-300 transition-colors hover:text-white focus-visible:underline"
              >
                Sobre mí
              </a>
              <a
                href="#skills"
                className="block text-gray-300 transition-colors hover:text-white focus-visible:underline"
              >
                Habilidades
              </a>
              <a
                href="#contacto"
                className="block text-gray-300 transition-colors hover:text-white focus-visible:underline"
              >
                Contacto
              </a>
            </div>
          </motion.nav>

          {/* Services */}
          <motion.div
            variants={fadeUp(0.1)}
            className="text-center md:text-right"
          >
            <h3 className="mb-6 text-xl font-bold">Servicios</h3>
            <div className="space-y-3 text-gray-400">
              <p>• Desarrollo Web Front-End</p>
              <p>• Diseño UI/UX</p>
              <p>• Aplicaciones React/Next.js</p>
              <p>• Landing Pages</p>
              <p>• E-commerce</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {year} Grimaldo Sánchez. Hecho con</span>
              <Heart className="h-4 w-4 text-red-500" aria-hidden />
              <span>en Panamá</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Construido con</span>
              <span className="text-blue-400">React</span>
              <span>+</span>
              <span className="text-teal-400">Tailwind</span>
              <span>+</span>
              <span className="text-purple-400">Next.js</span>
            </div>
          </div>
        </div>

        {/* Call to Action (ANIMADO) */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-12 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8">
            <h3 className="mb-4 text-2xl font-bold">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-blue-100">
              Estoy siempre disponible para discutir nuevas oportunidades y
              proyectos emocionantes. ¡Hablemos!
            </p>
            <a
              href="#contact"
              data-cta="footer_primary"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-all hover:scale-[1.03] hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Empezar un Proyecto
            </a>
          </div>
        </motion.div>
      </div>

      {/* Botón flotante de WhatsApp (SIEMPRE visible) */}
      <a
        href="https://wa.me/50763441331?text=Hola%20Grimaldo%2C%20vi%20tu%20portafolio%20y%20quiero%20hablar%20contigo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp"
        data-cta="floating_whatsapp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;

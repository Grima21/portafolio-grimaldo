import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white py-16 px-6 relative">
      {/* Scroll to Top Button */}
      <button
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">Grimaldo</span>
              <span className="text-blue-400"> Sánchez</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Desarrollador Front-End especializado en crear experiencias web
              excepcionales con tecnologías modernas.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:text-blue-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-blue-400" />
              </a>
              <a
                href="mailto:grimaldo@email.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <div className="space-y-3">
              <a
                href="#home"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Inicio
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Sobre mí
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <div className="space-y-3 text-gray-400">
              <p>• Desarrollo Web Frontend</p>
              <p>• Diseño UI/UX</p>
              <p>• Aplicaciones React</p>
              <p>• Landing Pages</p>
              <p>• E-commerce</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 Grimaldo Sánchez. Hecho con</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>en Panamá</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Construido con</span>
              <span className="text-blue-400">React</span>
              <span>+</span>
              <span className="text-teal-400">Tailwind</span>
              <span>+</span>
              <span className="text-purple-400">Vite</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Estoy siempre disponible para discutir nuevas oportunidades y
              proyectos emocionantes. ¡Hablemos!
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Empezar un Proyecto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

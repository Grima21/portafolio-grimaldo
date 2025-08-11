"use client";

import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const categories = [
    "Todos",
    "Dashboards",
    "Landing Pages",
    "Apps Web",
    "E-commerce",
  ];

  const projects = [
    {
      id: 1,
      title: "Dashboard Analytics",
      description:
        "Panel de control moderno con visualización de datos en tiempo real y métricas avanzadas.",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Redux", "Material-UI", "Node.js"],
      category: "Dashboards",
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="proyecto"
      className="min-h-screen scroll-mt-24 py-20 px-6 bg-gray-100 "
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Una selección de mis mejores trabajos que demuestran mis habilidades
            en desarrollo front-end y diseño de experiencias de usuario.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white  text-gray-800  hover:bg-blue-50  border-2 border-gray-300 "
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white  rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 "
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 backdrop-blur-sm rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 backdrop-blur-sm rounded-full hover:bg-black transition-colors shadow-lg"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900  mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700  mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-700  hover:text-blue-800  transition-colors font-bold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-semibold">Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-800  hover:text-black  transition-colors font-bold"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-semibold">Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

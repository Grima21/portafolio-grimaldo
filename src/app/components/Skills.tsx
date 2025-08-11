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
      className="py-20 px-6 bg-gray-100  mt-20 min-h-screen scroll-mt-24"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-6">
            Habilidades
          </h2>
          <p className="text-xl text-gray-700  max-w-3xl mx-auto">
            Un conjunto diverso de habilidades técnicas y soft skills que me
            permiten crear soluciones web excepcionales
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900  mb-10 text-center">
            Habilidades Técnicas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category, index) => (
              <div
                key={category.category}
                className="group bg-white  rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-200 "
              >
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`p-3 ${category.color} rounded-lg text-white group-hover:scale-110 transition-transform`}
                  >
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 ">
                    {category.category}
                  </h4>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 text-gray-700 "
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900  mb-10 text-center">
            Soft Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-white  rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 "
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <div className="text-white">{skill.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900  mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-gray-700  leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">¿Listo para colaborar?</h3>
            <p className="text-lg opacity-90 mb-6">
              Estas habilidades me permiten entregar proyectos de alta calidad,
              desde la conceptualización hasta la implementación final.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              Hablemos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

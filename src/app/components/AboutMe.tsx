export default function AboutMe() {
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

  return (
    <section className="h-screen mt-12">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-4">Sobre Mí</h2>
        <p className="text-center text-xl text-gray-700 size-100">
          Front-end Developer enfocado en crear interfaces intuitivas, rapidas y
          visualmente atractivas.
        </p>

        <div className="grid grid-cols-1 grid-cols-2 gap-16 item bg-center mt-10">
          {/*Left */}
          <div className="space-y-8">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              {/*contenedor Imagen */}
              <div className="w-56 h-56 rounded-xl flex items-center justify-center shadow-inner">
                <div>
                  <img
                    className="rounded-2xl"
                    src="./image/eva.jpg"
                    alt="Photo Profile"
                  />
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                ¡Hola! Soy Grimaldo
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Técnico en Programación y Análisis de Sistemas con enfoque en el
                desarrollo front-end. Me especializo en construir interfaces
                modernas con React y Tailwind CSS, priorizando usabilidad,
                diseño atractivo y rendimiento. He trabajado en proyectos reales
                como dashboards, formularios dinámicos y sistemas con CRUD
                completo, integrando tecnologías como Firebase y APIs externas.
                Actualmente, estoy enfocado en mejorar mi portafolio, compartir
                contenido técnico y colaborar en proyectos que me reten a crecer
                profesionalmente.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Estoy abierto a oportunidades remotas y freelance, donde pueda
                aportar valor con código limpio, buenas prácticas y mentalidad
                de equipo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items center space-x-3 bg-blue-50 p-4 rounded-lg shadow-md border-2 border-blue-200">
                  📍 Panamá
                </div>
                <div className="flex items center space-x-3 bg-green-50 p-4 rounded-lg shadow-md border-2 border-green-200">
                  🧑‍💻 2 años de experiencia práctica
                </div>
                <div className="flex items center space-x-3 bg-purple-50 p-4 rounded-lg shadow-md border-2 border-purple-200">
                  🧰 Técnico en Programación
                </div>
                <div className="flex items center space-x-3 bg-red-50 p-4 rounded-lg shadow-md border-2 border-red-200">
                  🎨 UI/UX Front-End Lover
                </div>
              </div>
            </div>
          </div>
          {/**Right */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {" "}
                Stack Tecnologico
              </h3>
              <p className="text-gray-700 mb-8">
                Tecnologias que domino y utilizo en mis proyectos diarios
              </p>
            </div>

            <div className="space-y-6">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-bold">
                      {" "}
                      {tech.name}
                    </span>
                    <span className="text-gray-600 text-sm font-semibold">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                      style={{
                        width: `${tech.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {/*Fun Fact */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white mt-8 shadow-xl">
              <h4 className="text-lg font-bold mb-2">💡 Dato curioso</h4>
              <p>
                Cuando no estoy programando, disfruto explorar nuevas
                tecnologías, resolver retos de lógica y contribuir a proyectos
                open source. ¡La comunidad dev es una locura de talento y
                aprendizaje constante!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contacto"
      className="min-h-screen scroll-mt-24 py-20 px-6 bg-gray-50 "
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-6">
            Hablemos
          </h2>
          <p className="text-xl text-gray-700 300 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu idea
            y cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900  mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Siempre estoy abierto a discutir nuevas oportunidades, proyectos
                interesantes o simplemente tener una conversación sobre
                tecnología.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 ">Email</h4>
                  <p className="text-gray-700 ">grimaldo.sanchez@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-600 rounded-lg shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 ">Teléfono</h4>
                  <p className="text-gray-700 ">+507 1234-5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-600 rounded-lg shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 ">Ubicación</h4>
                  <p className="text-gray-700 ">Ciudad de Panamá, Panamá</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white shadow-xl">
              <h4 className="text-lg font-bold mb-2">
                🚀 ¿Listo para empezar?
              </h4>
              <p className="text-blue-100">
                Envíame un mensaje y te responderé en menos de 24 horas.
                ¡Hagamos que tu proyecto cobre vida!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white  rounded-2xl p-8 shadow-xl border-2 border-gray-200 ">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900  mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-700 ">
                  Gracias por contactarme. Te responderé pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-800  mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-800 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-gray-800  mb-2"
                  >
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-800  mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white  text-gray-900 transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-xl hover:scale-105 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

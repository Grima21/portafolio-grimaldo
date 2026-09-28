// src/components/Contact.tsx
"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const FORMSPREE_ID = "mbklkloe"; // <- TU ID EXACTO

export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-30 scroll-smooth bg-gray-50 px-6 py-20"
      aria-labelledby="contact-heading"
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
            id="contact-heading"
            variants={fadeUp(0)}
            className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl"
          >
            Hablemos
          </motion.h2>
          <motion.p
            variants={fadeUp(0.05)}
            className="mx-auto max-w-3xl text-xl text-gray-700"
          >
            ¿Tienes un proyecto en mente? Me encantará conocer tu idea y cómo
            puedo ayudar a hacerla realidad.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp(0)}>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Información de contacto
              </h3>
              <p className="mb-8 leading-relaxed text-gray-700">
                Abierto a oportunidades, proyectos interesantes o una buena
                charla sobre tecnología.
              </p>
            </motion.div>

            <motion.ul variants={stagger(0.06)} className="space-y-6">
              <motion.li
                variants={fadeUp(0.02)}
                className="flex items-center gap-4"
              >
                <div className="rounded-lg bg-stone-800 p-3 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-700">grimaldosanchez.dev@gmail.com</p>
                </div>
              </motion.li>
              <motion.li
                variants={fadeUp(0.04)}
                className="flex items-center gap-4"
              >
                <div className="rounded-lg bg-green-600 p-3 shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Teléfono</h4>
                  <p className="text-gray-700">+507 •••• ••••</p>
                </div>
              </motion.li>
              <motion.li
                variants={fadeUp(0.06)}
                className="flex items-center gap-4"
              >
                <div className="rounded-lg bg-stone-700 p-3 shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ubicación</h4>
                  <p className="text-gray-700">Ciudad de Panamá, Panamá</p>
                </div>
              </motion.li>
            </motion.ul>

            <motion.div
              variants={fadeUp(0.08)}
              className="rounded-2xl bg-gradient-to-r from-stone-900 to-stone-700 p-6 text-white shadow-xl"
            >
              <h4 className="mb-2 text-lg font-bold">
                🚀 ¿Listo para empezar?
              </h4>
              <p className="text-stone-200">Te respondo en menos de 24 horas.</p>
            </motion.div>
          </motion.div>

          {/* Form (POST directo a Formspree) */}
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-xl"
          >
            <form
              action={`https://formspree.io/f/${FORMSPREE_ID}`}
              method="POST"
              className="space-y-6"
            >
              {/* redirect después de enviar */}
              <input type="hidden" name="_redirect" value="/gracias" />
              {/* (opcional) asunto fijo para el email */}
              <input
                type="hidden"
                name="_subject"
                value="[Portafolio] Nuevo mensaje"
              />

              {/* honeypot anti-spam */}
              <div className="sr-only" aria-hidden>
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Nombre *"
                  type="text"
                  required
                  placeholder="Tu nombre"
                />
                <Field
                  id="email"
                  label="Email *"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  autoComplete="email"
                />
              </div>

              <Field
                id="subject"
                label="Asunto *"
                type="text"
                required
                placeholder="¿En qué puedo ayudarte?"
              />
              <TextArea
                id="message"
                label="Mensaje *"
                rows={6}
                required
                placeholder="Cuéntame sobre tu proyecto…"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-stone-900 to-stone-700 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:from-stone-950 hover:to-stone-800 hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponentes simples (sin estado) ---------- */

function Field(props: {
  id: string;
  label: string;
  type: "text" | "email";
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const { id, label, type, placeholder, autoComplete, required } = props;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-gray-800"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-amber-700 focus:ring-2 focus:ring-amber-700"
      />
    </div>
  );
}

function TextArea(props: {
  id: string;
  label: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
}) {
  const { id, label, rows = 6, placeholder, required } = props;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-gray-800"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full resize-none rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-amber-700 focus:ring-2 focus:ring-amber-700"
      />
    </div>
  );
}

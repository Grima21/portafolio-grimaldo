// src/components/Reveal.jsx
"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../lib/motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 16,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  const variants = reduce ? { hidden: {}, show: {} } : fadeUp(delay, y);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

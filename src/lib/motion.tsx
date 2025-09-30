// src/lib/motion.ts
import type { Variants, Transition, Easing } from "framer-motion";

export const fadeUp = (delay = 0, y = 16): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export const stagger = (
  staggerChildren = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const slideX = (delay = 0, x = 24): Variants => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

// 🔽 NUEVO: si usas una lista con <motion.ul> y <motion.li>
export const list = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const listItem = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut", delay },
  },
});

// Si en algún lado quieres cubic-bezier, tipa el tuple así:
export const easeOutBezier: Easing = [0.22, 1, 0.36, 1];

export const spring: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 20,
};

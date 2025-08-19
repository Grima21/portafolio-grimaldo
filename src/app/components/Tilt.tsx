"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

type Props = React.PropsWithChildren<{ className?: string; max?: number }>;

export default function Tilt({ children, className, max = 12 }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 12 });
  const sy = useSpring(y, { stiffness: 120, damping: 12 });

  const rotateX = useTransform(sy, [-520, 50], [max, -max]);
  const rotateY = useTransform(sx, [-50, 50], [-max, max]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onMouseEnter={reset}
    >
      {children}
    </motion.div>
  );
}

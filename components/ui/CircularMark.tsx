"use client";
import { motion, useReducedMotion } from "framer-motion";

export function CircularMark({ reverse = false }: { reverse?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="circular-mark"
      animate={reduce ? undefined : { rotate: reverse ? -360 : 360 }}
      transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100">
        <defs><path id={reverse ? "mark-reverse" : "mark"} d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" /></defs>
        <text><textPath href={`#${reverse ? "mark-reverse" : "mark"}`}>JYA PRINTS • KATHMANDU • 2026 • </textPath></text>
        <circle cx="50" cy="50" r="17" /><path d="M33 50h34M50 33v34M38 38l24 24M62 38L38 62" />
      </svg>
    </motion.div>
  );
}

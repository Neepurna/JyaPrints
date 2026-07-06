"use client";
import { motion, useReducedMotion } from "framer-motion";
import { usePreorderStore } from "@/lib/store";

const ticker = "PRE-ORDER NOW ✕ PRE-ORDER NOW ✕ PRE-ORDER NOW ✕ PRE-ORDER NOW ✕ ";

export function MarqueeBar({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const open = usePreorderStore((state) => state.open);
  return (
    <button className={`marquee-poster${compact ? " marquee-poster--compact" : ""}`} onClick={() => open()} aria-label="Open pre-order form">
      <motion.span animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: compact ? 15 : 20, ease: "linear", repeat: Infinity }}>{ticker}{ticker}</motion.span>
      <motion.span className="marquee-poster__mirror" animate={reduce ? undefined : { x: ["-50%", "0%"] }} transition={{ duration: compact ? 15 : 20, ease: "linear", repeat: Infinity }}>{ticker}{ticker}</motion.span>
    </button>
  );
}

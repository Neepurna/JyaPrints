"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePreorderStore } from "@/lib/store";

export function Hero() {
  const reduce = useReducedMotion();
  const open = usePreorderStore((state) => state.open);
  const variants = { hidden: {}, visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } } };
  const item = { hidden: { opacity: 0, y: reduce ? 0 : 20 }, visible: { opacity: 1, y: 0 } };
  return (
    <section className="poster-hero" id="hero">
      <motion.div className="poster-hero__lockup" variants={variants} initial="hidden" animate="visible">
        <motion.p variants={item} className="poster-kicker">जया / JYA PRINTS</motion.p>
        <motion.h1 variants={item}>JYA PRINTS</motion.h1>
        <motion.h2 variants={item}>Wear Your Roots<span>.</span></motion.h2>
        <motion.p variants={item} className="poster-subline">THE MODERN WAY</motion.p>
        <motion.p variants={item} className="poster-presenting">PRESENTING 12 NEW DESIGNS</motion.p>
        <motion.button variants={item} onClick={() => open()} className="poster-cta">PRE-ORDER THE DROP <ArrowUpRight /></motion.button>
      </motion.div>
    </section>
  );
}

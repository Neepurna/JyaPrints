"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLink } from "@/components/shared/ArrowLink";

export function Hero() {
  const reduce = useReducedMotion();
  const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="hero">
      <div className="hero-copy">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.12 }}
        >
          <motion.p className="hero-kicker" variants={item}>
            <i /> NEW CULTURE DROP
          </motion.p>
          <motion.h1 variants={item}>Wear Your</motion.h1>
          <motion.h1 variants={item} className="acid">Roots<span className="title-mark">⌟</span></motion.h1>
          <motion.h2 variants={item}>The Modern Way</motion.h2>
          <motion.div className="hero-rule" variants={item} />
          <motion.p className="hero-description" variants={item}>
            Culture-inspired streetwear.<br />Limited designs. Printed with purpose.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <ArrowLink href="/designs" solid>Explore designs</ArrowLink>
            <ArrowLink href="/designs">View latest drop</ArrowLink>
          </motion.div>
        </motion.div>
      </div>
      <div className="hero-visual">
        <div className="hero-art">
          <Image
            src="/images/hero/campaign-placeholder.png"
            alt="Jya Store streetwear campaign model"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
          />
        </div>
        <p className="visual-caption">CAMPAIGN 01 / NEW CULTURE DROP</p>
      </div>
    </section>
  );
}

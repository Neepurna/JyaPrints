"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePreorderStore } from "@/lib/store";

export function FloatingPreorder() {
  const [visible, setVisible] = useState(false);
  const open = usePreorderStore((state) => state.open);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: .1 }); const hero = document.querySelector("#hero"); if (hero) observer.observe(hero); return () => observer.disconnect(); }, []);
  return <AnimatePresence>{visible && <motion.button className="floating-preorder" onClick={() => open()} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>PRE-ORDER <ArrowUpRight /></motion.button>}</AnimatePresence>;
}

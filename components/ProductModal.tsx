"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { LookbookProduct } from "@/lib/products";
import { usePreorderStore } from "@/lib/store";

export function ProductModal({ product, onClose }: { product: LookbookProduct | null; onClose: () => void }) {
  const open = usePreorderStore((state) => state.open);
  return <AnimatePresence>{product && <motion.div className="product-preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={`${product.name} preview`}>
    <button className="preview-backdrop" onClick={onClose} aria-label="Dismiss product preview" />
    <motion.div className="product-preview__panel" initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
      <button className="modal-close" onClick={onClose} aria-label="Close product preview"><X /></button>
      <div className="preview-art"><Image src={product.image} alt={`${product.name} — ${product.subtitle} enlarged artwork`} fill sizes="(min-width: 800px) 45vw, 90vw" /></div>
      <div className="preview-copy"><span>DESIGN {product.id} / 12</span><h2>{product.name}</h2><p>{product.subtitle}</p><button onClick={() => { onClose(); open(product.slug); }}>NOTIFY ME / PRE-ORDER <ArrowUpRight /></button></div>
    </motion.div>
  </motion.div>}</AnimatePresence>;
}

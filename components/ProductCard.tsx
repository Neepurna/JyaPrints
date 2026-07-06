"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LookbookProduct } from "@/lib/products";

export function ProductCard({ product, onPreview }: { product: LookbookProduct; onPreview: (product: LookbookProduct) => void }) {
  return (
    <motion.button className="lookbook-card" onClick={() => onPreview(product)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }}>
      {product.badge && <span className="card-badge">{product.badge}</span>}
      <span className="tee-mockup" aria-hidden="true"><i className="tee-sleeve tee-sleeve--left" /><i className="tee-body" /><i className="tee-sleeve tee-sleeve--right" /></span>
      <span className="tee-print">
        <Image src={product.image} alt={`${product.name} — ${product.subtitle} mythology artwork`} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 36vw, 70vw" />
      </span>
      <span className="lookbook-card__meta"><b>{product.name}</b><small>{product.subtitle}</small></span>
    </motion.button>
  );
}

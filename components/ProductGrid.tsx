"use client";
import { useState } from "react";
import { lookbookProducts, type LookbookProduct } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { MarqueeBar } from "@/components/MarqueeBar";

export function ProductGrid() {
  const [preview, setPreview] = useState<LookbookProduct | null>(null);
  return <section className="catalog-section" id="drop">
    <div className="catalog-grid">
      {lookbookProducts.map((product, index) => <div key={product.id} className="catalog-slot"><ProductCard product={product} onPreview={setPreview} />{(index === 2 || index === 5) && <div className="catalog-ticker"><MarqueeBar compact /></div>}</div>)}
    </div>
    <ProductModal product={preview} onClose={() => setPreview(null)} />
  </section>;
}

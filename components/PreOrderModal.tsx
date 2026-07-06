"use client";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { lookbookProducts } from "@/lib/products";
import { preorderSchema, submitPreorder, type PreorderData } from "@/lib/schema";
import { usePreorderStore } from "@/lib/store";

export function PreOrderModal() {
  const { isOpen, selectedProduct, close } = usePreorderStore();
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<PreorderData>({ resolver: zodResolver(preorderSchema), defaultValues: { email: "", favoriteDesign: selectedProduct } });
  useEffect(() => { reset({ email: "", favoriteDesign: selectedProduct }); setSuccess(false); }, [selectedProduct, isOpen, reset]);
  const onSubmit = async (data: PreorderData) => { await submitPreorder(data); setSuccess(true); };
  return <AnimatePresence>{isOpen && <motion.div className="preorder-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Pre-order notification form">
    <button className="preorder-backdrop" onClick={close} aria-label="Dismiss pre-order form" />
    <motion.div className="preorder-panel" initial={{ scale: .96, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .98, opacity: 0 }}>
      <button className="modal-close" onClick={close} aria-label="Close pre-order form"><X /></button>
      {success ? <motion.div className="preorder-success" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><Check /><span>YOU’RE ON THE LIST</span><h2>ROOTS<br />RECOGNISE<br />ROOTS.</h2><p>We’ll reach out before the drop goes public.</p><button onClick={close}>BACK TO THE LOOKBOOK</button></motion.div> : <><p className="modal-index">DROP 01 / 2026</p><h2>GET IN<br /><em>BEFORE.</em></h2><p>Join the pre-order list. No spam, no noise—only the drop.</p><form onSubmit={handleSubmit(onSubmit)} noValidate><label htmlFor="preorder-email">EMAIL ADDRESS</label><input id="preorder-email" type="email" placeholder="you@example.com" {...register("email")} />{errors.email && <small role="alert">{errors.email.message}</small>}<label htmlFor="favorite-design">FAVORITE DESIGN</label><select id="favorite-design" {...register("favoriteDesign")}><option value="">THE WHOLE DROP</option>{lookbookProducts.map((product) => <option key={product.id} value={product.slug}>{product.name}</option>)}</select><button type="submit" disabled={isSubmitting}>{isSubmitting ? "JOINING…" : <>NOTIFY ME <ArrowUpRight /></>}</button></form></>}
    </motion.div>
  </motion.div>}</AnimatePresence>;
}

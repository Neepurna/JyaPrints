"use client";
import { create } from "zustand";

type PreorderStore = {
  isOpen: boolean;
  selectedProduct: string;
  open: (product?: string) => void;
  close: () => void;
};

export const usePreorderStore = create<PreorderStore>((set) => ({
  isOpen: false,
  selectedProduct: "",
  open: (selectedProduct = "") => set({ isOpen: true, selectedProduct }),
  close: () => set({ isOpen: false }),
}));

import { MarqueeBar } from "@/components/MarqueeBar";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { RootsProjectStatement } from "@/components/RootsProjectStatement";
import { PreOrderModal } from "@/components/PreOrderModal";
import { FloatingPreorder } from "@/components/FloatingPreorder";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <>
    <MarqueeBar />
    <TopUtilityBar />
    <Hero />
    <ProductGrid />
    <RootsProjectStatement />
    <Footer />
    <FloatingPreorder />
    <PreOrderModal />
  </>;
}

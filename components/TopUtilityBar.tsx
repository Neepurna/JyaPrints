import { Recycle } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { CircularMark } from "@/components/ui/CircularMark";

export function TopUtilityBar() {
  return (
    <section className="utility-bar">
      <div className="utility-brand-mark">
        <Image src="/images/brand/jya-store-logo.png" alt="JYA Store logo" fill sizes="120px" priority />
      </div>
      <div className="utility-copy utility-copy--left"><Recycle /><span>STREETWEAR DESIGN<br />VOL. 01 // SEASON 1</span></div>
      <div className="utility-copy utility-copy--center"><b>MYTHOLOGY DESIGN</b><span>ROOTED IN KATHMANDU</span></div>
      <div className="utility-badges"><Badge>2026</Badge><Badge>CULTURAL<br />SACRED CONTENT</Badge></div>
      <CircularMark reverse />
    </section>
  );
}

import { Recycle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CircularMark } from "@/components/ui/CircularMark";

export function TopUtilityBar() {
  return (
    <section className="utility-bar">
      <CircularMark />
      <div className="utility-copy utility-copy--left"><Recycle /><span>STREETWEAR DESIGN<br />VOL. 01 // SEASON 1</span></div>
      <div className="utility-copy utility-copy--center"><b>MYTHOLOGY DESIGN</b><span>ROOTED IN KATHMANDU</span></div>
      <div className="utility-badges"><Badge>2026</Badge><Badge>CULTURAL<br />SACRED CONTENT</Badge></div>
      <CircularMark reverse />
    </section>
  );
}

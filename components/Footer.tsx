import { Badge } from "@/components/ui/Badge";

function Barcode() { return <div className="barcode" aria-label="Decorative JYA Prints barcode"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>; }

export function Footer() {
  return <footer className="poster-footer">
    <div className="footer-brand"><span>जया</span><h2>JYA PRINTS</h2><p>Jya means cloth in Newari—a surface for stories that still live among us. We carry Nepali and Newari mythology into modern streetwear, so roots are worn forward rather than left behind.</p></div>
    <div className="footer-code"><Barcode /><p>Established 2026.<br />Established 2026.</p></div>
    <div className="footer-badges"><Badge small>2026</Badge><Badge small>CULTURAL<br />SACRED CONTENT</Badge><Badge small>STREETWEAR<br />DESIGN 2026</Badge></div>
  </footer>;
}

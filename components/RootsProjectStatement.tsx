import { lookbookProducts } from "@/lib/products";

export function RootsProjectStatement() {
  return <section className="roots-statement">
    <p>JYA PRINTS / VOL. 01</p>
    <h2>In The Roots Project.</h2>
    <div>{lookbookProducts.map((product, index) => <span key={product.id} className={index % 2 ? "italic" : "bold"}>{product.name}{index === lookbookProducts.length - 1 ? "." : ", "}</span>)}</div>
  </section>;
}

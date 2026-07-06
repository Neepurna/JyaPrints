import { Product } from "@/types";
export const products: Product[] = [
 {id:"01",slug:"mecha-lakhey",name:"Mecha Lakhey",price:1890,image:"/images/products/mecha-lakhey.png",tag:"New",story:"The guardian of the galli, rebuilt in steel and neon.",color:"#ff3154"},
 {id:"02",slug:"majipa-lakhey",name:"Majipa Lakhey",price:1790,image:"/images/products/majipa-lakhey.png",story:"The ancient dancer of Majipat, moving between fear and protection.",color:"#ff3b25"},
 {id:"03",slug:"kumari-manga",name:"Kumari Manga",price:1890,image:"/images/products/kumari-manga.png",story:"Living divinity reimagined through a sharp manga lens.",color:"#d8a03d"},
 {id:"04",slug:"cyber-kumari",name:"Cyber Kumari",price:1990,image:"/images/products/cyber-kumari.png",tag:"New",story:"Tradition survives the future. The gaze remains sacred.",color:"#cf1020"}
];
export const getProduct=(slug:string)=>products.find(p=>p.slug===slug);

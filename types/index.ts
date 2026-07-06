export type Product = { id:string; slug:string; name:string; price:number; image:string; tag?:string; story:string; color:string };
export type CartItem = Product & { quantity:number; size:string };
export type Review = { quote:string; name:string; role:string };

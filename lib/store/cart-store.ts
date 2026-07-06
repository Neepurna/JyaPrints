"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/types";
type CartState={items:CartItem[];open:boolean;add:(p:Product,size?:string)=>void;remove:(id:string,size:string)=>void;setOpen:(v:boolean)=>void;count:()=>number;total:()=>number};
export const useCart=create<CartState>()(persist((set,get)=>({items:[],open:false,add:(p,size="M")=>{const items=[...get().items];const i=items.findIndex(x=>x.id===p.id&&x.size===size);if(i>=0)items[i]={...items[i],quantity:items[i].quantity+1};else items.push({...p,size,quantity:1});set({items,open:true})},remove:(id,size)=>set({items:get().items.filter(x=>!(x.id===id&&x.size===size))}),setOpen:(open)=>set({open}),count:()=>get().items.reduce((n,x)=>n+x.quantity,0),total:()=>get().items.reduce((n,x)=>n+x.price*x.quantity,0)}),{name:"jya-cart",partialize:s=>({items:s.items})}));

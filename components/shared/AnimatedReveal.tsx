"use client";
import { motion, useReducedMotion } from "framer-motion";
export function AnimatedReveal({children,className="",delay=0}:{children:React.ReactNode;className?:string;delay?:number}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:20}} whileInView={reduce?{}:{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}

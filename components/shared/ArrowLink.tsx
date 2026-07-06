import Link from "next/link";
export function ArrowLink({href,children,solid=false}:{href:string;children:React.ReactNode;solid?:boolean}){return <Link href={href} className={solid?"arrow-link solid":"arrow-link"}>{children}<span aria-hidden>↗</span></Link>}

import { NextResponse } from "next/server";
export async function POST(request:Request){const data=await request.formData();const email=String(data.get("email")||"");if(!/^\S+@\S+\.\S+$/.test(email))return NextResponse.json({error:"Valid email required"},{status:400});return NextResponse.redirect(new URL("/?subscribed=1",request.url),303)}

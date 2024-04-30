import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost:5000/api/getMenu");
    const menus = await res.json();
    console.log(menus);
    return NextResponse.json(menus);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

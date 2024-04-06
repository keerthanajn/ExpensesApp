import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log(req.body, await req.formData());
  const data = await req.json();
  console.log(data);

  return NextResponse.json(data);
}

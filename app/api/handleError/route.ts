import { NextResponse } from "next/server";
import { findErrorTicket } from "../../DB/find";

export async function POST(req: Request) {
  const reviewData = await req.json();
  const errorTicket = await findErrorTicket();

  errorTicket[reviewData.index].response = reviewData.response;
  errorTicket[reviewData.index].resolved = reviewData.resolved;

  errorTicket[reviewData.index].save();

  return NextResponse.json(reviewData);
}

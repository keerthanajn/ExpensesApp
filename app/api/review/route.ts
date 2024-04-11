import { NextResponse } from "next/server";
import { findPayTicket, findUser } from "../../DB/find";

export async function POST(req: Request) {
  const reviewData = await req.json();

  const User = await findUser(reviewData.userEmail);
  let index;
  User.payTickets.forEach(({ _id }, i) => {
    if (_id == reviewData.ticketId) {
      index = i;
    }
  });

  const payTicket = await findPayTicket(User.payTickets[index].dateMade);

  User.payTickets[index].status = reviewData.status;
  User.payTickets[index].response = reviewData.response;
  await User.save();

  if (payTicket) {
    payTicket.status = reviewData.status;
    payTicket.response = reviewData.response;
    await payTicket.save();
  }

  return NextResponse.json(reviewData);
}

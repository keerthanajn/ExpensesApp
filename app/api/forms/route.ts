import { NextResponse } from "next/server";
import { createPayTicket } from "../../DB/create";
import { findUser } from "../../DB/find";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const ticketData = await req.formData();

  try {
    await formToTicket(ticketData);
  } catch (error) {
    return NextResponse.json({ message: "Error with ticket" });
  }
  return NextResponse.json(ticketData);
}

async function formToTicket(ticketData: FormData) {
  // @ts-ignore
  const myFile: File = ticketData.get("evidence");

  const myEvidence = {
    data: Buffer.from(URL.createObjectURL(myFile), "base64"),
    contentType: myFile.type,
  };

  if (ticketData) {
    const currentUser = await findUser(String(ticketData.get("userEmail")));

    const newPayTicket: PayTicket = {
      _id: new mongoose.mongo.ObjectId(),
      user: currentUser.userDetails,
      amount: Number(ticketData.get("amount")),
      currency: String(ticketData.get("currency")),
      dateMade: new Date(),
      status: "pending",
      category: String(ticketData.get("category")),
      notes: String(ticketData.get("notes")),
      evidence: myEvidence,
    };

    createPayTicket(newPayTicket);
    currentUser.payTickets.push(newPayTicket);

    await currentUser.save();
  }
}

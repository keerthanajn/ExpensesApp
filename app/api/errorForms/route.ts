import { NextResponse } from "next/server";
import { createErrorTicket } from "../../DB/create";
import { findUser } from "../../DB/find";
import mongoose from "mongoose";

export async function POST(req: Request) {
    const ticketData = await req.formData();
    
    return NextResponse.json(ticketData);
}

async function formToTicket(ticketData: FormData) {
    if (ticketData) {
        const currentUser = await findUser(String(ticketData.get("userEmail")));

        const newErrorTicket: ErrorTicket = {
            title: String(ticketData.get("title")),
            details: String(ticketData.get("details")),
            resolved: false,
            dateMade: new Date(),
            user: currentUser.userDetails,
        };

        createErrorTicket(newErrorTicket);

        await currentUser.save();
    }
}
import { NextResponse } from "next/server";
import { createErrorTicket } from "../../DB/create";
import { findUser } from "../../DB/find";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request) {
    const{getUser} = getKindeServerSession();
    const user = await getUser();

    const ticketData = await req.json();

    const currentUser = await findUser(user.email);
    
    if (ticketData) {
        const newErrorTicket: ErrorTicket = {
            title: ticketData.title,
            details: ticketData.details,
            resolved: false,
            dateMade: new Date(),
            user: currentUser.userDetails,
        };

        createErrorTicket(newErrorTicket);
    }
    return NextResponse.json(ticketData);
}
import { createPayTicket } from "../../DB/create";
import { findUser } from "../../DB/find";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

type ticketInputs = {
  category: string;
  amount: number;
  notes: string;
  currency: string;
  evidence: File;
};

export default async function formToTicket(
  { amount, currency, category, evidence, notes }: ticketInputs,
  email: string
) {
  if (!!amount) {
    const newPayTicket: PayTicket = {
      amount: amount,
      currency: currency,
      dateMade: new Date(),
      status: "pending",
      category: category,
      notes: notes,
    };
    createPayTicket(newPayTicket);

    console.log("works");

    const user = await findUser(email);
    user.payTickets.push(newPayTicket);

    console.log("everything works");
  }
}

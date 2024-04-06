import { forEach } from "lodash";
import { HydratedDocument } from "mongoose";
import { findUser } from "./find";

export function ticketfilter({ payTickets }: Employee | LineManager) {
  let filteredTickets: filteredTickets = {
    accepted: [],
    rejected: [],
    pending: [],
  };

  payTickets.forEach((ticket) => {
    filteredTickets[ticket.status].push(ticket);
  });
  return filteredTickets;
}

export async function lmTicketFilter({
  employees,
}: HydratedDocument<LineManager>) {
  let lmTicketFilter: {
    employee: HydratedDocument<Employee | LineManager>;
    payTickets: PayTicket[];
  }[] = [];

  employees.forEach(async ({ userDetails: { email } }) => {
    let myPayTickets = [];
    const myEmployee = await findUser(email);

    if (myEmployee) {
      lmTicketFilter.push({
        employee: myEmployee,
        payTickets: ticketfilter(myEmployee).pending,
      });
    }
    return lmTicketFilter;
  });
}

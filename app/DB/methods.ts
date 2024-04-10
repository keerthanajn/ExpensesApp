import { HydratedDocument } from "mongoose";
import { findResolvedError, findUnresolvedError, findUser } from "./find";

export function ticketfilter({ payTickets }: Employee) {
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
}: HydratedDocument<Employee>) {
  let lmTicketFilter: {
    employee: HydratedDocument<Employee>;
    payTickets: PayTicket[];
  }[] = [];

  for (let i = 0; i < employees.length; i++) {
    const myEmployee = await findUser(employees[i].email);

    if (myEmployee) {
      const lmTicketFilterItem = {
        employee: myEmployee,
        payTickets: ticketfilter(myEmployee).pending,
      };

      if (lmTicketFilterItem.payTickets) {
        lmTicketFilter.push(lmTicketFilterItem);
      }
    }
  }

  return lmTicketFilter;
}

export async function errorTicketFilter() {
  return {
    unresolved: await findUnresolvedError(),
    resolved: await findResolvedError(),
  };
}

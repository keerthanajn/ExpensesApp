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

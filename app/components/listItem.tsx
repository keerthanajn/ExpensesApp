import _ from "lodash";
import "./components.css";
import Link from "next/link";
export default function ListItem({
  tickets,
  status,
}: {
  tickets: filteredTickets;
  status: string;
}) {
  return (
    <>
      <div className="claims-container">
        <h2>{_.capitalize(status)} Claims</h2>
        <div className="claims-section" id={`${status}-claims`}>
          <ul>
            {tickets[status] ? (
              tickets[status].map((ticket, index) => (
                <li key={index}>
                  {index + 1} Date: {ticket.dateMade.toLocaleDateString()},
                  Amount: {ticket.amount} Currency: {ticket.currency}
                </li>
              ))
            ) : (
              <li>Empty List</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
export function ListItemTr({
  tickets,
  status,
}: {
  tickets: filteredTickets;
  status: string;
}) {
  return (
    <>
      <h2>{_.capitalize(status)} Claims</h2>
      <div className="claims-section" id={`${status}-claims`}>
        <ul>
          {tickets[status] ? (
            tickets[status].map(
              (ticket: PayTicket, index: number) =>
                index < 3 && (
                  <li key={index}>
                    {index + 1} Date: {ticket.dateMade.toLocaleDateString()},
                    Amount: {ticket.amount} Currency: {ticket.currency}
                  </li>
                )
            )
          ) : (
            <li>Empty List</li>
          )}
        </ul>
        <Link href={`view/${status}`} id="view">
          View more {status} claims
        </Link>
      </div>
    </>
  );
}

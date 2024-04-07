import _ from "lodash";
import "./components.css";
import Link from "next/link";
export default function ListPending({
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
                  {index + 1} Date: {ticket.dateMade.toLocaleDateString()}, {/* Max, if you could link this to the claimmanagement page, although idk how youd transfer over the specific one that is clicked on, text me for discussion if u wanna figure that out*/}
                  Amount: {ticket.amount} Currency: {ticket.currency}, <Link href={`claimmanagement`} id="view">Manage Claim</Link>
                </li>                                                  /*error with this ^ rn, dunno how to link correctly, other one below works though */
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
export function ListPendingTr({
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
                    {index + 1} Date: {ticket.dateMade.toLocaleDateString()}, {/* Max, if you could link this to the claimmanagement page, although idk how youd transfer over the specific one that is clicked on, text me for discussion if u wanna figure that out*/}
                    Amount: {ticket.amount} Currency: {ticket.currency}, <Link href={`claimmanagement`} id="view">Manage Claim</Link>
                  </li>
                )
            )
          ) : (
            <li>Empty List</li>
          )}
        </ul>
        <Link href={`pendingclaims/${status}`} id="view">
          View more {status} claims
        </Link>
      </div>
    </>
  );
}

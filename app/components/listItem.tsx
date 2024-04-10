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
                  Amount: {ticket.amount} {ticket.currency}
                  <br />
                  Date: {ticket.dateMade.toLocaleDateString()}
                </li>
              ))
            ) : (
              <li>No {status} tickets</li>
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
                    Amount: {ticket.amount} {ticket.currency} Date:{"   "}
                    {ticket.dateMade.toLocaleDateString()}
                  </li>
                )
            )
          ) : (
            <li>No {status} tickets</li>
          )}
        </ul>
        {tickets[status].length >= 3 && (
          <Link href={`view/${status}`} id="view">
            View more {status} claims
          </Link>
        )}
      </div>
    </>
  );
}

export function LmTicketList({ ticketList }: { ticketList: lmTicketList }) {
  const ObjectId = require("mongoose").Types.ObjectId;
  return (
    <div className="claims-container">
      <h2>Review Claims</h2>

      <div className="claims-section" id={`pending-claims`}>
        <ul>
          {ticketList ? (
            ticketList.map(
              (
                {
                  employee: {
                    userDetails: { firstName, lastName },
                  },
                  payTickets,
                },
                index
              ) => {
                return (
                  <div key={index}>
                    {payTickets.map((payTicket, index2) => {
                      const ticketId = new ObjectId(payTicket._id);
                      return (
                        <Link href={`review/${ticketId}`} key={index2}>
                          <li>
                            {` ${firstName} ${lastName} | 
                          ${payTicket.dateMade.toLocaleDateString()} |  ${
                              payTicket.amount
                            } ${payTicket.currency}`}
                          </li>
                        </Link>
                      );
                    })}
                  </div>
                );
              }
            )
          ) : (
            <h2>No claims to review</h2>
          )}
        </ul>
      </div>
    </div>
  );
}
export function ErrorTicketList({
  tickets,
  status,
}: {
  tickets: errorTicketList;
  status: string;
}) {
  const ObjectId = require("mongoose").Types.ObjectId;

  return (
    <>
      <h2>{_.capitalize(status)} Errors</h2>
      <div
        className="claims-section"
        id={`${status == "unresolved" ? "rejected" : "accepted"}-claims`}
      >
        <ul>
          {tickets[status] ? (
            tickets[status].map((ticket: ErrorTicket, index: number) => (
              <Link href={`${status}/${ticket._id}`}>
                <li key={index}>
                  Title: {ticket.title}
                  <br />
                  {ticket.dateMade.toLocaleDateString()}
                </li>
              </Link>
            ))
          ) : (
            <li>No {status} tickets</li>
          )}
        </ul>
      </div>
    </>
  );
}
export function ErrorTicketListTr({
  tickets,
  status,
}: {
  tickets: errorTicketList;
  status: string;
}) {
  return (
    <>
      <h2>{_.capitalize(status)} Errors</h2>
      <div
        className="claims-section"
        id={`${status == "unresolved" ? "rejected" : "accepted"}-claims`}
      >
        <ul>
          {tickets[status] ? (
            tickets[status].map(
              (ticket: ErrorTicket, index: number) =>
                index < 3 && (
                  <Link href={`viewIssues/${status}/${ticket._id}`}>
                    <li key={index}>
                      Title: {ticket.title}
                      <br />
                      Date: {ticket.dateMade.toLocaleDateString()}
                    </li>
                  </Link>
                )
            )
          ) : (
            <li>No {status} tickets</li>
          )}
        </ul>
        {tickets[status].length >= 3 && (
          <Link href={`viewIssues/${status}`} id="view">
            View more {status} claims
          </Link>
        )}
      </div>
    </>
  );
}

import { findErrorTicket } from "../../../DB/find";
import IssueForm from "../../../components/forms/issueForm";
import "../../view.css";

export default async function ErrorReview({ params: { ticketID } }) {
  const errorTickets = await findErrorTicket();
  let myTicket: ErrorTicket;
  let index;
  errorTickets.forEach((errorTicket, i) => {
    if (errorTicket._id == ticketID) {
      myTicket = errorTicket;
      index = i;
    }
  });

  return myTicket ? (
    <IssueForm
      _id={ticketID}
      index={index}
      title={myTicket.title}
      details={myTicket.details}
      dateMade={myTicket.dateMade}
      email={myTicket.user.email}
      firstName={myTicket.user.firstName}
      lastName={myTicket.user.lastName}
    />
  ) : (
    <h1>Ticket not found</h1>
  );
}

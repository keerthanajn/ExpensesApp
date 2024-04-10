import "../review.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { findUser } from "../../DB/find";
import ReviewForm from "../../components/forms/reviewForm";
import { lmTicketFilter } from "../../DB/methods";
import { HydratedDocument } from "mongoose";

type ticketUserData = {
  employee?: HydratedDocument<Employee>;
  payTicket?: PayTicket;
  index?: number;
};

export default async function Reviewclaim({ params: { ticketID } }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const currentUser = await findUser(user.email);
  const ticketList = await lmTicketFilter(currentUser);
  let TPData: ticketUserData = {};

  ticketList.forEach(({ employee, payTickets }) => {
    payTickets.forEach((payTicket, index) => {
      if (payTicket._id == ticketID) {
        TPData = {
          employee: employee,
          payTicket: payTicket,
          index: index,
        };
      }
    });
  });

  const { amount, dateMade, currency, category, notes } = TPData.payTicket;
  const { userDetails } = TPData.employee;

  return TPData ? (
    <div id="contentbox">
      <ReviewForm
        _id={ticketID}
        amount={amount}
        category={category}
        currency={currency}
        dateMade={dateMade}
        notes={notes}
        email={userDetails.email}
        firstName={userDetails.firstName}
        lastName={userDetails.lastName}
      />
    </div>
  ) : (
    <h1> Ticket not found</h1>
  );
}

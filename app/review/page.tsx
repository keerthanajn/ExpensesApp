import "./review.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { findUser } from "../DB/find";
import { lmTicketFilter } from "../DB/methods";
import { LmTicketList } from "../components/listItem";

export default async function Review() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const currentUser = await findUser(user.email);
  const ticketList = await lmTicketFilter(currentUser);

  return (
    <>
      <LmTicketList ticketList={ticketList} />
    </>
  );
}

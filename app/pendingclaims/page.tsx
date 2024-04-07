import "./pendingclaims.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { findUser } from "../DB/find";
import { ticketfilter } from "../DB/methods";
import { ListPendingTr } from "../components/listpending";

export default async function Pendingclaims() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) {
    return <h1>No user</h1>;
  }

  const currentUser = await findUser(user.email);

  const filteredTickets = ticketfilter(currentUser);

  return (
    <>
      <div id="contentbox">
        <div className="claims-container">
          <h1>Pending Claims</h1>

          <ListPendingTr tickets={filteredTickets} status={"pending"} />
        </div>
      </div>
    </>
  );
}

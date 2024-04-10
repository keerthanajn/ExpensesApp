import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { findUser } from "../../DB/find";
import { ticketfilter } from "../../DB/methods";
import _ from "lodash";
import ListItem from "../../components/listItem";
type Params = {
  status: "unresolved" | "resolved";
};

export default async function RequestIssues({
  params: { status },
}: {
  params: Params;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) {
    return <h1>No user</h1>;
  }

  const currentUser = await findUser(user.email);
  const filteredTickets = ticketfilter(currentUser);
  return <ListItem tickets={filteredTickets} status={status} />;
}

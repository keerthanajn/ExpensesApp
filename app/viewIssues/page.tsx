import React from "react";
import "../view/view.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { findUser } from "../DB/find";
import Link from "next/link";
import { errorTicketFilter, ticketfilter } from "../DB/methods";
import { ErrorTicketListTr, ListItemTr } from "../components/listItem";

export default async function ViewIssues() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) {
    return <h1>No user</h1>;
  }

  const currentUser = await findUser(user.email);

  const filteredTickets = await errorTicketFilter();

  return (
    <>
      <div id="contentbox">
        <div className="claims-container">
          <h1>View Issues</h1>

          <ErrorTicketListTr tickets={filteredTickets} status={"unresolved"} />

          <ErrorTicketListTr tickets={filteredTickets} status={"resolved"} />
        </div>
      </div>
    </>
  );
}

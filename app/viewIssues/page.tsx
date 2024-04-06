import React from "react";
import "../view/view.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { findUser } from "../DB/find";
import Link from "next/link";
import { ticketfilter } from "../DB/methods";
import { ListItemTr } from "../components/listItem";

export default async function ViewIssues() {
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
          <h1>View Issues</h1>

          <ListItemTr tickets={filteredTickets} status={"unresolved"} />

          <ListItemTr tickets={filteredTickets} status={"resolved"} />

        </div>
      </div>
    </>
  );
}

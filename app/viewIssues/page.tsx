import "../view/view.css";
import { errorTicketFilter } from "../DB/methods";
import { ErrorTicketListTr } from "../components/listItem";

export default async function ViewIssues() {
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

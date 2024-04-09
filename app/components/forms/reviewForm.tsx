"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { lmTicketFilter } from "../../DB/methods";
import { findUser } from "../../DB/find";
import { HydratedDocument } from "mongoose";
import { useState, useEffect } from "react";

type ticketUserData = {
  employee?: HydratedDocument<Employee>;
  payTicket?: PayTicket;
  index?: number;
};

export default function ReviewForm({ ticketId }) {
  const { user, isLoading } = useKindeBrowserClient();
  const currentUser = user;
  console.log(user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user || !user.email) {
    <h1>No user</h1>;
  }
  console.log(user);

  const [TPData, setData] = useState<ticketUserData>({});
  const [Loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(user);

    const fetchData = async (user) => {
      const myUser = await findUser(user.email);
      const ticketList = await lmTicketFilter(myUser);

      for (let i = 0; i < ticketList.length; i++) {
        const employee = ticketList[i].employee;
        const payTickets = employee.payTickets;
        for (let j = 0; j < payTickets.length; j++) {
          // @ts-ignore
          console.log(payTickets[j]._id);

          if (payTickets[j] && payTickets[j]._id.toString() == ticketId) {
            setData({
              employee: employee,
              payTicket: payTickets[j],
              index: j,
            });
          }
        }
      }
    };

    fetchData(user);
  }, [user, TPData, setData]);

  console.log("checking", !!TPData);

  const onAccept = () => {
    TPData.payTicket.status = "accepted";
    //   TPData.employee.payTickets[TPData.index] = TPData.payTicket
    console.log(TPData.payTicket);
  };
  return (
    <form>
      <p id="claimtext">Claim info</p>
      <p id="claimtext">Claim info</p>
      <div id="button_container">
        <button id="accept_button">Accept</button>
        <button id="deny_button">Deny</button>
      </div>
    </form>
  );
}

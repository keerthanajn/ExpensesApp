import React from "react";
import "./review.css";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default async function Review() {
  const { user } = useKindeBrowserClient();
  const currentUser = user;

  return (
    <>
      <h1>Review Claim</h1>
      <form>
        <p id="claimtext">Claim info</p>
        <div id="button_container">
          <button id="accept_button">Accept</button>
          <button id="deny_button">Deny</button>
        </div>
      </form>
    </>
  );
}

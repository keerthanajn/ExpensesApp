import React from "react";
import "./claimmanagement.css";
//For Admin
export default function Claim_Management() {
  return (
    <>
      <legend>Claim Management</legend>
      <form>
        <p id="claimtext">Issue info</p>
        <div id="button_container">
          <button type="submit" id="accept_button">Accept</button>
          <button type="submit" id="deny_button">Deny</button>
        </div>
      </form>
    </>
  );
}

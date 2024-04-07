import React from "react";
import "../review/review.css";
//For Admin
export default function ReviewIssue() {
  return (
    <>
      <h1>Review Issue</h1>
      <form>
        <p id="claimtext">Issue info</p>
        <div id="button_container">
          <button id="accept_button">Accept</button>
          <button id="deny_button">Deny</button>
        </div>
      </form>
    </>
  );
}

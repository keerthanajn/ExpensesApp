import React from "react";
import "./review.css";

export default function Review() {
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

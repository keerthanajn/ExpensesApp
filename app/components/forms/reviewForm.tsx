"use client";
import _ from "lodash";
export default function ReviewForm({
  _id,
  amount,
  currency,
  dateMade,
  notes,
  email,
  firstName,
  lastName,
}) {
  return (
    <div id="reviewform_box">
      <div id="top_left_box">
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>Email: {_.capitalize(email)}</p>
      </div>
      <div id="top_right_box">
        <p id="upload_date">Made: {dateMade.toUTCString()}</p>
        <p id="evidence">Proof: proof link</p>
      </div>
      <div id="bottom_main_box">
        <p>Amount: {amount}</p>
        <p>currency: {currency}</p>
        <p id="notes_box">{notes}</p>
      </div>
      <div id="button_container">
        <button id="accept_button">Accept</button>
        <button id="deny_button">Deny</button>
      </div>
    </div>
  );
}

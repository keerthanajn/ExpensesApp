"use client";
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
    <form>
      <p id="claimtext">Claim info</p>
      <div id="button_container">
        <button id="accept_button">Accept</button>
        <button id="deny_button">Deny</button>
      </div>
    </form>
  );
}

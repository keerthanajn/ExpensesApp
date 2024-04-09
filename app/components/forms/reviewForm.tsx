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
    <div id="reviewform_box">
      <div id="top_left_box">
        <p>firstname secondname</p>
        <p>email</p>
      </div>
      <div id="top_right_box">
        <p id="upload_date">uploaddate</p>
        <p id="">Proof: proof link</p>
      </div>
      <div id="bottom_main_box">
        <p>currency + amount</p>
        <p id="notes_box">" notes "</p>
      </div>
      <div id="button_container">
        <button id="accept_button">Accept</button>
        <button id="deny_button">Deny</button>
      </div>
    </div>
  );
}

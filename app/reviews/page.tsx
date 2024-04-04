import React from "react";
import "./review.css";

export default function Reviews() {
  return (
    <>
      <div id="contentbox">
        <form>
          <legend>Review issue</legend>
          <input
            id="user_id"
            className="inputbox"
            placeholder="User Id"
          ></input>
          <input
            id="subject_textbox"
            className="inputbox"
            placeholder="Issue"
            required
          ></input>
          <textarea
            id="description_textbox"
            className="inputbox"
            placeholder="Description"
            required
          ></textarea>
          <button id="clear_button">Clear</button>
          <button id="submit_button">Submit</button>
        </form>
      </div>
    </>
  );
}

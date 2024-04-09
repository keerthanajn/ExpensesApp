import React from "react";
import "./report.css";

export default function Reviews() {
  return (
    <>
      <div id="contentbox">
        <div className="register-box">
          <form id="form" name="report-form" method="post" action="">
            <fieldset>
              <legend>Report an Issue</legend>
              <br></br>

              <section>
                <label htmlFor="userNum">User Id:</label>
                  <input
                    type="text"
                    id="userId"
                    name="userId"
                    maxLength={8}
                />

                <label htmlFor="iName">Issue Title:</label>
                <input type="text" id="iname" name="iname" />

                <label htmlFor="iDescription">Description:</label>
                <input type="text" id="description" name="description" />

              </section>

              <div className="form-actions">
                <button type="submit">Confirm</button>
                <button type="reset">Clear</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "../register/register.css";

export default function Reviews() {
  return (
    <>
      <header> <p><a href="mainpage" class="header_item">FDM Expenses App</a></p>   <p href="login" class="header_item"><a href="login">Sign out</a></p> </header>
      <div id="sidebar">
        <a href="mainpage" class="sidebar_item">Dashboard</a>
        <a href="view" class="sidebar_item">View Claims</a>
        <a href="submit" class="sidebar_item">Submit a Claim</a>
        <a href="report" class="sidebar_item">Report an Issue</a>
        <a href="register" class="sidebar_item">Register an Account</a>
        <a href="review" class="sidebar_item">Review a Claim</a>
        <a href="profile" class="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
        <h1>Report Issue</h1>
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

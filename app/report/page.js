import React from 'react';
import './report.css'

export default function Report() {
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
        <form>
          <legend>Report issue</legend>
          <input id="user_id" class="inputbox" placeholder="User Id"></input>
          <input id="subject_textbox" class="inputbox" placeholder="Issue" required></input>
          <textarea id="description_textbox" class="inputbox" placeholder="Description" required></textarea>
          <button id="clear_button">Clear</button>
          <button id="submit_button">Submit</button>
        </form>
      </div>
    </>
  )
}
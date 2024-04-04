import React from 'react';
import './review.css';

export default function mainlayout() {
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
      <h1>Report issue</h1>
      <form>
          <p id="claimtext">text from claim</p>
          <button id="accept_butto">Accept</button>
          <button id="deny_butto">Deny</button>
        </form>
      </div>
    </>
  )
}
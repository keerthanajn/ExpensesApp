import React from 'react';
import './review.css';

export default function Review() {
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
      <h1>Review Claim</h1>
      <form>
          <p id="claimtext">Claim info</p>
          <div id="button_container">
            <button id="accept_button">Accept</button>
            <button id="deny_button">Deny</button>
          </div>
        </form>
      </div>
    </>
  )
}
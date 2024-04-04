import React from 'react';
import './review.css'

export default function Reviews() {
  return (
    <>
      <header> <p><a href="mainpage" class="header_item">FDM Expenses App</a></p>   <p href="login" class="header_item"><a href="#home">Sign out</a></p> </header>
      <div id="sidebar">
          <a href="view" class="sidebar_item">View Claims</a>
          <a href="submit" class="sidebar_item">Submit a Claim</a>
          <a href="reviews" class="sidebar_item">Review a Claim</a>
          <a href="register" class="sidebar_item">Register an account</a>
          <a href="profile" class="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
        <form>
          <legend>Review issue</legend>
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
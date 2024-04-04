import React from 'react';
import './mainlayout.css'

export default function mainlayout() {
  return (
    <>
      <header> <p><a href="mainpage" class="header_item">FDM Expenses App</a></p>   <p href="login" class="header_item"><a href="#home">Sign out</a></p> </header>
      <div id="sidebar">
        <a href="mainpage" class="sidebar_item">Dashboard</a>
        <a href="view" class="sidebar_item">View Claims</a>
        <a href="submit" class="sidebar_item">Submit a Claim</a>
        <a href="reviews" class="sidebar_item">Review a Claim</a>
        <a href="register" class="sidebar_item">Register an account</a>
        <a href="profile" class="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
            mainarea
      </div>
    </>
  )
}
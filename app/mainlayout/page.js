import React from 'react';
import './mainlayout.css'

export default function mainlayout() {
  return (
    <>
      <header> <p class="header_item">FDM Expenses App</p>   <p class="header_item"><a href="#home">Sign out</a></p> </header>
      <div id="sidebar">
          <a href="view" class="sidebar_item">View Claims</a>
          <a href="submit" class="sidebar_item">Submit a Claim</a>
          <a href="reviews" class="sidebar_item">Review a Claim</a>
          <a href="submit" class="sidebar_item">temp1</a>
          <a href="submit" class="sidebar_item">temp1</a>
      </div>
      <div id="contentbox">
            mainarea
      </div>
    </>
  )
}
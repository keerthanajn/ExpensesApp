import React from 'react';
import './review.css'

export default function Reviews() {
  return (
    <>
      <header> <p class="header_item">FDM Expenses App</p>   <p class="header_item"><a href="#home">Sign out</a></p> </header>
      <div id="sidebar">
        <ul>
          <li>temp1</li>
          <li>temp2</li>
          <li>temp3</li>
          <li>temp4</li>
          <li>temp5</li>
        </ul>
      </div>
      <div id="contentbox">
        <form>
          <legend>Review issue</legend>
          <input id="subject_textbox" class="inputbox" placeholder="Issue" required></input>
          <textarea id="description_textbox" class="inputbox" placeholder="Description" required></textarea>
          <button id="clear_button">Clear</button>
          <button id="submit_button">Submit</button>
        </form>
      </div>
    </>
  )
}
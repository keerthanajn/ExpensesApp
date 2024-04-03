import React from 'react';
import './review.css'

export default function Reviews() {
  return (
    <>
      <header>FDM Expenses App</header>
      <form>
        <input id="subject_textbox" placeholder="Subject" required></input>
        <input id="description_textbox" placeholder="Description" required></input>
        <button id="clear_button">Clear</button>
        <button id="submit_button">Submit</button>
      </form>
      
    </>
  )
}
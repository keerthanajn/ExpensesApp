import React from 'react';
import './submit.css'; // Make sure to create an appropriate App.css file for styles

export default function Submit(){

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
        <div className="container">
        <legend>Submit a claim</legend>
        <form className="claim-form">
          <div className="form-group">
            <input class="entry_box" placeholder="Category" type="text" id="category" name="category"  />
          </div>
          <div className="form-group">
            <input class="entry_box" placeholder="Amount" type="text" id="amount" name="amount"  />
          </div>
          <div className="form-group">
            <input class="entry_box" placeholder="Currency" type="text" id="currency" name="currency" />
          </div>
          <div className="form-group">
            <textarea class="entry_box" placeholder="Notes" id="notes" name="notes"/>
          </div>
          <div className="form-group">
            <input class="entry_box" placeholder="Proof" type="text" id="proof" name="proof" />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" >Clear</button>
          </div>
          
        </form>
      </div>
      </div>
    </>
  );
};
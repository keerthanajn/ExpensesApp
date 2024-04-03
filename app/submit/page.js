import React from 'react';
import './submit.css'; // Make sure to create an appropriate App.css file for styles

export default function Submit(){

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
        <div className="container">
        <form className="claim-form">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category"  />
          </div>
          <div className="form-group">
            <label htmlFor="proof">Proof</label>
            <input type="text" id="proof" name="proof" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" name="amount"  />
          </div>
          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <input type="text" id="currency" name="currency" />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes"/>
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
import React from 'react';
import './submit.css';

export default function Submit(){

  return (
    <div className="container">
      <header>
        <div className="user-profile">
          <img src="" alt="User Profile" />
          <span>Submit Claim</span>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#signout">Sign Out</a></li>
          </ul>
        </nav>
      </header>
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
  );
};

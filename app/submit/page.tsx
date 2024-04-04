import React from "react";
import "./submit.css"; // Make sure to create an appropriate App.css file for styles

export default function Submit() {
  return (
    <>
      <div id="contentbox">
        <div className="container">
          <legend>Submit a claim</legend>
          <form className="claim-form">
            <div className="form-group">
              <input
                className="entry_box"
                placeholder="Category"
                type="text"
                id="category"
                name="category"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="entry_box"
                placeholder="Amount"
                type="text"
                id="amount"
                name="amount"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="entry_box"
                placeholder="Currency"
                type="text"
                id="currency"
                name="currency"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="entry_box"
                placeholder="Notes"
                id="notes"
                name="notes"
              />
            </div>
            <div className="form-group">
              <input
                className="entry_box"
                placeholder="Proof"
                type="text"
                id="proof"
                name="proof"
              />
            </div>
            <div className="form-actions">
              <button type="submit">Submit</button>
              <button type="button">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

"use client";
import React from "react";
import "./submit.css"; // Make sure to create an appropriate App.css file for styles

export default function Submit() {
  return (
    <>
      <header> <p><a href="mainpage" className="header_item">FDM Expenses App</a></p>   <p className="header_item"><a href="login">Sign out</a></p> </header>
      <div id="sidebar">
        <a href="mainpage" className="sidebar_item">Dashboard</a>
        <a href="view" className="sidebar_item">View Claims</a>
        <a href="submit" className="sidebar_item">Submit a Claim</a>
        <a href="report" className="sidebar_item">Report an Issue</a>
        <a href="register" className="sidebar_item">Register an Account</a>
        <a href="review" className="sidebar_item">Review a Claim</a>
        <a href="profile" className="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
        <div className="container">
          <legend>Submit a claim</legend>
          <form className="claim-form" onSubmit={handleSubmit}>
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

            <div>
              <div className="dropzone-container">
                <label htmlFor="dropzone-file" className="dropzone-label">
                  <div className="dropzone-content">
                    <svg
                      className="dropzone-icon"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="dropzone-text">
                      <span>Supporting evidence</span>
                    </p>
                    <p className="dropzone-text">
                      Click to upload or drag and drop
                    </p>
                    <p className="dropzone-hint">(JPG, JPEG, PNG, PDF)</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="dropzone-input hidden"
                  />
                </label>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" formMethod="Post">
                Submit
              </button>
              <button type="button">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function handleSubmit(params) {
  // console.log(params);
}

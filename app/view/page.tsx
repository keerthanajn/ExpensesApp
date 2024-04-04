import React from "react";
import "./view.css";

export default function View() {
  return (
    <>
      <div id="contentbox">
        <div className="claims-container">
          <h1>View Claims</h1>
          <div className="claims-section" id="active-claims">
            <h2>Active Claims</h2>
            <ul>
              <li>Claim #123 - $100 for Office Supplies</li>
              <li>Claim #124 - $250 for Business Travel</li>
            </ul>
            <a href="active" id="view">
              View more active claims
            </a>
          </div>

          <div className="claims-section" id="approved-claims">
            <h2>Approved Claims</h2>
            <ul>
              <li>Claim #120 - $150 for Conference Fee</li>
              <li>Claim #121 - $500 for New Equipment</li>
            </ul>
            <a href="approved" id="view">
              View more approved claims
            </a>
          </div>

          <div className="claims-section" id="rejected-claims">
            <h2>Rejected Claims</h2>
            <ul>
              <li>Claim #122 - $50 for Team Lunch</li>
            </ul>
            <a href="rejected" id="view">
              View more rejected claims
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

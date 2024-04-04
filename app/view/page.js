import React from 'react';
import './view.css';

export default function View(){

  return (
    <>
      <header> <p><a href="mainpage" class="header_item">FDM Expenses App</a></p>   <p href="login" class="header_item"><a href="#home">Sign out</a></p> </header>
      <div id="sidebar">
          <a href="view" class="sidebar_item">View Claims</a>
          <a href="submit" class="sidebar_item">Submit a Claim</a>
          <a href="reviews" class="sidebar_item">Review a Claim</a>
          <a href="register" class="sidebar_item">Register an account</a>
          <a href="profile" class="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
        <div class="claims-container">
                <h1>View Claims</h1>
                <div class="claims-section" id="active-claims">
                    <h2>Active Claims</h2>
                    <ul>
                        <li>Claim #123 - $100 for Office Supplies</li>
                        <li>Claim #124 - $250 for Business Travel</li>
                    </ul>
                    <a href="active" id = "view">View more active claims</a>
                </div>
                
                <div class="claims-section" id="approved-claims">
                    <h2>Approved Claims</h2>
                    <ul>
                        <li>Claim #120 - $150 for Conference Fee</li>
                        <li>Claim #121 - $500 for New Equipment</li>
                    </ul>
                    <a href="approved" id = "view">View more approved claims</a>
                </div>

                <div class="claims-section" id="rejected-claims">
                    <h2>Rejected Claims</h2>
                    <ul>
                        <li>Claim #122 - $50 for Team Lunch</li>
                    </ul>
                    <a href="rejected" id = "view">View more rejected claims</a>
                </div>
            </div>
      </div>
    </>
   
  );
};
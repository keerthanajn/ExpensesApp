import React from 'react';
import './view.css';

export default function View(){

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
        <div class="claims-container">
                <h1>View Claims</h1>
                <div class="claims-section" id="active-claims">
                    <h2>Active Claims</h2>
                    <ul>
                        <li>Claim #123 - $100 for Office Supplies</li>
                        <li>Claim #124 - $250 for Business Travel</li>
                    </ul>
                </div>
                
                <div class="claims-section" id="approved-claims">
                    <h2>Approved Claims</h2>
                    <ul>
                        <li>Claim #120 - $150 for Conference Fee</li>
                        <li>Claim #121 - $500 for New Equipment</li>
                    </ul>
                </div>

                <div class="claims-section" id="rejected-claims">
                    <h2>Rejected Claims</h2>
                    <ul>
                        <li>Claim #122 - $50 for Team Lunch</li>
                    </ul>
                </div>
            </div>
      </div>
    </>
   
  );
};

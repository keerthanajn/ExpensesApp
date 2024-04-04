'use client'
import React, { useEffect } from 'react';
import './userHome.css';
import Link from 'next/link';

export default function ButtonPage() {
//   // useEffect to handle event listeners when component mounts
//   useEffect(() => {
//     const handleLogoutClick = () => {
//       alert('Log out clicked!');
//     };

//     const handleSubmitClick = () => {
//       alert('Submit button clicked!');
//     };

//     const handleViewClick = () => {
//       alert('View button clicked!');
//     };

//     const handleTicketClick = () => {
//       alert('Ticket button clicked!');
//     };

//     const logoutButton = document.getElementById('logout-button');
//     const submitButton = document.getElementById('submit-button');
//     const viewButton = document.getElementById('view-button');
//     const ticketButton = document.getElementById('ticket-button');

//     logoutButton.addEventListener('click', handleLogoutClick);
//     submitButton.addEventListener('click', handleSubmitClick);
//     viewButton.addEventListener('click', handleViewClick);
//     ticketButton.addEventListener('click', handleTicketClick);

//     // Cleanup: Remove event listeners when component unmounts
//     return () => {
//       logoutButton.removeEventListener('click', handleLogoutClick);
//       submitButton.removeEventListener('click', handleSubmitClick);
//       viewButton.removeEventListener('click', handleViewClick);
//       ticketButton.removeEventListener('click', handleTicketClick);
//     };
//   }, []); // empty dependency array ensures this effect runs only once

// <div className="layout">
    //   <div id="left-bar">
    //     <p>Name</p>
    //     <p>Title</p>
    //   </div>
    //   <div>
    //     <div className="header">
    //       <h1>Expenses App</h1>
    //       <button id="logout-button">Sign Out</button>
    //     </div>
    //     <div className="buttons-container">
    //       <button id="submit-button">Submit Claim</button>
    //       <button id="view-button">View Claims
    //         <ul className="subtext">
    //           <li>Active Claims</li>
    //           <li>Inactive Claims</li>
    //         </ul>
    //       </button>
    //       <button id="ticket-button">Filing an error ticket</button>
    //     </div>
    //   </div>
    // </div>

  return (
    <>
      <header> <a href="mainpage" class="header_item">FDM Expenses App</a>   <p href="login" class="header_item"><a href="#home">Sign out</a></p> </header>
      <div id="sidebar">
          <a href="view" class="sidebar_item">View Claims</a>
          <a href="submit" class="sidebar_item">Submit a Claim</a>
          <a href="reviews" class="sidebar_item">Review a Claim</a>
          <a href="" class="sidebar_item">temp1</a>
          <a href="Profile" class="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
            <h1 id="top_text">Welcome back *NAME*</h1>
            <div id="job_position">
                <p>*Worker's position in company*</p>
            </div>
            <div id="long_bar">
              <p>long bar for info</p>
            </div>
            <div id="displaybox_1" class="tripple_item">
              <p>text1</p>
            </div>
            <div id="displaybox_2" class="tripple_item">
              <p>text2</p>
            </div>
            <div id="displaybox_3" class="tripple_item">
              <p>text3</p>
            </div>
      </div>
    </>
  );
}
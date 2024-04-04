import React, { useEffect } from 'react';
import './buttonPage.css';
import Link from 'next/link';

export default function ButtonPage() {
  // useEffect to handle event listeners when component mounts
  useEffect(() => {
    const handleLogoutClick = () => {
      alert('Log out clicked!');
    };

    const handleSubmitClick = () => {
      alert('Submit button clicked!');
    };

    const handleViewClick = () => {
      alert('View button clicked!');
    };

    const handleTicketClick = () => {
      alert('Ticket button clicked!');
    };

    const logoutButton = document.getElementById('logout-button');
    const submitButton = document.getElementById('submit-button');
    const viewButton = document.getElementById('view-button');
    const ticketButton = document.getElementById('ticket-button');

    logoutButton.addEventListener('click', handleLogoutClick);
    submitButton.addEventListener('click', handleSubmitClick);
    viewButton.addEventListener('click', handleViewClick);
    ticketButton.addEventListener('click', handleTicketClick);

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      logoutButton.removeEventListener('click', handleLogoutClick);
      submitButton.removeEventListener('click', handleSubmitClick);
      viewButton.removeEventListener('click', handleViewClick);
      ticketButton.removeEventListener('click', handleTicketClick);
    };
  }, []); // empty dependency array ensures this effect runs only once

  return (
    <div className="layout">
      <div id="left-bar">
        <p>Name</p>
        <p>Title</p>
      </div>
      <div>
        <div className="header">
          <h1>Expenses App</h1>
          <button id="logout-button">Sign Out</button>
        </div>
        <div className="buttons-container">
          <button id="submit-button">Submit Claim</button>
          <button id="view-button">View Claims
            <ul className="subtext">
              <li>Active Claims</li>
              <li>Inactive Claims</li>
            </ul>
          </button>
          <button id="ticket-button">Filing an error ticket</button>
        </div>
      </div>
    </div>
  );
}

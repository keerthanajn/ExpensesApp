import React from "react";
import "./mainlayout.css";

export default function mainlayout() {
  return (
    <>
      <div id="sidebar">
        <a href="view" className="sidebar_item">
          View Claims
        </a>
        <a href="submit" className="sidebar_item">
          Submit a Claim
        </a>
        <a href="reviews" className="sidebar_item">
          Review a Claim
        </a>
        <a href="register" className="sidebar_item">
          Register an account
        </a>
        <a href="profile" className="sidebar_item">
          Profile
        </a>
        <a href="viewIssues" className="sidebar_item">
          View Issues
        </a>
        <a href="reviewIssue" className="sidebar_item">
          Review an Issue
        </a>
      </div>
      <div id="contentbox">mainarea</div>
    </>
  );
}

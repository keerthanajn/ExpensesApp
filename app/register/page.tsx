"use client";
import "./register.css";
import React, { useState } from "react";
import Link from "next/link";

export default function Register() {
  return (
    <>
<<<<<<< HEAD
      <header>
        {" "}
        <p>
          <a href="mainpage" className="header_item">
            FDM Expenses App
          </a>
        </p>{" "}
        <p className="header_item">
          <a href="login">Sign out</a>
        </p>{" "}
      </header>
      <div id="sidebar">
        <a href="mainpage" className="sidebar_item">
          Dashboard
        </a>
        <a href="view" className="sidebar_item">
          View Claims
        </a>
        <a href="submit" className="sidebar_item">
          Submit a Claim
        </a>
        <a href="report" className="sidebar_item">
          Report an Issue
        </a>
        <a href="register" className="sidebar_item">
          Register an Account
        </a>
        <a href="review" className="sidebar_item">
          Review a Claim
        </a>
        <a href="profile" className="sidebar_item">
          Profile
        </a>
      </div>
=======
>>>>>>> parent of 448e500 (Delete app/register/page.tsx -trying to use page.js)
      <div id="contentbox">
        <h1>Register</h1>
        <div className="register-box">
          <form id="form" name="register-form" method="post" action="">
            <fieldset>
              <legend>Register a new staff</legend>
              <br></br>

              <section>
<<<<<<< HEAD
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

=======
                <label htmlFor="fName">First Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="lName">Last Name:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

>>>>>>> parent of 448e500 (Delete app/register/page.tsx -trying to use page.js)
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  minLength={8}
                />

<<<<<<< HEAD
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="bio">Contact Number:</label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  minLength={12}
                />

=======
>>>>>>> parent of 448e500 (Delete app/register/page.tsx -trying to use page.js)
                <label htmlFor="title">Title:</label>
                <select id="title" name="title">
                  <option value="1">Administrator</option>
                  <option value="1">IT Support Staff</option>
                  <option value="2">Line Managers</option>
                  <option value="1">Finance Team</option>
                  <option value="1">Employee</option>
                </select>
              </section>

              <div className="form-actions">
                <button type="submit">Confirm</button>
<<<<<<< HEAD
                <button type="reset">Clear</button>
=======
                <button type="submit">Back</button>
>>>>>>> parent of 448e500 (Delete app/register/page.tsx -trying to use page.js)
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

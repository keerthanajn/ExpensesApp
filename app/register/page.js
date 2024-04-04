'use client';
import './register.css'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  
  return (
    <>
      <header> <a href="mainpage" class="header_item">FDM Expenses App</a>   <p href="login" class="header_item"><a href="#home">Sign out</a></p> </header>
      <div id="sidebar">
          <a href="view" class="sidebar_item">View Claims</a>
          <a href="submit" class="sidebar_item">Submit a Claim</a>
          <a href="reviews" class="sidebar_item">Review a Claim</a>
          <a href="register" class="sidebar_item">Register an account</a>
          <a href="profile" class="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
        <h1>Register</h1>
      <div className="register-box">
        <form id="form" name="register-form" method="post" action="">
          <fieldset>
            
              <legend>Register a new staff</legend><br></br>
            
            <section>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username"/>

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" minLength="8"/>

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="bio">Contact Number:</label>
              <input type="number" id="contact" name="contact" minLength="12" />

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
                <button type="submit">Back</button>
            </div>
          </fieldset>
        </form>
      </div>
      </div>
    </>
  )
}
    
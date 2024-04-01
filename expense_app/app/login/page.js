'use client';
import React from 'react';
import './login.css'
import Link from 'next/link';

export default function Login() {
  // Any state or functions would go here

  return (
    <div>
      <h1>Expenses App</h1>
      <div className="login-settings-box">
        <form method="GET" action="http://webprojects.eecs.qmul.ac.uk/un300/week4/week4_process.php">
          <fieldset>
            <legend>Login</legend>
            <div className="blueBorder">
              <label>Enter Username</label>
              <br />
              <input type="text" name="username" />
              <br />
              <label>Enter Password</label>
              <br />
              <input type="password" name="password" />
              <br />
              <br />
              <input className="blueButton" type="submit" value="Submit" />
              <input className="blueButton" type="reset" value="Clear Form" />
            </div>
            <br />
            <div className="blueBorder">
              <label>Are you a robot?</label>
              <br />
              <br />
              <img src="CaptchaImage.png" alt="Captcha Image" style={{ width: '50%', height: '50%' }} />
              <br />
              <label>Enter text here:</label>
              <input type="text" name="Captcha" />
              <br />
              <input className="blueButton" type="submit" value="Check Captcha" />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
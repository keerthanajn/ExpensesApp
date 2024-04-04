"use client";
import React from "react";
import "./login.css";
import Link from "next/link";

export default function Login() {
  // Any state or functions would go here

  return (
    <>
      <form method="GET" action="">
        <legend>Login</legend>
        <div className="blueBorder">
          <input placeholder="Username" type="text" name="username" />
          <br />

          <br />
          <input placeholder="Password" type="password" name="password" />
          <br />
          <br />
          <button type="reset">Clear</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}

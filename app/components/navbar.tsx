"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Navbar() {
  return (
    <header>
      {" "}
      <p>
        <a href="/view" className="header_item">
          FDM Expenses App
        </a>
      </p>{" "}
      <p className="header_item">
        <LogoutLink>Sign out</LogoutLink>
      </p>{" "}
    </header>
  );
}

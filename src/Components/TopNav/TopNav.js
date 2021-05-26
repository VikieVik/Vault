import React from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="TopNav">
      <div className="navbar-container">
        <Link to="/">
          <h1>Vault</h1>
        </Link>
      </div>
    </div>
  );
}

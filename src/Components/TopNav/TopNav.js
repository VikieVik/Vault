import React, { useState } from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";
import stackswanLogo from "../../img/stackswan-logo-name-white.svg";

export default function TopNav() {
  return (
    <div className="TopNav">
      <div className="navbar-container">
        <Link to="/">
          <img id="stackswan-logo" src={stackswanLogo} alt="" />
        </Link>
      </div>
    </div>
  );
}

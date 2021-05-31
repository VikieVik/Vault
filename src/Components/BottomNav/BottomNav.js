import React, { useState, useEffect } from "react";
import "./BottomNav.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Home, Lock, Users, Settings } from "react-feather";

export default function BottomNav() {
  let location = useLocation();
  let history = useHistory();

  //svg icon color state
  const [icon1Color, setIcon1Color] = useState("#6e6e6e");
  const [icon2Color, setIcon2Color] = useState("#6e6e6e");
  const [icon3Color, setIcon3Color] = useState("#6e6e6e");
  const [icon4Color, setIcon4Color] = useState("#6e6e6e");

  useEffect(() => {
    /*
    var currentRoute = location.pathname;
    console.log(currentRoute);
    */

    switch (location.pathname) {
      case "/home":
        setIcon1Color("#000");
        break;

      case "/users":
        setIcon2Color("#000");

        break;
      case "/devices":
        setIcon3Color("#000");
        break;

      case "/setting":
        setIcon4Color("#000");
        break;
      default:
        setIcon1Color("#6e6e6e");
        setIcon2Color("#6e6e6e");
        setIcon3Color("#6e6e6e");
        setIcon4Color("#6e6e6e");

        break;
    }
  }, [location.pathname]);

  return (
    <div className="BottomNav">
      <div className="bottom-nav-container">
        <Link to="/home" className="nav-link">
          <Home size="28px" color={icon1Color} />
        </Link>
        <Link to="/users" className="nav-link">
          <Users size="28px" color={icon2Color} />
        </Link>
        <Link to="/devices" className="nav-link">
          <Lock size="28px" color={icon3Color} />
        </Link>
        <Link to="/setting" className="nav-link">
          <Settings size="28px" color={icon4Color} />
        </Link>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./BottomNav.css";
import { useLocation } from "react-router-dom";

export default function BottomNav() {
  const [pageTitle, setPagetitle] = useState("Networks");

  let location = useLocation();

  // Executes each time new page loads,
  //finds current route and based on that changes BottomNav UI
  useEffect(() => {
    /*
    var currentRoute = location.pathname;
    console.log(currentRoute);
    */
    switch (location.pathname) {
      case "/home":
        setPagetitle("Networks");
        break;
      case "/live":
        setPagetitle("Live Data");
        break;
      default:
        setPagetitle("Networks");
        break;
    }
  }, [location.pathname]);

  return (
    <div className="BottomNav">
      <h1 className="page-title">{pageTitle}</h1>
    </div>
  );
}

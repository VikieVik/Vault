import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { connectToBleDevice } from "../../Components/BLE.js";
import { Chart } from "react-google-charts";
import TopNav from "../../Components/TopNav/TopNav.js";
import BottomNav from "../../Components/BottomNav/BottomNav.js";
import Card from "../../Components/Card/Card.js";
import stackswanFooterLogo from "../../img/stackswan-footer-logo.svg";

function Home() {
  return (
    <div className="Home">
      <TopNav />
      <BottomNav />
      <div className="main-container">
        <div className="data-container">
          <div className="network-card-grid">
            <Card cardName="Demo" cardValue="2" />
            <Card cardName="Berry Orchard" cardValue="7" />
            <Card cardName="Chicken Farm" cardValue="5" />
          </div>
          <div className="local-connection-control-container">
            <h1 className="local-connection-title">Local Connection</h1>
            <div className="local-connection-vitals-card-grid">
              <Card cardName="Connection Status" cardValue="NONE" />
              <Card cardName="Signal Strength" cardValue="NONE" />
              <Card cardName="Cloud Connection" cardValue="NONE" />
              <button className="connect-button" onClick={connectToBleDevice}>
                Press to Connect
              </button>
            </div>
            <Link to="/live">
              <button className="live-data-Link">See Live Data </button>
            </Link>
          </div>
        </div>
        <div className="footer">
          <img id="stackswan-footer-logo" src={stackswanFooterLogo} alt="" />
        </div>
        <div />
      </div>
    </div>
  );
}

export default Home;

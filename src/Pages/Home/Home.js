import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { connectToBleDevice } from "../../Components/BLE.js";
import { Chart } from "react-google-charts";
import TopNav from "../../Components/TopNav/TopNav.js";
import BottomNav from "../../Components/BottomNav/BottomNav.js";
import Card from "../../Components/Card/Card.js";
import stackswanFooterLogo from "../../img/stackswan-footer-logo.svg";

function Home() {
  const [installButtonDisplay, setInstallButtonDisplay] = useState("flex");
  let deferredPrompt;

  useEffect(() => {
    // check if app in standalone aka installed mode if yes remove install card button
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstallButtonDisplay("none");
    }
  }, []);
  /**
    Listen for the beforeinstallprompt event
    If your Progressive Web App meets the required installation criteria,
    the browser fires a beforeinstallprompt event. Save a reference to
    the event, and update your user interface to indicate that the user 
    can install your PWA. 
   */
  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    console.log("You can install this App");
  });

  //Detect when the PWA was successfully installed
  window.addEventListener("appinstalled", (evt) => {
    // Log install to analytics
    console.log("INSTALL: Success");

    // Remove Install card as soon as installtion is done
    setInstallButtonDisplay("none");
  });

  //google chromes PWA install prompt is activated
  const installPWA = () => {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  return (
    <div className="Home">
      <TopNav />
      <BottomNav />
      <div className="main-container">
        <div className="data-container">
          <div className="network-card-grid">
            <button
              className="install-button"
              onClick={installPWA}
              style={{ display: installButtonDisplay }}
            >
              Install This App
            </button>
            <Card cardName="Berry Orchard" cardValue="7" />
            <Card cardName="Chicken Farm" cardValue="5" />
          </div>
          <div className="local-connection-control-container">
            <h1 className="local-connection-title">Device Vitals</h1>
            <div className="local-connection-vitals-card-grid">
              <Card cardName="Signal Quality" cardValue="NONE" />
              <Card cardName="BLE Connection" cardValue="NONE" />
              <Card cardName="Battery" cardValue="NONE" />
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

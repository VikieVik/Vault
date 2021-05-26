import React, { useEffect, useState } from "react";
import "./Home.css";
import { connectToBleDevice, sendToBleDevice } from "../../Components/BLE.js";
import TopNav from "../../Components/TopNav/TopNav.js";

function Home() {
  const [installButtonDisplay, setInstallButtonDisplay] = useState("flex");
  const [inputData, setInputData] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form sending
    sendToBleDevice(inputData);
    event.target.value = "";
  };

  const handleInputChnage = (event) => {
    event.preventDefault(); // Prevent form sending
    setInputData(event.target.value);
  };

  return (
    <div className="Home">
      <TopNav />
      <div className="main-container">
        <div className="content-container">
          <button
            className="install-button"
            onClick={installPWA}
            style={{ display: installButtonDisplay }}
          >
            Install This App
          </button>
          <button className="connect-button" onClick={connectToBleDevice}>
            Press to Connect
          </button>
          <form id="send-password-form" onSubmit={handleSubmit}>
            <input
              id="password-input"
              type="password"
              placeholder="Type Password"
              onChange={handleInputChnage}
            />
            <button id="password-send-button" type="submit">
              SEND
            </button>
          </form>
        </div>

        <div />
      </div>
    </div>
  );
}

export default Home;

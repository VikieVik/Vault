import React from "react";
import "./LiveData.css";
import { connectToBleDevice } from "../../Components/BLE.js";
import TopNav from "../../Components/TopNav/TopNav.js";
import BottomNav from "../../Components/BottomNav/BottomNav.js";
import MessageList from "../../Components/MessageList/MessageList.js";
import stackswanFooterLogo from "../../img/stackswan-footer-logo.svg";
import BleControlBar from "../../Components/BleControlBar/BleControlBar.js";

function LiveData() {
  return (
    <div className="LiveData">
      <TopNav />
      <BottomNav />
      <div className="main-container">
        <MessageList />
        <div className="footer">
          <img id="stackswan-footer-logo" src={stackswanFooterLogo} alt="" />
        </div>
        <div />
      </div>
    </div>
  );
}

export default LiveData;

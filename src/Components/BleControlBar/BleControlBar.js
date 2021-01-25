import React, { useState } from "react";
import "./BleControlBar.css";
import { Link } from "react-router-dom";

// BLE control functions
import {
  sendToBleDevice,
  connectToBleDevice,
  startReadingBleDevice,
  stopReadingBleDevice,
} from "../BLE";

export default function BleControlBar() {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form sending
    sendToBleDevice(inputData);
    event.target.value = "";
  };

  const handleInputChnage = (event) => {
    event.preventDefault(); // Prevent form sending
    setInputData(event.target.value);
  };

  function clearInputField() {
    const handleInputChnage = (event) => {
      event.preventDefault(); // Prevent form sending
      event.target.value = "";
    };
  }
  return (
    <div className="BleControlBar">
      <div className="controls">
        <button id="read" onClick={connectToBleDevice}>
          Connect
        </button>
        <button id="start" onClick={startReadingBleDevice}>
          Start
        </button>
        <button id="stop" onClick={stopReadingBleDevice}>
          Stop
        </button>

        <form id="send-form" onSubmit={handleSubmit}>
          <input
            id="input"
            type="search"
            placeholder="Data to send ..."
            onChange={handleInputChnage}
          />
          <button id="submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

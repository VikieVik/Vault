import React from "react";
import "./Card.css";

/**
 * Standard Card UI that is rendered inside a grid to show various data
 * Todo: the content should be variable and should be assigned rendering using props
 */

export default function Card(props) {
  return (
    <div className="Card">
      <div className="card-status-color"></div>
      <h1 className="card-value">{props.cardValue}</h1>
      <h1 className="card-name">{props.cardName}</h1>
    </div>
  );
}

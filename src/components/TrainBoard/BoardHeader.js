import React from "react";
import "./Board.css";

function BoardHeader() {
  return (
    <div className="row-container">
      <div className="header-data">Time</div>
      <div className="header-data">Track</div>
      <div className="header-data">Estimated</div>
      <div className="header-data-info">Info</div>
    </div>
  );
}

export default BoardHeader;

import React from "react";
import "./Board.css";

function BoardHeader() {
  return (
    <div className="row-container">
      <div className="header-data">Tid</div>
      <div className="header-data">Spår</div>
      <div className="header-data">Ny tid</div>
      <div className="header-data-info">Info</div>
    </div>
  );
}

export default BoardHeader;

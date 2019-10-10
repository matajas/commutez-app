import React from "react";

function BoardRow({ train }) {
  const advertisedTimeStyle = train.estimatedTime
    ? "row-data-delayed"
    : "row-data";

  return (
    <div className="row-container">
      <div className={advertisedTimeStyle}>{train.advertisedTime}</div>
      <div className="row-data">{train.track}</div>
      <div className="row-data">{train.estimatedTime}</div>
      <div className="row-data-info">{train.message}</div>
    </div>
  );
}

export default BoardRow;

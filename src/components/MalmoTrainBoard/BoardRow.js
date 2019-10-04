import React from "react";

function BoardRow({ train }) {
  const formatTime = date => {
    return (
      date &&
      new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    );
  };

  return (
    <div className="row-container">
      <div>{formatTime(train.AdvertisedTimeAtLocation)}</div>
      <div>{formatTime(train.EstimatedTimeAtLocation)}</div>
    </div>
  );
}

export default BoardRow;

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
      <div className="row-data">
        {formatTime(train.AdvertisedTimeAtLocation)}
      </div>
      <div className="row-data">
        {formatTime(train.EstimatedTimeAtLocation)}
      </div>
      <div className="row-data-info">
        {train.Deviation ? train.Deviation.join() : null}
      </div>
    </div>
  );
}

export default BoardRow;

import React from "react";

export default function BoardTitle({ station, refetch }) {
  return (
    <div className="board-title">
      <p>{station}</p>
      <div>
        <button
          className="refreshButton"
          onClick={() => {
            refetch();
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

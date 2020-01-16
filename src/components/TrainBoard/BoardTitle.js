import React from "react";

export default function BoardTitle({
  station,
  refetch,
  allowSwitching,
  onSwitchStation
}) {
  return (
    <div className="board-title">
      <div style={{ textAlign: "left" }}>
        {allowSwitching && (
          <div
            onClick={onSwitchStation}
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "0.25rem"
            }}
          >
            <i className="far fa-arrow-alt-circle-up" />
          </div>
        )}
        <span>{station}</span>
        {allowSwitching && (
          <div
            onClick={onSwitchStation}
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "0.25rem"
            }}
          >
            <i className="far fa-arrow-alt-circle-down" />
          </div>
        )}
      </div>
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

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import trainsMalmo from "../../graphql/gql/trainsMalmo";
import "./Board.css";
import BoardHeader from "./BoardHeader";
import BoardRow from "./BoardRow";

function MalmoTrainBoard() {
  const { loading, data } = useQuery(trainsMalmo);
  const formatTime = date => {
    return (
      date &&
      new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    );
  };
  const rows =
    data && data.trainsFromMalmo
      ? data.trainsFromMalmo.map((t, index) => {
          const mappedTrain = {
            advertisedTime: formatTime(t.AdvertisedTimeAtLocation),
            track: t.TrackAtLocation,
            estimatedTime: formatTime(t.EstimatedTimeAtLocation),
            message: t.Deviation && t.Deviation.join()
          };
          return (
            <li key={index}>
              <BoardRow train={mappedTrain} />
            </li>
          );
        })
      : null;

  const board = (
    <div>
      <p>Malmö C</p>
      <ul>
        <li>
          <BoardHeader />
        </li>
        {rows}
      </ul>
    </div>
  );
  return <div className="train-board">{loading ? "loading..." : board}</div>;
}

export default MalmoTrainBoard;

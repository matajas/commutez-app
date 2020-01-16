/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import trainsMalmo from "../../graphql/gql/trainsMalmo";
import "./Board.css";
import BoardHeader from "./BoardHeader";
import BoardRow from "./BoardRow";
import BoardTitle from "./BoardTitle";

function MalmoTrainBoard() {
  const savedStation = localStorage.getItem("station");
  const [currentStation, setCurrentStation] = useState(
    savedStation ? savedStation : "M"
  );
  const { loading, data, refetch } = useQuery(trainsMalmo, {
    notifyOnNetworkStatusChange: true,
    variables: {
      stationId: currentStation
    }
  });

  useEffect(() => {
    refetch();
  }, []);

  const formatTime = date => {
    return (
      date &&
      new Date(date).toLocaleTimeString("sv-SE", {
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
    <Fragment>
      <BoardTitle
        station={currentStation === "M" ? "Malmö C" : "Hyllie"}
        refetch={refetch}
        allowSwitching
        onSwitchStation={() => {
          const newStation = currentStation === "M" ? "Hie" : "M";
          setCurrentStation(newStation);
          localStorage.setItem("station", newStation);
        }}
      />
      <ul>
        <li>
          <BoardHeader />
        </li>
        {rows}
      </ul>
    </Fragment>
  );
  return <div className="train-board">{loading ? "loading..." : board}</div>;
}

export default MalmoTrainBoard;

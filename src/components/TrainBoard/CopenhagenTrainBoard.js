/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import trainsCopenhagen from "../../graphql/gql/trainsCopenhagen";
import "./Board.css";
import BoardHeader from "./BoardHeader";
import BoardRow from "./BoardRow";
import BoardTitle from "./BoardTitle";

const stationMap = {
    "008600856": "Ørestad",
    120000007: "Cph Airport",
};

function CopenhagenTrainBoard() {
    const savedStation = localStorage.getItem("stationDK");
    const [currentStation, setCurrentStation] = useState(savedStation ? savedStation : "008600856");
    const { loading, data, refetch } = useQuery(trainsCopenhagen, {
        notifyOnNetworkStatusChange: true,
        variables: {
            stationId: currentStation,
        },
    });

    useEffect(() => {
        refetch();
    }, []);

    const rows =
        data && data.trainsFromCopenhagen
            ? data.trainsFromCopenhagen.map((t, index) => {
                  const mappedTrain = {
                      advertisedTime: t.time,
                      track: t.track,
                      estimatedTime: t.rtTime,
                      message: null,
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
                station={stationMap[currentStation]}
                allowSwitching
                refetch={refetch}
                onSwitchStation={() => {
                    const newStation = currentStation === "008600856" ? "120000007" : "008600856";
                    setCurrentStation(newStation);
                    localStorage.setItem("stationDK", newStation);
                }}
            />
            <div className={"blink_me"}>Current Gentleman Jack price (DKK): {data && data.bourbonPrice}</div>
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

export default CopenhagenTrainBoard;

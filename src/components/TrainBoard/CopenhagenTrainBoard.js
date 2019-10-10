import React from "react";
import { useQuery } from "@apollo/react-hooks";
import trainsFromCopenhagen from "../../graphql/gql/trainsCopenhagen";
import "./Board.css";
import BoardHeader from "./BoardHeader";
import BoardRow from "./BoardRow";

function CopenhagenTrainBoard() {
  const { loading, data } = useQuery(trainsFromCopenhagen);
  const rows =
    data && data.trainsFromCopenhagen
      ? data.trainsFromCopenhagen.map((t, index) => {
          const mappedTrain = {
            advertisedTime: t.time,
            track: t.track,
            estimatedTime: t.rtTime,
            message: null
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
      <p>Ørestad</p>
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

export default CopenhagenTrainBoard;

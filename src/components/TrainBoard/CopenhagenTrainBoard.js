import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import trainsCopenhagen from "../../graphql/gql/trainsCopenhagen";
import "./Board.css";
import BoardHeader from "./BoardHeader";
import BoardRow from "./BoardRow";
import BoardTitle from "./BoardTitle";

function CopenhagenTrainBoard() {
  const { loading, data, refetch } = useQuery(trainsCopenhagen);
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
    <Fragment>
      <BoardTitle station="Ørestad" refetch={refetch} />
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

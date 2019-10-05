import React from "react";
import { useQuery } from "@apollo/react-hooks";
import trainsMalmo from "../../graphql/gql/trainsMalmo";
import "./MalmoTrainBoard.css";
import BoardRow from "./BoardRow";

function MalmoTrainBoard() {
  const { loading, data } = useQuery(trainsMalmo);
  const rows =
    data && data.trainsFromMalmo
      ? data.trainsFromMalmo.map(t => (
          <li>
            <BoardRow train={t} />
          </li>
        ))
      : null;
  const board = (
    <ul>
      <li>
        <div className="row-container">
          <div className="header-data">Tid</div>
          <div className="header-data">Ny tid</div>
          <div className="header-data-info">Info</div>
        </div>
      </li>
      {rows}
    </ul>
  );
  return <div className="train-board">{loading ? "loading..." : board}</div>;
}

export default MalmoTrainBoard;

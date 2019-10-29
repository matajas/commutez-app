/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from "react";
import MalmoTrainBoard from "./TrainBoard/MalmoTrainBoard";
import CopenhagenTrainBoard from "./TrainBoard/CopenhagenTrainBoard";
import AppHeader from "./AppHeader/AppHeader";

export default function Main() {
  const [commuteMode, setCommuteMode] = useState(true);
  const [View, setView] = useState(null);

  const handleToggle = () => {
    setCommuteMode(!commuteMode);
  };

  const setBoards = () => {
    if (!commuteMode) {
      setView(
        <Fragment>
          <MalmoTrainBoard />
          <CopenhagenTrainBoard />
        </Fragment>
      );
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        const viewToSet =
          position.coords.longitude > 12.8 ? (
            <MalmoTrainBoard />
          ) : (
            <CopenhagenTrainBoard />
          );
        setView(viewToSet);
      });
    }
  };

  useEffect(() => {
    setBoards();
  }, [commuteMode]);

  return (
    <Fragment>
      <AppHeader commuteMode={commuteMode} onToggleView={handleToggle} />
      {View}
    </Fragment>
  );
}

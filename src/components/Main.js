import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect
} from "react";
import MalmoTrainBoard from "./TrainBoard/MalmoTrainBoard";
import CopenhagenTrainBoard from "./TrainBoard/CopenhagenTrainBoard";
import AppHeader from "./AppHeader/AppHeader";
import Spinner from "./common/Spinner";
import "../App.css";

export default function Main() {
  const [commuteMode, setCommuteMode] = useState(true);
  const [View, setView] = useState(null);
  const setBoardsRef = useRef();
  const pullLoad = useRef(false);

  const handleToggle = () => {
    pullLoad.current = true;
    setCommuteMode(!commuteMode);
  };

  const setBoards = useCallback(() => {
    setView(null);
    if (!commuteMode) {
      pullLoad.current = false;
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

        pullLoad.current = false;
        setView(viewToSet);
      });
    }
  }, [commuteMode]);

  useLayoutEffect(() => {
    const pStart = { x: 0, y: 0 };
    const pStop = { x: 0, y: 0 };

    setBoardsRef.current = setBoards;

    const swipeStart = e => {
      if (typeof e["targetTouches"] !== "undefined") {
        const touch = e.targetTouches[0];
        pStart.x = touch.screenX;
        pStart.y = touch.screenY;
      } else {
        pStart.x = e.screenX;
        pStart.y = e.screenY;
      }
    };

    const swipeEnd = e => {
      if (typeof e["changedTouches"] !== "undefined") {
        const touch = e.changedTouches[0];
        pStop.x = touch.screenX;
        pStop.y = touch.screenY;
      } else {
        pStop.x = e.screenX;
        pStop.y = e.screenY;
      }

      swipeCheck();
    };

    const swipeCheck = () => {
      const changeY = pStart.y - pStop.y;
      const changeX = pStart.x - pStop.x;
      if (isPullDown(changeY, changeX)) {
        pullLoad.current = true;
        setBoardsRef.current();
      }
    };

    const isPullDown = (dY, dX) => {
      // methods of checking slope, length, direction of line created by swipe action
      return (
        dY < 0 &&
        ((Math.abs(dX) <= 100 && Math.abs(dY) >= 100) ||
          (Math.abs(dX) / Math.abs(dY) <= 0.3 && dY >= 60))
      );
    };

    window.addEventListener(
      "touchstart",
      e => {
        swipeStart(e);
      },
      false
    );
    window.addEventListener(
      "touchend",
      e => {
        swipeEnd(e);
      },
      false
    );
    return () => {
      window.removeEventListener("touchstart", swipeStart);
      window.removeEventListener("touchend", swipeEnd);
    };
  }, [setBoards]);

  useEffect(() => {
    setBoards();
  }, [commuteMode, setBoards]);

  return (
    <Fragment>
      {pullLoad.current && (
        <div className="pull-refresh-container">
          <Spinner />
        </div>
      )}
      <AppHeader commuteMode={commuteMode} onToggleView={handleToggle} />
      {View}
    </Fragment>
  );
}

import React from "react";
import Toggle from "../common/Toggle";
import styles from "./AppHeader.module.css";

export default function AppHeader({ onToggleView, commuteMode }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.toggleTitle}>Commute mode</div>
      <div className={styles.toggleContainer}>
        <Toggle isChecked={commuteMode} onClick={onToggleView} />
      </div>
    </div>
  );
}

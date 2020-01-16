import React from "react";
import Toggle from "../common/Toggle";
import styles from "./AppHeader.module.css";

export default function AppHeader({ onToggleView, commuteMode }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitleContainer}>
        <i className="fas fa-train"></i>
        <span className={styles.headerTitle}>Commutez</span>
      </div>
      <div className={styles.commuteModeContainer}>
        <div className={styles.toggleTitle}>Commute mode</div>
        <div className={styles.toggleContainer}>
          <Toggle isChecked={commuteMode} onClick={onToggleView} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import classNames from "classnames";
import styles from "./Toggle.module.css";

export default function Toggle({ onClick, isChecked }) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={onClick} />
      <div className={classNames(styles.slider, styles.round)}></div>
    </label>
  );
}

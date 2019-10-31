import React from "react";
import classNames from "classnames";
import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div
      className={classNames(
        styles.spinner,
        styles.white,
        styles.large,
        styles.animating
      )}
    >
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
    </div>
  );
}

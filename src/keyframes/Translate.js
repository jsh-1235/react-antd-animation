import styles from "./Translate.module.css";

import React from "react";

export default function Translate({ url }) {
  return (
    <div className={styles.root}>
      <div className={styles.ball}></div>
    </div>
  );
}
